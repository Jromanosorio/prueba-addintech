import { Request, Response } from "express";
import userModel from "../models/userModel";
import { Encrypt, Verify } from "../utils/bcrypt";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({
      username
    });

    if (user == null){
      throw new Error
    }

    const isCorrect = await Verify(password, user.password)

    if (!isCorrect){
      throw new Error
    }

    res.status(200).send({ data: user });

  } catch (error) {
    res.status(500).send({ data: "WRONG_USER_OR_PASSWORD" });
  }
};

const registerUser = async (req: Request, res: Response) => {
  try {
    const { nombre, edad, username, password } = req.body;
    const hashPassword = await Encrypt(password);

    const user = await userModel.create({
      nombre,
      edad,
      username,
      password: hashPassword,
    });

    res.status(200).send({ user });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: "ERROR_CREATING_ACCOUNT" });
  }
};

export { loginUser, registerUser };
