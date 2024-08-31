import { TopicModel } from './../../mongodb/topic';
import { deleteTopicMutation } from './../../graphql/resolvers/mutations/delete-topic';

jest.mock('../../mongodb/topic.ts', () => ({
    TopicModel: {
        findByIdAndDelete: jest.fn()
    }
}))

const deleteData = {
    topicId: 'test',
};


describe('delete topic', () => {
    it('Should return deleted topic ', async () => {
        (TopicModel.findByIdAndDelete as jest.Mock).mockResolvedValue(deleteData)
        const result = await deleteTopicMutation(null, { topicId: "test" })
        expect(result).toEqual(true)
  
    })
})
