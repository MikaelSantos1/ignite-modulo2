import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConecction from "../index";

async function create() {
    const connection = await createConecction("localhost");

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(id,name,email,password,"isAdmin",created_at,driver_license)
        values('${id}','admin','admin@rentx.com.br','${password}',true,'now()','XXXXXX')
        `
    );
    await connection.close();
}
create().then(() => console.log("User admin created"));
