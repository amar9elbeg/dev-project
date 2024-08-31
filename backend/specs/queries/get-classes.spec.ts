import { getClassesQuery } from "../../graphql/resolvers/queries/get-class"
import { ClassModel } from "@/mongodb/class"

jest.mock('../../mongodb/class.ts', () => ({
    ClassModel: {
        find: jest.fn()
    }
}))

const returnData = {
    name: 'test',
    teachers: ['test', 'test'],

}

describe('get classes', () => {
    it('Should return classes', async () => {
        (ClassModel.find as jest.Mock).mockResolvedValue(returnData)
        const result = await getClassesQuery()
        expect(result).toEqual(returnData)
  
    })
})
