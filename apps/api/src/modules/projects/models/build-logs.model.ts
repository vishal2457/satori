import {
    CreationOptional,
    DataTypes,
    Model,
    Sequelize
} from 'sequelize'
import { Project } from './project.model'


export class BuildLogs extends Model {
    declare id: CreationOptional<number>
    declare event: string
    declare userAvatar: string
    declare totalCommits: number
    declare author: string
    declare createdAt: string
    declare project: string;
    declare sourceBranch: string;
    declare targetBranch: string;
    declare mergeStatus: string;
    declare url: string;
    declare action: string;
    declare refBranch: string;
    declare title: string;
    declare message: string;


    static initModel(sequelize: Sequelize): typeof BuildLogs {
        BuildLogs.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            projectID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references:{
                    model: Project
                }
            },
            redmineTask: {
                type: DataTypes.STRING,
                allowNull: true
            },
            project: {
                type: DataTypes.STRING,
                allowNull: false
            },
            event: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userAvatar: {
                type: DataTypes.STRING,
                allowNull: true
            },
            totalCommits: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sourceBranch: {
                type: DataTypes.STRING,
                allowNull: true
            },
            targetBranch: {
                type: DataTypes.STRING,
                allowNull: true
            },
            mergeStatus: {
                type: DataTypes.STRING,
                allowNull: true
            },
            refBranch: {
                type: DataTypes.STRING,
                allowNull: true
            },
            action: {
                type: DataTypes.STRING,
                allowNull: true
            },
            url: {
                type:DataTypes.STRING,
                allowNull: true
            },
            title: {
                type:DataTypes.STRING,
                allowNull: true
            },
            message: {
                type:DataTypes.STRING,
                allowNull: true
            },
            createdAt: {
                type: DataTypes.STRING,
                allowNull: false
            }

        }, {
            sequelize,
            timestamps: false,
            indexes: [{ fields: ["project"], using: "BTREE" }],

        })

        return BuildLogs
    }

    static fetchByProject(project:string) {
        return BuildLogs.findAll({where: {project}})
     }

}