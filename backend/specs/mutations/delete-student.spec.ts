import { deleteStudentMutation } from './../../graphql/resolvers/mutations/delete-student';
import { StudentModel } from '@/mongodb/student';

jest.mock('../../mongodb/student.ts', () => ({
    StudentModel: {
        findByIdAndDelete: jest.fn()
    }
}))

const deleteData = {
    studentid: 'test',
};


describe('delete student', () => {
    it('Should return deleted student ', async () => {
        (StudentModel.findByIdAndDelete as jest.Mock).mockResolvedValue(deleteData)
        const result = await deleteStudentMutation(null, { studentId: "test" })
        expect(result).toEqual(true)
  
    })
})
