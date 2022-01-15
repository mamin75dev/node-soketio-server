import helmet from "helmet";
import { JWT } from "./Config/jwt.js";

import session from "express-session";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import dbRouter from "./routes/db.js";
// set ssl
const options = {
    // key: fs.readFileSync('./openssl_keys/server_key.pem'),
    // cert: fs.readFileSync('./openssl_keys/server_cert.pem')
};
const app = express();
// app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// express-session
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 60000 },
    })
);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Cookie, cookie"
    );
    next();
});
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/db", JWT.verifyToken, dbRouter);
// app.use('/db',dbRouter)
export default app;
