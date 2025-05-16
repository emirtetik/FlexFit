import { Outlet } from "react-router-dom";
import Header from "../../Navigation/header";
import Footer from "../../Navigation/footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};


export default MainLayout;