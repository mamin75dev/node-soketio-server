import { GroupModel } from "./Group.js";

import { sequelize } from "../Config/db.js";
import * as Sequelize from "sequelize";
const { DataTypes } = Sequelize.DataTypes;
const UserModel = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // password: {
        //   type: DataTypes.STRING,
        //   set(value) {
        //     // Storing passwords in plaintext in the database is terrible.
        //     // Hashing the value with an appropriate cryptographic hash function is better.
        //     // Using the username as a salt is better.
        //     this.setDataValue('password', hash(this.username + value));
        //   }
        // },
        name: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        last_name: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
            default: 0,
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

export { UserModel };
