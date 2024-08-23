import AddClassButton from "./components/class/AddClassButton";
import ClassTabs from "./components/class/ClassTabs";
import Header from "./components/header/Header";


export default function Home() {
  return( 
  <div className="min-h-screen w-full flex justify-center items-start">
    <div className="w-full flex flex-col gap-5">
      <Header/>
      <ClassTabs/>
      <AddClassButton/>
    </div>

  </div>
  )
}