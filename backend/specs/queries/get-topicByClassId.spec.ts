import { getTopicByClassIdQuery } from './../../graphql/resolvers/queries/get-topicByClassId';
import { TopicModel } from '../../mongodb/topic';

jest.mock('../../mongodb/topic.ts', () => ({
    TopicModel: {
        find: jest.fn()
    }
}))

const returnData = {
    name: 'test',
    description: 'test description',
    classId: "testclass",
}

describe('get topic by class id', () => {
    it('Should return topics', async () => {
        (TopicModel.find as jest.Mock).mockResolvedValue(returnData)
        const result = await getTopicByClassIdQuery(null, {classId: "testclass"})
        expect(result).toEqual(returnData)
  
    })
})
