import { Router } from "express";
import { success, serverError } from "proses-response";
import rmFetcher from "../../core/redmine/axios-instance";
import { BuildLogs } from "./models/build-logs.model";
import { Commits } from "./models/commits.model";
import { Project } from "./models/project.model";
const r = Router();

r.get("/", async (req, res) => {
  try {
    let projects = await rmFetcher.get("projects.json?limit=100");
    success(res, projects.data, "projects");
  } catch (error) {
    serverError(res, error);
  }
});

r.get("/:id/byid", async (req, res) => {
  try {
    let project = await rmFetcher.get(`projects/${req.params.id}.json`);
    const satoriProject = await Project.findOne({
      where: { project: project.data.project.identifier },
      order: [[BuildLogs, 'id', 'DESC']],
      include: [{model: BuildLogs, include: [{model: Commits}]}]
    });
    const data = {
      ...project.data,
      satori: satoriProject
    }
    success(res,data, "projects");
  } catch (error) {
    console.log(error);
    
    serverError(res, error);
  }
});

r.post("/update-project", async (req, res) => {
  try {
    let project = await Project.findOne({
      where: { project: req.body.project },
    });

    if (project) {
      await Project.updateProject(req.body, req.body.project);
    } else {
      await Project.create(req.body);
    }
    success(res, project, `Updated`);
  } catch (error) {
    console.log(error);

    serverError(res, error);
  }
});

export default r;
