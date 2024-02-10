import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <>

    <div className="  h-[100vh]">
 
<div >
  <ul className="" >
    <div className="border-b py-4 flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0">
      <div className=" bg-[#FFEDDF] w-[30px] h-[30px]">
    <i className="fa-solid fa-house fa-xl mt-2"></i>
    </div>
    <Link to=''>DashBoard</Link>

    </div>
    <div className=" border-b py-4  flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0 ">
      <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
      <i className=" fa-solid fa-users-line fa-xl mt-3"></i>
      </div>
    <Link to='groups'>Groups</Link>

    </div>
    <div className=" border-b py-4 flex pl-5 hover:border-r-4 hover:border-black hover:border-b-0" >
    <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
    <i className="fa-brands fa-readme fa-xl mt-3"></i>
    </div>
    <Link to='quizzes'>Quizzes</Link>
    </div>

    <div className=" border-b py-36 flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0">
  <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
    <i className="fa-solid fa-dice"></i>
    </div>
    <Link to='results'>Results</Link>
    </div>
    <div className=" border-b py-4 flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0" >
    <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
      </div>
    <li>Help</li>

    </div>
  </ul>
</div>
     
    </div>
    </>
  )
}
