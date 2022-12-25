import { Sequelize, Options, Model, ModelStatic } from "sequelize";
import configs from "../../config/config";
import { APP_SETTINGS } from "../environment";
import fancyLogger from "../logger/fancy-logger";
import { filterRefKeys } from "../utils/fiter-refs.util";
import { initModels } from "./init-models";

const env = process.env.NODE_ENV || "development";
const config = (configs as { [key: string]: Options })[env];

export class DbConnection {
  static models: Record<string, ModelStatic<Model<{}, {}>>>;

  static db: Sequelize = new Sequelize({
    ...config,
    logging: false,
  });

  static init() {
    this.authenticate();
    this.models = initModels(this.db);
    this.associate();
  }

  static associate() {
    try {
      const modelKeys = Object.keys(this.models);
      for (let m of modelKeys) {
        const child = this.models[m];
        const refs = filterRefKeys(child.getAttributes());
        for (let r of refs) {
          const parent = this.models[r.references.model];
          parent.hasMany(child, { foreignKey: r.references.key || r.field });
        }
      }
      fancyLogger.log("extra", "Accosiations successfull");
    } catch (error) {
      fancyLogger.error("extra", "Associations failed");
    }
  }

  static authenticate() {
    fancyLogger.start("db", "connecting db...");
    this.db
      .authenticate()
      .then(() => {
        fancyLogger.logForDB();
      })
      .catch((err) => {
        fancyLogger.error("db", err);
      });
  }

  static sync() {
    fancyLogger.start("dbsync", `syncing db ${APP_SETTINGS.DB_NAME}...`);
    this.db
      .sync()
      .then(() => {
        fancyLogger.logForDbSync();
      })
      .catch((err) => {
        fancyLogger.error("dbsync", `Error Connecting db ${err}`);
      });
  }
}

export default DbConnection;
