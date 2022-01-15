import { Cookie } from "../utils/cookie.js";
import jwt from "jsonwebtoken";
//import jwt from 'jsonwebtoken';

export class JWT {
    static generateToken(res, userId, username) {
        const expiration = process.env.DB_ENV === "dev" ? 1000 : 604800000;
        const token = jwt.sign(
            { userId: userId, username: username },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.DB_ENV === "testing" ? "1d" : "7d",
            }
        );
        res.cookie("token", token, {
            expires: new Date(Date.now() + expiration),
            secure: false, // set to true if your using https
            httpOnly: true,
        });
        return token;
    }
    static async verifyToken(req, res, next) {
        const cookies = Cookie.getCookies(req);
        // console.log('cookies::',req)
        const { token } = cookies;
        try {
            if (!token) {
                return res.redirect("/auth/login");
            }
            const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("decrypt:::", decrypt);
            req.user = {
                userId: decrypt.userId,
                username: decrypt.username,
            };
            next();
        } catch (err) {
            return res.status(500).json(err.toString());
        }
    }
}
