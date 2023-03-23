import { Badge } from "@material-ui/core";
import {
  AccountCircleRounded,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "../action/userActions";
import { listProducts } from "../action/productActions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Navbar = () => {
  const style =
    "text-[20px] cursor-pointer ml-[25px] mobile:ml-[5px] hover:scale-75 hover:bg-black hover:text-white p-2 rounded-lg transition duration-500 ease-in-out";
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo, loading, error } = userLoginReducer || {};
  let [display, setdisplay] = useState("hidden");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="navbar h-[60px] shadow-md sticky top-0 w-[100%] bg-white z-10 ">
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
          {/* Left Side */}
          <div className="left flex flex-1 text-center mobile:ml-3">
            <Link to="/" className="logo font-bold text-2xl ">
              AmaCart
            </Link>
          </div>

          {/* Right Side */}
          <div className="right flex flex-1 items-center justify-end pr-3 mobile:flex-[2]">
            {userInfo && (
              <>
                {userInfo.data.isAdmin && (
                  <div className="mr-2 text-lg font-medium cursor-pointer">
                    Admin
                  </div>
                )}
                <div
                  className="cursor-pointer text-xl font-bold"
                  onClick={() => {
                    display === "hidden"
                      ? setdisplay("block")
                      : setdisplay("hidden");
                  }}
                >
                  <AccountCircleOutlined
                    style={{ fontSize: "2.5rem" }}
                    className="text-2xl"
                  />
                </div>
                <div
                  className={`dropdown rounded-md w-36 h-auto bg-gray-100 border-black top-[4rem] right-[2.1rem] absolute border-1 shadow-lg ${display}`}
                >
                  <ul className="flex flex-col space-y-2 py-2 justify-center items-center text-lg">
                    <li className="hover:bg-white text-center w-[100%]">
                      <Link to="">Profile</Link>
                    </li>
                    <li className="hover:bg-white text-center w-[100%]">
                      <Link to="">Orders</Link>
                    </li>
                    <li className="hover:bg-white text-center w-[100%]">
                      <Link
                        to=""
                        onClick={() => {
                          dispatch(logout(navigate));
                        }}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={style}
                  onClick={() => {
                    navigate("../cart");
                  }}
                >
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </div>
              </>
            )}
            {!userInfo && (
              <>
                <div className={style} onClick={handleToggle}>
                  <Link to="/register">Register</Link>
                </div>
                <div className={style}>
                  <Link to="/login" onClick={handleToggle}>
                    Sign In
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
