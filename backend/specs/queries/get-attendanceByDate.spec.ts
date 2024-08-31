import { getAttendanceByDateQuery } from './../../graphql/resolvers/queries/get-attendanceByDate';
import { AttendanceModel } from '@/mongodb/attendance';

jest.mock('../../mongodb/attendance.ts', () => ({
    AttendanceModel: {
        find: jest.fn()
    }
}))


const returnData = [{
    studentId: 'test',
    date: "2023-10-01T00:00:00.000+00:00" ,
}, {
    studentId: 'test',
    date: "2023-12-30T00:00:00.000+00:00" ,
}];


const filter = { 
    studentId: "test", 
    endDate:"2023-12-31T00:00:00.000+00:00", 
    startDate: "2023-9-30T00:00:00.000+00:00" }

describe('get attendance by date', () => {
    it('Should return attendance data by date', async () => {
        (AttendanceModel.find as jest.Mock).mockResolvedValue(returnData)
        const result = await getAttendanceByDateQuery(null, { filter })
        expect(result).toEqual(returnData)
  
    })
})
