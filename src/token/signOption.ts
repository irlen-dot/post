import * as jwt from "jsonwebtoken";

export var SignOption :jwt.SignOptions= {
    issuer: "",
    subject:"",
    audience: "",
    expiresIn: "365d",
    algorithm: "RS256"
};