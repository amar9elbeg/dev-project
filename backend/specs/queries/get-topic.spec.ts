import { getTopicsQuery } from './../../graphql/resolvers/queries/get-topic';
import { TopicModel } from "@/mongodb/topic"

jest.mock('../../mongodb/topic.ts', () => ({
    TopicModel: {
        find: jest.fn()
    }
}))

const returnData = {
    name: 'test',
    teachers: ['test', 'test'],

}

describe('get classes', () => {
    it('Should return classes', async () => {
        (TopicModel.find as jest.Mock).mockResolvedValue(returnData)
        const result = await getTopicsQuery()
        expect(result).toEqual(returnData)
  
    })
})
