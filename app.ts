import express from "express";
import { createECSLogger } from './telemetry/ECSLogging';
import Router from 'express-promise-router';
import apiRoutes from "./api/routes/apiRoutes";

const log = createECSLogger({});

const app = async () => {
    const expressServer = express();
    try{
        const router = Router()
        .use([])
        .use(apiRoutes("/test/web"))
    }
    catch(err){
        console.log(err);
    }
    return expressServer
}

export default app;