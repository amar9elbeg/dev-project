import { createAttendanceMutation } from './../../graphql/resolvers/mutations/create-attendance';
import { AttendanceModel } from '@/mongodb/attendance';

jest.mock('../../mongodb/attendance.ts', () => ({
    AttendanceModel: {
        create: jest.fn()
    }
}))

const createData = {
    studentId: 'test',
    date: "2023-10-01T00:00:00.000+00:00" ,
};


describe('create attendance', () => {
    it('Should return created attendance ', async () => {
        (AttendanceModel.create as jest.Mock).mockResolvedValue(createData)
        const result = await createAttendanceMutation(null, { createData })
        expect(result).toEqual(createData)
  
    })
})
