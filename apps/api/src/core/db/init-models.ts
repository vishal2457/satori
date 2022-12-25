import type { Sequelize } from "sequelize";
import { BuildLogs } from "../../modules/projects/models/build-logs.model";
import { Commits } from "../../modules/projects/models/commits.model";
import { Project } from "../../modules/projects/models/project.model";
import fancyLogger from "../logger/fancy-logger";

const models = [Project, BuildLogs, Commits];

export function initModels(_sequelize: Sequelize) {
  const initiatedModels:any = {};
  for (let m of models) {
   const t = m.initModel(_sequelize);
   initiatedModels[t.tableName] = t
  }
  fancyLogger.log('extra', `${models.length} models initiated`)
  return initiatedModels;
}
