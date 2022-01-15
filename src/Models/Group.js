import { UserModel } from "./User.js";
import { sequelize } from "../Config/db.js";
import * as Sequelize from "sequelize";
const { DataTypes } = Sequelize.DataTypes;
const GroupModel = sequelize.define(
    "Group",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        logo: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM,
            values: ["active", "pending", "deleted"],
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        },
    },
    {
        // Other model options go here
    }
);

export { GroupModel };
