import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId: userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production" ? true : false
    };

    res.cookie("jwt", token, options);

    return token;
}