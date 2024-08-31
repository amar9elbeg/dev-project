import { deleteClassMutation } from './../../graphql/resolvers/mutations/delete-class';
import { ClassModel } from '@/mongodb/class';

jest.mock('../../mongodb/class.ts', () => ({
    ClassModel: {
        findByIdAndDelete: jest.fn()
    }
}))

const deleteData = {
    classId: 'test',
};


describe('delete class', () => {
    it('Should return deleted class ', async () => {
        (ClassModel.findByIdAndDelete as jest.Mock).mockResolvedValue(deleteData)
        const result = await deleteClassMutation(null, { classId: "test" })
        expect(result).toEqual(true)
  
    })
})
