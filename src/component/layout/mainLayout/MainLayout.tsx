import { Outlet } from "react-router-dom";
import Container from "../../ui/container/Container";
import NavBar from "../../ui/NavBar/NavBar";
import Footer from "../../ui/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <div>
          <Outlet></Outlet>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
