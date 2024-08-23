import AddClassButton from "./components/class/AddClassButton";
import Classcard from "./components/class/Classcard";
import ClassTabs from "./components/class/ClassTabs";
import Header from "./components/header/Header";


export default function Home() {
  return( 
  <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
    <div className="w-full">
      <Header/>
      <div className="w-full flex-col justify-center py-10 px-20">
  
          <div className="w-full flex justify-between">
            <ClassTabs/>
            <AddClassButton/>
          </div>
          <div className="w-full grid grid-cols-5 my-10">
            <Classcard className="24h-mp1a" endDate="23.05.11" startDate="24.11.22" teacherName1="elbeg" teacherName2="gerelee"/>
          </div>



      </div>

    </div>

  </div>
  )
}