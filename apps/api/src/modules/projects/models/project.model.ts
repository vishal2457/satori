import { CreationOptional, DataTypes, Model, Sequelize } from "sequelize";

export class Project extends Model {
  declare id: CreationOptional<number>;
  declare serverURL: string

  static initModel(sequelize: Sequelize): typeof Project {
    Project.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        project: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        link: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        serverURL: {
          type: DataTypes.STRING(2000),
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        indexes: [{ fields: ["project"], using: "BTREE" }],
      }
    );

    return Project;
  }

  static updateProject(
    body: { link: string },
    project: string
  ): Promise<[affectedCount: number]> {
    return Project.update(body, { where: { project } });
  };
}
