import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

const Navbar1 = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    try {
      const isUser = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          setUser(true);
        }
      };
      isUser();
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(user);
  const logout = () => {
    localStorage.removeItem("token");
    setUser("");
    navigate("/");
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        
      >
        <a href="/cart" className="flex items-center" >
          Cart
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="">
      <Navbar className="bg-white top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold bg-black px-4 rounded-full text-"
            style={{ color: "violet", fontFamily: "cursive" }}
          >
            VIOLET
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user ? (
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={logout}
                >
                  <span>Logout</span>
                </Button>
              ) : (
                <>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                    onClick={() => navigate("/login")}
                  >
                    <span>Log In</span>
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                    onClick={() => navigate("/register")}
                  >
                    <span>Sign in</span>
                  </Button>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {user ? (
              <Button
                fullWidth
                variant="text"
                size="sm"
                className=""
                onClick={logout}
              >
                <span>Logout</span>
              </Button>
            ) : (
              <>
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  className=""
                  onClick={() => navigate("/login")}
                >
                  <span>Log In</span>
                </Button>
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className=""
                  onClick={() => navigate("/register")}
                >
                  <span>Sign in</span>
                </Button>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar1;
