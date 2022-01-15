import * as url from "url";
import cookie from "cookie";

export class Cookie {
    static setCookie(res, key, value) {
        return res.setHeader(
            "Set-Cookie",
            cookie.serialize(
                typeof key === "string" ? key : String(key),
                typeof value === "string" ? value : String(value),
                {
                    // httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                }
            )
        );
    }
    static getCookies(req) {
        const cookies = cookie.parse(
            (req.headers.cookie ? req.headers.cookie : req.headers.Cookie) || ""
        );
        // console.log('::::cookies::::',cookies)
        return typeof cookies === "object" ? cookies : {};
    }
    static queryFromUrl(req) {
        const query = url.parse(req.url, true, true).query;
        return typeof query === "object" ? query : {};
    }
}
