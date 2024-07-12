import { Outlet } from "react-router-dom";
import Container from "../../ui/container/Container";
import NavBar from "../../ui/NavBar/NavBar";
import Footer from "../../ui/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <div>
          <Toaster />
          <Outlet></Outlet>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
