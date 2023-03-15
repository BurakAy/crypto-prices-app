import Footer from "./Footer";
import Nav from "./Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
