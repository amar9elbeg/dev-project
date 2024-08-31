import { createTopicMutation } from './../../graphql/resolvers/mutations/create-topic';

import { TopicModel } from '@/mongodb/topic';

jest.mock('../../mongodb/topic.ts', () => ({
    TopicModel: {
        create: jest.fn()
    }
}))

const createData = {
    studentId: 'test',
    date: "2023-10-01T00:00:00.000+00:00" ,
};


describe('create attendance', () => {
    it('Should return created attendance ', async () => {
        (TopicModel.create as jest.Mock).mockResolvedValue(createData)
        const result = await createTopicMutation(null, { createData })
        expect(result).toEqual(createData)
  
    })
})
