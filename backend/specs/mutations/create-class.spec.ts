import { createClassMuattion } from './../../graphql/resolvers/mutations/create-class';
import { ClassModel } from '@/mongodb/class';

jest.mock('../../mongodb/class.ts', () => ({
    ClassModel: {
        create: jest.fn()
    }
}))

const createData = {
    name: 'test',
};


describe('create class', () => {
    it('Should return created class ', async () => {
        (ClassModel.create as jest.Mock).mockResolvedValue(createData)
        const result = await createClassMuattion(null, { createData })
        expect(result).toEqual(createData)
  
    })
})
