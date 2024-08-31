import { getStudentsByClassIdQuery } from './../../graphql/resolvers/queries/get-studentsByClass';
import { StudentModel } from "@/mongodb/student"

jest.mock('../../mongodb/student.ts', () => ({
    StudentModel: {
        find: jest.fn()
    }
}))

const returnData = {
    name: 'test',
    classId: "testclass",
    teachers: ['test', 'test'],

}

describe('get student by class id', () => {
    it('Should return students', async () => {
        (StudentModel.find as jest.Mock).mockResolvedValue(returnData)
        const result = await getStudentsByClassIdQuery(null, {classId: "testclass"})
        expect(result).toEqual(returnData)
  
    })
})
