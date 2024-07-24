import { Router } from "express";
import { getAll } from "../controller/team-leader";

const teamLeaderRouter=Router();

teamLeaderRouter.get("/",getAll)

export default teamLeaderRouter;