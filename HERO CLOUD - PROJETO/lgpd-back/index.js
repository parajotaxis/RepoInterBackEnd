import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";
import sequelize from "./utils/database.js";
import association from "./models/Association.js"

const app = express();
const { json, urlencoded}  = pkg;

app.use(json());
app.use(urlenconded({ extended: true}));

(async () => {
    try {
        association.associations();
        await sequelize.sycn();
        app.listen(3000, function(){
            console.log("Listening from 3000");
        });

    } catch (error) {
        console.log(error);
    }
})();



app.use("/", router);