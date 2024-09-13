import { useRouter } from "next/router";
import { ClassHomePage } from "../(classhome)/ClassHomePage";



export default function ClassHome() {
    const router = useRouter();
    const { classId } = router.query;


  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
        <ClassHomePage classId={classId}/>

    </div>
  )
}