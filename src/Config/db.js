// const mongoose = require('mongoose');
// mongoose.connect(process.env.POSTGRESQL_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
// export {mongoose}
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.POSTGRESQL_SERVER || "", {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
