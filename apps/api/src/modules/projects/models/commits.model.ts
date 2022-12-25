import { CreationOptional, DataTypes, Model, Sequelize } from "sequelize";
import { BuildLogs } from "./build-logs.model";

export class Commits extends Model {
  declare id: CreationOptional<number>;
  declare message: string; //build log id
  declare title: string;
  declare projectID: number;
  declare timestamp: string;
  declare link: string;
  declare author: string;
  declare added: number;
  declare modified: number;
  declare removed: number;

  static initModel(sequelize: Sequelize): typeof Commits {
    Commits.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        buildLogID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references:{
            model: BuildLogs,
          }
        },
        project: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        message: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        userAvatar: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        link: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        timestamp: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        added: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        modified: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        removed: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        indexes: [{ fields: ["buildLogID"], using: "BTREE" }],
      }
    );

    return Commits;
  }
}
