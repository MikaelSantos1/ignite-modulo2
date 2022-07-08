import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Create category controller", () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
        const password = await hash("admin", 8);
        const id = uuidV4();

        await connection.query(
            `INSERT INTO USERS(id,name,email,password,"isAdmin",created_at,driver_license)
        values('${id}','admin','admin@rentx.com.br','${password}',true,'now()','XXXXXX')
        `
        );
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("Shoud be able to list all categories", async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: "admin@rentx.com.br",
            password: "admin",
        });
        const { token } = responseToken.body;

        await request(app)
            .post("/categories")
            .send({
                name: "Category supertest",
                description: "Category supertest",
            })
            .set({
                Authorization: `Bearer ${token}`,
            });
       const response= await request(app).get("/categories");
    });
});
