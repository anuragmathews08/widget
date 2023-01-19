import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  return (
    <div className="absolute top-0 left-0 bg-cyan-800 w-full flex items-center gap-10 p-5 justify-center shadow-xl">
      <Link
        to="circle-widget"
        className="text-white text-2xl font-medium pb-1.5 outline-none"
        style={{
          borderBottom:
            location.pathname === "/circle-widget" || location.pathname === "/"
              ? "2px solid lightBlue"
              : "",
        }}
      >
        Circle
      </Link>
      <Link
        to="bar-widget"
        className="text-white text-2xl font-medium pb-1.5 outline-none"
        style={{
          borderBottom:
            location.pathname === "/bar-widget" ? "2px solid lightBlue" : "",
        }}
      >
        Bar
      </Link>
    </div>
  );
};
