import express from "express";
import getUserByIdHandler, {
  addUserHandler,
  getUsersHandler,
  updateUserHandler,
} from "../controller/user_controller";
import validate from "../middleware/validate";
import { addUserSchema, updateUserSchema } from "../zod_schema/user_schema";

const router = express.Router();

router.get("/", getUsersHandler);
router.post("/", validate(addUserSchema), addUserHandler);
router.get("/:id", getUserByIdHandler);
router.put("/:id", validate(updateUserSchema), updateUserHandler);

export default router;