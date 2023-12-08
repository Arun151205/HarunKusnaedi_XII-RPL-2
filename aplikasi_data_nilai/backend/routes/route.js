import express from "express";
import {
    getSubjectById,
    deleteSubject,
    getAllSubjects,
    addSubject,
    updateSubject
} from "../controllers/subjectController.js";
import {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";
import {
    getAllGrades,
    getGradeById,
    createGrade,
    updateGrade,
    deleteGrade
} from "../controllers/gradeController.js";

const router = express.Router();

// route subject
router.get("/Subject", getAllSubjects);
router.get("/Subject/:id", getSubjectById);
router.post("/Subject", addSubject);
router.patch("/Subject/:id", updateSubject);
router.delete("/Subject/:id", deleteSubject);

// route Student
router.get("/Student", getAllStudents);
router.get("/Student/:id", getStudentById);
router.post("/Student", addStudent);
router.patch("/Student/:id", updateStudent);
router.delete("/Student/:id", deleteStudent);

// route subject
router.get("/Grade", getAllGrades);
router.get("/Grade/:id", getGradeById);
router.post("/Grade", createGrade);
router.patch("/Grade/:id", updateGrade);
router.delete("/Grade/:id", deleteGrade);

export default router;