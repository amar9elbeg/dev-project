import { getTopicByIdQuery } from './../../graphql/resolvers/queries/get-topicById';
import { TopicModel } from "@/mongodb/topic"

jest.mock('../../mongodb/topic.ts', () => ({
    TopicModel: {
        findById: jest.fn()
    }
}))

const returnData = {
    topicId: "testtopic",
    name: 'test',
    teachers: ['test', 'test'],

}

describe('get topic by id', () => {
    it('Should return topic', async () => {
        (TopicModel.findById as jest.Mock).mockResolvedValue(returnData)
        const result = await getTopicByIdQuery(null, {topicId: "testopic"})
        expect(result).toEqual(returnData)
  
    })
})
