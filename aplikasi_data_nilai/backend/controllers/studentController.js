// Import necessary modules and models
import Student from '../models/studentModel.js';


export const getAllStudents = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

export const addStudent = async (req, res) => {
    const { nomorInduk, nama, alamat, tanggalLahir } = req.body;

    try {
      const newStudent = await Student.create({
        nomor_induk: nomorInduk,
        nama,
        alamat,
        tanggal_lahir: tanggalLahir,
      });

      res.status(201).json(newStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getStudentById = async (req, res) => {
    const studentId = req.params.id;

    try {
      const student = await Student.findByPk(studentId);

      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      res.status(200).json(student);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

  // Function to update an existing student
export const updateStudent = async (req, res) => {
    const studentId = req.params.id;
    const { nomorInduk, nama, alamat, tanggalLahir } = req.body;

    try {
      const student = await Student.findByPk(studentId);

      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      // Update student data
      student.nomor_induk = nomorInduk;
      student.nama = nama;
      student.alamat = alamat;
      student.tanggal_lahir = tanggalLahir;

      await student.save();

      res.status(200).json(student);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

  // Function to delete a student
export const deleteStudent = async (req, res) => {
    const studentId = req.params.id;

    try {
      const student = await Student.findByPk(studentId);

      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      await student.destroy();

      res.status(204).json({});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}