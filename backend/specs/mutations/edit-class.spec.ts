import { editClassMutation } from './../../graphql/resolvers/mutations/edit-class';
import { ClassModel } from '@/mongodb/class';

jest.mock('../../mongodb/class.ts', () => ({
    ClassModel: {
        findByIdAndUpdate: jest.fn()
    }
}))

const updateData = {
    classId: 'test',
    type: "DESIGN"
};


describe('update class', () => {
    it('Should return updated class ', async () => {
        (ClassModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(updateData)
        const result = await editClassMutation(null, { classId: "test" , classInput: {type: "DESIGN"}})
        expect(result).toEqual(updateData)
  
    })
})
