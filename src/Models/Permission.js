import { UserModel } from "./User.js";

import { sequelize } from "../Config/db.js";
import * as Sequelize from "sequelize";
const { DataTypes } = Sequelize.DataTypes;

const PermissionModel = sequelize.define(
    "Permission",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.ENUM,
            values: ["write", "pending", "deleted"],
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
// PermissionModel.belongsTo(UserModel)

export { PermissionModel };
