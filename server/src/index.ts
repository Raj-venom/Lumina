import app from "./app";
import prisma from '../prismaClient';
import dotenv from 'dotenv'


dotenv.config({
    path: "./.env"
})

async function connect() {

    try {
        const dbResponse = await prisma.$connect()
        console.log("Db connected", dbResponse)
    } catch (error) {
        console.log("Db connection failed", error)
    }

}

connect()

    .then(() => {

        app.on("error", (error) => {
            console.log("app not able to talk to Db ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT || 3000, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`)
        })

        console.log(`http://localhost:${process.env.PORT}`)


    })
    .catch((err) => {
        console.log("MONGoDb conncetion Failed !!", err);
    })


