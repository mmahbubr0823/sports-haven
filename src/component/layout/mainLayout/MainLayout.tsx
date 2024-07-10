import { Outlet } from "react-router-dom";
import Container from "../../ui/container/Container";
import NavBar from "../../ui/NavBar/NavBar";

const MainLayout = () => {
    return (
       <Container>
         <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
       </Container>
    );
};

export default MainLayout;