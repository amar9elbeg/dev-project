
import { getStudentByIdQuery } from '../../graphql/resolvers/queries/get-studentById';
import { StudentModel } from '../../mongodb/student';

jest.mock('../../mongodb/student.ts', () => ({
    StudentModel: {
        findById: jest.fn()
    }
}))

const returnData = {
    studentId: "test",
    name: 'test',
    teachers: ['test', 'test'],

}

describe('get student data by id', () => {
    it('Should return studet data', async () => {
        (StudentModel.findById as jest.Mock).mockResolvedValue(returnData)
        const result = await getStudentByIdQuery(null, {studentId: "test"})
        expect(result).toEqual(returnData)
  
    })
})
