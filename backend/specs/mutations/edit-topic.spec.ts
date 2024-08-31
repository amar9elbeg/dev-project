import { editTopicMutation } from './../../graphql/resolvers/mutations/edit-topic';
import { TopicModel } from '@/mongodb/topic';

jest.mock('../../mongodb/topic.ts', () => ({
    TopicModel: {
        findByIdAndUpdate: jest.fn()
    }
}))

const updateData = {
    topicId: "test",
    name: "DESIGN"
};


describe('update topic', () => {
    it('Should return updated topic ', async () => {
        (TopicModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(updateData)
        const result = await editTopicMutation(null, { topicId: "test" , topicInput: {name: "DESIGN"}})
        expect(result).toEqual(updateData)
  
    })
})
