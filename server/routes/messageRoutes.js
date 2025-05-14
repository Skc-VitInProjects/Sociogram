import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getMessages, getUsersForSidebar, markMessageAsSeen } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users" , protectRoute , getUsersForSidebar);
messageRouter.get("/mark/:id" , protectRoute , markMessageAsSeen);
messageRouter.get("/:id" , protectRoute , getMessages);

export default messageRouter;
