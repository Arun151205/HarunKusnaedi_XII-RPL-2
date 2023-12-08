import Subject from '../models/subjectModel.js';

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.status(200).json(subjects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const addSubject = async (req, res) => {
    const { nama, bobot } = req.body;

    try {
        const newSubject = await Subject.create({
            nama,
            bobot,
        });

    res.status(201).json(newSubject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

  // Function to get an existing subject for editing
export const getSubjectById = async (req, res) => {
    const subjectId = req.params.id;
    try {
        const subject = await Subject.findByPk(subjectId);
        if (!subject) {
        return res.status(404).json({ error: 'Subject not found' });
        }
        res.status(200).json(subject);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
}

  // Function to update an existing subject
export const updateSubject = async (req, res) => {
    const subjectId = req.params.id;
    const { nama, bobot } = req.body;

    try {
        const subject = await Subject.findByPk(subjectId);
        if (!subject) {
            return res.status(404).json({ error: 'Subject not found' });
        }
        // Update subject data
        subject.nama = nama;
        subject.bobot = bobot;
        await subject.save();
        res.status(200).json(subject);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
}

  // Function to delete a subject
export const deleteSubject = async (req, res) => {
    const subjectId = req.params.id;

    try {
        const subject = await Subject.findByPk(subjectId);
        if (!subject) {
            return res.status(404).json({ error: 'Subject not found' });
        }
        await subject.destroy();
        res.status(204).json({});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}