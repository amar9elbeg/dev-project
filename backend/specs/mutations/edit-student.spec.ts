import { editStudentMutation } from './../../graphql/resolvers/mutations/edit-student';
import { StudentModel } from '@/mongodb/student';


jest.mock('../../mongodb/student.ts', () => ({
    StudentModel: {
        findByIdAndUpdate: jest.fn()
    }
}))

const updateData = {
    studentId: "test",
    lastName: "DESIGN"
};


describe('update student', () => {
    it('Should return updated student ', async () => {
        (StudentModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(updateData)
        const result = await editStudentMutation(null, { studentId: "test" , studentInput: {lastName: "DESIGN"}})
        expect(result).toEqual(updateData)
  
    })
})
