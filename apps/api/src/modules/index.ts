import { Application } from "express";

import projects from "./projects/projects.api";
import users from "./users/users.api";
import gitlab from "./gitlab/gitlab.api"

export default (app: Application) => {
    app
    .use('/projects', projects)
    .use('/users', users)
    .use('/gl', gitlab)
}