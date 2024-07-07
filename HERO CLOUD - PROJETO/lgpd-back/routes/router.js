import express from "express";
let router = express.Router();

import userController from "./UserController";
import courseController from "./CourseController";
import teacherController from "./TeacherController";
import evaluationController from "./EvalauationController";

router.get("/", function(req, res){
    console.log("oi!");
    res.status(200).json({message: "oi! sucesso!"});
});

router.use("/", userController);
router.use("/", courseController);
router.use("/", teacherController);
router.use("/", evalutationController);

export default router;
