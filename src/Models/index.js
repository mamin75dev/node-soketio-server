// MessageModel.belongsTo(UserModel);
// MessageModel.belongsTo(GroupModel);
import { GroupModel } from "./Group.js";
import { MessageModel } from "./Message.js";
import { UserModel } from "./User.js";
import { PermissionModel } from "./Permission.js";

UserModel.hasMany(GroupModel);
GroupModel.belongsTo(UserModel);

UserModel.hasMany(MessageModel);
MessageModel.belongsTo(UserModel);
// UserModel.hasMany(PermissionModel);
// GroupModel.belongsToMany(UserModel,{through:"User_Group"});
GroupModel.hasMany(MessageModel);
MessageModel.belongsTo(GroupModel);
// GroupModel.hasMany(PermissionModel);
export { UserModel, GroupModel, MessageModel, PermissionModel };
