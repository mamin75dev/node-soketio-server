// import {mongoose} from "../Config/db.js";
// import {Schema} from 'mongoose'
// const {Types} =Schema;
//
// export const UserModel = mongoose.model('User', {
//   id: Types.ObjectId,
//   username:Types.String,
//   avatar:Types.String,
//   created_at:Types.Date,
//   updated_at:Types.Date,
//   status:Types.String,
//   age:Types.Number,
// });

import { sequelize } from "../Config/db.js";
import * as Sequelize from "sequelize";
import { UserModel } from "./User.js";
import { GroupModel } from "./Group.js";
const { DataTypes } = Sequelize.DataTypes;
const MessageModel = sequelize.define(
    "Message",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            values: ["text", "file", "sticker"],
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

export { MessageModel };
// CREATE TABLE users (
//   user_id bigint unsigned auto_increment PRIMARY KEY,
//   username varchar(60) NOT NULL UNIQUE
// -- other user columns here
// );
//
// CREATE TABLE groups (
//   group_id bigint unsigned auto_increment PRIMARY KEY,
//   groupname varchar(60) NOT NULL UNIQUE
// -- other group columns here
// );
//
// CREATE TABLE group_users (
//   group_id bigint unsigned,
//   user_id bigint unsigned,
//   PRIMARY KEY (group_id, user_id),
//   CONSTRAINT group_users_fk1 FOREIGN KEY (group_id) REFERENCES groups (group_id),
//   CONSTRAINT group_users_fk2 FOREIGN KEY (user_id) REFERENCES users (user_id)
// );
//
// CREATE TABLE messages (
//   message_id bigint unsigned auto_increment PRIMARY KEY,
//   user_id bigint unsigned,
//   message TEXT,
//   -- other columns here, e.g. timestamp
// CONSTRAINT messages_fk1 FOREIGN KEY (user_id) REFERENCES users (user_id)
// );
