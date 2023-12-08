// Import necessary modules and models
import Grade from '../models/gradeModel.js';
import Student from '../models/studentModel.js';
import Subject from '../models/subjectModel.js';

// Function to get a list of all student grades
export const getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll({
      include: [Student, Subject],
    });
    res.status(200).json(grades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to add a new student grade
export const createGrade = async (req, res) => {
    const { studentId, subjectId, jenisNilai, nilai } = req.body;

    try {
      const newGrade = await Grade.create({
        studentId,
        subjectId,
        jenis_nilai: jenisNilai,
        nilai,
      });

      res.status(201).json(newGrade);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Function to get an existing student grade for editing
export const getGradeById = async (req, res) => {
    const gradeId = req.params.id;

    try {
        const grade = await Grade.findByPk(gradeId, {
        include: [Student, Subject],
    });

    if (!grade) {
        return res.status(404).json({ error: 'Grade not found' });
        }

        res.status(200).json(grade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Function to update an existing student grade
export const updateGrade = async (req, res) => {
    const gradeId = req.params.id;
    const { jenisNilai, nilai } = req.body;

    try {
        const grade = await Grade.findByPk(gradeId);
        if (!grade) {
            return res.status(404).json({ error: 'Grade not found' });
        }
        // Update grade data
        grade.jenis_nilai = jenisNilai;
        grade.nilai = nilai;

        await grade.save();
        res.status(200).json(grade);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
};

// Function to delete a student grade
export const deleteGrade = async (req, res) => {
    const gradeId = req.params.id;
    try {
        const grade = await Grade.findByPk(gradeId);
    if (!grade) {
        return res.status(404).json({ error: 'Grade not found' });
    }
    await grade.destroy();
    res.status(204).json({});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
