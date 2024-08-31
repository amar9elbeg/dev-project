import { createStudentMutation } from './../../graphql/resolvers/mutations/create-student';
import { StudentModel } from '@/mongodb/student';

jest.mock('../../mongodb/student.ts', () => ({
    StudentModel: {
        create: jest.fn()
    }
}))

const createData = {
    studentId: 'test',
    date: "2023-10-01T00:00:00.000+00:00" ,
};


describe('create student', () => {
    it('Should return created student ', async () => {
        (StudentModel.create as jest.Mock).mockResolvedValue(createData)
        const result = await createStudentMutation(null, { createData })
        expect(result).toEqual(createData)
  
    })
})
