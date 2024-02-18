import { useForm } from "react-hook-form";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import AuthButton from "../../Shared/AuthButton/AuthButton";
import Loading from "../../Shared/Loading/Loading";
import { useState } from "react";
import { baseUrl } from "../../ApiUtls/ApiUtls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const { headers } = useSelector((state: any) => state.userData)
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //**********validation confirmNewPassword************ */
  // const handleSubmit = (data) => {
  //   console.log(data);
  //   const { password_new, confirmNewPassword } = data;
  //   if (password_new !== confirmNewPassword) {
  //     setErrors({ confirmNewPassword: "passwords are unmatched" });
  //     return;
  //   }
  // }

    function onSubmit(data: object) {
      console.log(data);
             setIsLoading(true);
      axios.post(`${baseUrl}/auth/change-password`, headers)
      .then((response) => {
          console.log(response);
          toast.success(response.data.message);
          navigate("dashboard");

      
      
      })
      .catch((error) => {
          console.log(error);
          toast.error(error.response?.data?.message || "Invalid data");



      })
      .finally(() => {
          setIsLoading(false);
       
      });
  
    };

 

    return (
      <>
        <h3 className="text-2xl  text-secondry">Change password</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <div className="password mt-2">
            <label htmlFor="password" className="w-full ps-1 mb-1">
              Old Password
            </label>
            <div
              className={`flex rounded-md border-3 ${!errors.password ? "border-white" : "border-red-500"
                }`}
            >
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-key"></i>
              </span>
              <input
                {...register("password", {
                  required: "field is required",
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters",
                  },
                })}
                type="password"
                id="password"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your old password"
              />
              {errors.password && (
                <ErrorMessage>{String(errors.password.message)}</ErrorMessage>
              )}
            </div>
          </div>

          <div className="new-Password mt-2">
            <label htmlFor="new-Password" className="w-full ps-1 mb-1">
              New Password
            </label>
            <div
              className={`flex rounded-md border-3 ${!errors.password_new ? "border-white" : "border-red-500"
                }`}
            >
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-key"></i>
              </span>
              <input
                {...register("password_new", {
                  required: "new password is required",
                  minLength: {
                    value: 8,
                    message: "new password should be greater than 8 digits",
                  },
                  validate: (value) =>
                    value !== getValues("password") ||
                    "new password and old password should not match ",
                })}
                type="password"
                id="new-Password"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your new password"
              />
              {errors.password_new && (
                <ErrorMessage>{String(errors.password_new.message)}</ErrorMessage>
              )}
            </div>
          </div>

          <div className="Confirm-Password mt-2">
            <label htmlFor="Confirm-Password" className="w-full ps-1 mb-1">
              Confirm New Password
            </label>
            <div
              className="flex rounded-md border-3 border-white "
                
            >
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-key"></i>
              </span>
              <input

                type="password"
                id="Confirm-Password"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your confirm password"
              />
          
            </div>
          </div>
      

          <AuthButton>{isloading ? <Loading /> : "Change"}</AuthButton>
        </form>
            {/* <div className="Confirm-Password mt-2">
            <label htmlFor="Confirm-Password" className="w-full ps-1 mb-1">
              Confirm New Password
            </label>
            <div
              className={`flex rounded-md border-3 ${!errors.confirmNewPassword ? "border-white" : "border-red-500"
                }`}
            >
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-key"></i>
              </span>
              <input

                type="password"
                id="Confirm-Password"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your confirm password"
              />
              {errors.confirmNewPassword && (
                <ErrorMessage>
                  {String(errors.confirmNewPassword.message)}
                </ErrorMessage>
              )}
            </div>
          </div> */}
      </>
    );
  }

