import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repository/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticed(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }
    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "024d271e5567f17bbb89306b9ad7845c"
        ) as IPayload;
        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exists");
        }
        next();
    } catch (err) {
        throw new Error("Invalid token");
    }
}
