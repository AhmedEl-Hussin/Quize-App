
export default function SideBar() {
  return (
    <>

      <div className="  h-[100vh]">

        <div >
          <ul className="" >
            <div className="border-b py-4 flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0 ">
              <div className=" bg-[#FFEDDF] w-[30px] h-[30px] hover:text-[#FFEDDF] transition-all duration-500 hover:bg-[#0D1321] rounded-md p-4 me-2 flex justify-center align-middle ">
                <i className="fa-solid fa-house fa-xl "></i>
              </div>
              <li>DashBoard</li>
            </div>
            <div className=" border-b py-4  flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0 ">
            <div className=" bg-[#FFEDDF] w-[30px] h-[30px] hover:text-[#FFEDDF] transition-all duration-500 hover:bg-[#0D1321] rounded-md p-4 me-2 flex justify-center align-middle ">
                <i className=" fa-solid fa-users-line fa-xl "></i>
              </div>
              <li>Groups</li>

            </div>
            <div className=" border-b py-4 flex pl-5 hover:border-r-4 hover:border-black hover:border-b-0" >
            <div className=" bg-[#FFEDDF] w-[30px] h-[30px] hover:text-[#FFEDDF] transition-all duration-500 hover:bg-[#0D1321] rounded-md p-4 me-2 flex justify-center align-middle ">
                <i className="fa-brands fa-readme fa-xl "></i>
              </div>
              <li>Quizzes</li>
            </div>

            <div className=" border-b py-4 flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0">
            <div className=" bg-[#FFEDDF] w-[30px] h-[30px] hover:text-[#FFEDDF] transition-all duration-500 hover:bg-[#0D1321] rounded-md p-4 me-2 flex justify-center align-middle ">
                <i className="fa-solid fa-dice"></i>
              </div>
              <li>Results</li>
            </div>
            <div className=" border-b py-4 flex pl-5  hover:border-r-4 hover:border-black hover:border-b-0" >
            <div className=" bg-[#FFEDDF] w-[30px] h-[30px] hover:text-[#FFEDDF] transition-all duration-500 hover:bg-[#0D1321] rounded-md p-4 me-2 flex justify-center align-middle ">
              <i className="fa-solid fa-question"></i>
              </div>
              <li>Help</li>

            </div>
          </ul>
        </div>

      </div>
    </>
  )
}
