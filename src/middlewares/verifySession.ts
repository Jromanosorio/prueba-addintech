import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/token";

const checkSession = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization || "";
    const jwt = token.split(" ").pop();
    const isValidJWT = verifyToken(<string>jwt);

    if (!isValidJWT) {
      res.status(401).send("INVALID_TOKEN");
    } else {
      console.log({ jwt });
      next();
    }
  } catch (error) {
    res.status(401).send({ data: "INVALID_SESSION" });
  }
};

export { checkSession };
