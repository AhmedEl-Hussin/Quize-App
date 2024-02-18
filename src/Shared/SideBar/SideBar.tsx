import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { userData } = useSelector((state: any) => state.userData);
  const { role } = userData.profile;

  function handleToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <div className="w-full">
        <Sidebar className="vh-100" collapsed={isCollapsed}>
          <Menu>
            <div className=" ">
            <div className="w-full text-center  py-3" onClick={handleToggle}>
              <i className="fa-solid fa-circle-check">
                <i className="fa-solid fa-circle-xmark"></i>
              </i>
            </div>
              {role !== "Student" && (
                <MenuItem
                  className="border-b-2 my-2 py-2 hover:border-r-2 hover:border-r-black"
                  icon={<i className="fa-regular fa-envelope-open fa-xl"></i>}
                  component={<Link to={"/dashboard"}></Link>}
                >
                  Dashboard
                </MenuItem>
              )}

              {role !== "Student" && (
                <MenuItem
                  className="border-b-2 my-2 py-2 hover:border-r-2 hover:border-r-black"
                  icon={<i className=" fa-solid fa-users fa-xl"></i>}
                  component={<Link to="/dashboard/groups"></Link>}
                >
                  Groups
                </MenuItem>
              )}

              {role !== "Student" && (
                <MenuItem
                  className="border-b-2 my-2 py-2 hover:border-r-2 hover:border-r-black"
                  icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                  component={<Link to="/dashboard/student"></Link>}
                >
                  Students
                </MenuItem>
              )}

              <MenuItem
                className="border-b-2 my-2 py-2 hover:border-r-2 hover:border-r-black"
                icon={<i className="fa-solid fa-chalkboard-user fa-xl"></i>}
                component={
                  <Link
                    to={role == "Student" ? "/student" : "/dashboard/quizzes"}
                  ></Link>
                }
              >
                Quizzes
              </MenuItem>

              <MenuItem
                className="border-b-2 my-2 py-2 hover:border-r-2 hover:border-r-black"
                icon={<i className="fa-solid fa-file-circle-check fa-xl"></i>}
                component={
                  <Link
                    to={
                      role == "Student"
                        ? "/student/results"
                        : "/dashboard/results"
                    }
                  ></Link>
                }
              >
                Results
              </MenuItem>

              <MenuItem
                className="border-b-2 my-2 py-2 hover:border-r-2 hover:border-r-black"
                icon={<i className="fa-solid fa-lock"></i>}
                component={<Link to="/change-password"></Link>}
              >
                Change Password
              </MenuItem>
            </div>
            <MenuItem className="border-b-2 my-2 py-1 hover:border-r-2 hover:border-r-black ml-auto">
              <i className="fa-solid fa-circle-question fa-xl pr-2"></i>
              Help
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
