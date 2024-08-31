import { getClassByIdQuery } from './../../graphql/resolvers/queries/get-classById';
import { ClassModel } from "@/mongodb/class"

jest.mock('../../mongodb/class.ts', () => ({
    ClassModel: {
        findById: jest.fn()
    }
}))

const returnData = {
    classId: "test",
    name: 'test',
    teachers: ['test', 'test'],

}

describe('get class by id', () => {
    it('Should return class data by id', async () => {
        (ClassModel.findById as jest.Mock).mockResolvedValue(returnData)
        const result = await getClassByIdQuery(null, {classId: "test"})
        expect(result).toEqual(returnData)
  
    })
})
