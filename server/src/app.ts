import express, { Request, Response } from 'express';
import prisma from '../prismaClient';
import cors from 'cors';
import { handleError } from './middlewares/handleError.middleware';


const app = express();
app.use(express.json());
app.use(cors());


import userRouter from "./routes/user.routes"

app.use("/api/v1/user",userRouter)


app.use(handleError)


export default app