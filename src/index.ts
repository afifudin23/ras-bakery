import { PrismaClient } from ".prisma/client";
import express from "express";
import rootRouter from "./routes";
import errorMiddleware from "./middlewares/error";
import { PORT } from "./keys";
import cors from "cors";

const app = express();
app.use(cors({origin: ["http://localhost:3000", "https://afifudin23.github.io"], credentials: true}));
app.use(express.json());
export const prisma = new PrismaClient().$extends({
    result: {
        address: {
            fromatted_address: {
                needs: {
                    lineOne: true,
                    city: true,
                    country: true,
                    pin_code: true,
                },
                compute: (addr) => {
                    return `${addr.lineOne}, ${addr.city}, ${addr.country}, ${addr.pin_code}`;
                },
            },
        },
    },
});
app.route("/").get((req, res) => {
    res.json({ message: "API ready to serve" });
})
app.use("/api/v1", rootRouter);

app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Apps is running in  http://localhost:${PORT}`);
});
