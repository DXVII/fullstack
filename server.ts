import app from "./app";
import DBContext from "./database/DBContext";
(
    async () => {

        await DBContext.connect();
        const application = await app();
        application.listen(3000, () => {
            console.log("Server running on port 3000");
        })
    }
)();