import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "../action/userActions";

const Register = (props) => {
  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0";

  const buttonStyle =
    "mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 ease-linear duration-200";
  const activeButtonStyle =
    " hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] cursor-pointer";
  const disableButtonStyle = " opacity-50";

  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    errors: {
      confirm: false,
    },
  });
  const { name, email, password } = registerData;
  const userRegister = useSelector((state) => state.userRegister);
  // console.log(userRegister.userInfo)
  const { userInfo, loading, error } = userRegister || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
    }
    return () => {
      //
    };
  }, [userInfo]);
  const checkPass = () => {
    if (registerData.password === registerData.confirm) {
      setregisterData({ ...registerData, errors: { confirm: false } });
    } else {
      setregisterData({ ...registerData, errors: { confirm: "Not Same" } });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
    navigate("/login");
  };
  const handleChange = (e) => {
    setregisterData({
      ...registerData,
      [e.target.name]: e.target.value,
      checkPass,
    });
  };
  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
        <div className="text-2xl">Register</div>
        {/* <text className="text-2xl ">REGISTER</text> */}
        <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
          {/* First Name Last Name */}
          <div className="flex mt-7 w-auto">
            <input
              className={inputStyle + ` w-[100%]`}
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={registerData.name}
              required
            />
          </div>

          {/* Email */}
          <input
            className={inputStyle + ` mt-7 w-[100%]`}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={registerData.email}
            required
          />

          {/* Password */}
          <div className="flex mt-7">
            <input
              className={inputStyle + ` mr-3`}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={registerData.password}
              required
            />
            <input
              className={inputStyle}
              name="confirm"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={registerData.confirm}
              required
            />
          </div>
          <div className="flex justify-center">
            <span className="flex-1 mr-3"></span>
            <span className="flex-1 text-red-500">
              {registerData.errors.confirm}
            </span>
          </div>
          <div className="text-center mt-1 flex flex-col justify-center">
            Already have an account?
            <div
              onClick={() => {
                navigate("/login");
              }}
              className="cursor-pointer button secondary text-center mt-1 text-blue-500"
            >
              Sign to your account
            </div>
          </div>

          {/* Submit button */}
          <input
            type="submit"
            className={
              registerData.errors.confirm
                ? buttonStyle + disableButtonStyle
                : buttonStyle + activeButtonStyle
            }
            value="Sign up"
          />
          {/* <div>
          Already have an account?
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Create your account</Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
