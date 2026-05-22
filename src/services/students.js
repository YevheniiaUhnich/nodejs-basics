import { StudentsCollection } from '../db/models/student.js';

export const getAllStudents = async () => {
  return await StudentsCollection.find();
};

export const getStudentById = async (studentId) => {
  return await StudentsCollection.findById(studentId);
};

export const createStudent = async (payload) => {
  return await StudentsCollection.create(payload);
};

export const deleteStudent = async (studentId) => {
  return await StudentsCollection.findOneAndDelete({_id: studentId});
}

export const updateStudent = async (studentId, payload, options = {}) => {
  const rawResult = await StudentsCollection.findOneAndUpdate(
    { _id: studentId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
