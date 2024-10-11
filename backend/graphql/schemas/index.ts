import { classTypeDefs } from './class.schema'
import { studentTypeDefs } from './student.schema'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { topicTypeDefs } from './topic.schema'
import { attendanceTypeDefs} from './attendance.schema'
import { reportTypeDefs } from './report.schema'
// import { imageTypeDefs } from './image.schema'

export const typeDefs = mergeTypeDefs([classTypeDefs, attendanceTypeDefs, studentTypeDefs, topicTypeDefs, reportTypeDefs])