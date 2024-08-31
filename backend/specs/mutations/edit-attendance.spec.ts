import { AttendanceModel } from '../../mongodb/attendance';
import { editAttendanceMutation } from './../../graphql/resolvers/mutations/edit-attendance';

jest.mock('../../mongodb/attendance.ts', () => ({
    AttendanceModel: {
        findByIdAndUpdate: jest.fn()
    }
}))

const updateData = {
    attendanceId: 'test',
    date: "2023-10-01T00:00:00.000+00:00",

};


describe('edit attendance', () => {
    it('Should return  updated or not ', async () => {
        (AttendanceModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(updateData)
        const result = await editAttendanceMutation(null, { attendanceId: "test", attendanceInput: { date: "2023-10-01T00:00:00.000+00:00" } })
        expect(result).toEqual(updateData)

    })
})
