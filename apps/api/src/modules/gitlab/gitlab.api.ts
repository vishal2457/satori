import axios from "axios";
import { Router } from "express";
import { other } from "proses-response";
import rmFetcher from "../../core/redmine/axios-instance";
import { BuildLogs } from "../projects/models/build-logs.model";
import { Commits } from "../projects/models/commits.model";
import { Project } from "../projects/models/project.model";

const r = Router();

r.post("/:id", async (req, res) => {
  const project = await Project.findOne({
    where: { project: req.params.id },
    raw: true,
  });
  if (!project) {
    return other(res, "Satori: project not found");
  }

  const EVENT: "push" | "merge_request" = req.body.event_type;

  if (EVENT == "merge_request") {
    const payload = formatBlData(req.body);
    const task = getRedmineTask(payload.title);

    await BuildLogs.create({
      ...payload,
      redmineTask: task,
      project: req.params.id,
      projectID: project.id,
    });

    const rmupdate = await rmFetcher.put("/issues/5989.json", { status_id: 2 });
    console.log(rmupdate, "rmupdate");

    await axios.post(`${project.serverURL}/_satori`, {
      ...payload,
      redmineTask: task,
      project: req.params.id,
      projectID: project.id,
    });
    return res.sendStatus(200);
  }

  const { event_name, user_avatar, user_username, commits } = req.body;
  const build = await BuildLogs.create({
    event: event_name,
    projectID: project.id,
    userAvatar: user_avatar,
    project: req.params.id,
    totalCommits: commits.length,
    author: user_username,
    createdAt: new Date().toISOString(),
  });

  const finalCommits = commits.map((i: any) => {
    return {
      message: i.message,
      project: req.params.id,
      title: i.title,
      userAvatar: user_avatar,
      link: i.url,
      author: i.author.name,
      timestamp: i.timestamp,
      added: i.added.length,
      modified: i.modified.length,
      removed: i.removed.length,
      buildLogID: build.id,
    };
  });

  await Commits.bulkCreate(finalCommits);

  res.sendStatus(200);
});

export default r;

//format build log data
function formatBlData(glData: any) {
  const { event_type, user, object_attributes } = glData;
  const {
    target_branch,
    url,
    merge_status,
    created_at,
    source_branch,
    title,
    state,
    action,
  } = object_attributes;

  return {
    event: event_type,
    userAvatar: user.avatar_url,
    author: user.name,
    createdAt: created_at,
    sourceBranch: source_branch,
    targetBranch: target_branch,
    mergeStatus: merge_status,
    url,
    title,
    state,
    action,
  };
}

function getRedmineTask(str: string) {
  try {
    return str.split("#")[1].split(" ")[0];
  } catch (error) {
    return "";
  }
}
