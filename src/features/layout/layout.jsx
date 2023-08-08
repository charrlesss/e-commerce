import { useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { sidebarSetOpen, sidebarSetClose } from "../../store/reduces/appconfig";
import FirebaseAuth from "../components/authentication";

export default function Layout({ children }) {
  const store = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    const resize = () => {
      if (window.matchMedia("(min-width:1280px)").matches) {
        dispatch(sidebarSetOpen());
      }

      if (window.matchMedia("(max-width:1280px)").matches) {
        dispatch(sidebarSetClose());
      }
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [dispatch]);

  return (
    <main className="relative  min-w-screen min-h-screen  padding-0">
      <FirebaseAuth />
      <div className="flex flex-col h-full ">
        <header className="w-full z-[9] fixed xl:h-[60px] h-[120px] bg-blue-500 ">
          <Header />
        </header>
        <div className="flex flex-1 flex-row xl:pt-[60px] lg:pt-[110px] md:pt-[120px] pt-[60px] h-full ">
          <nav
            className={`${
              store.isSidebarShow ? "-left-[1000px]" : "left-0"
            } xl:relative fixed xl:shadow-none shadow-xl h-full 
            transition-all  sm:w-[400px] w-[280px] xl:self-auto self-start bg-white z-[8]`}
          >
            <Sidebar />
          </nav>
          <div className="flex-1 w-full h-[1100px] md:px-10 ">
            <Content>{children}</Content>
          </div>
        </div>
      </div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
