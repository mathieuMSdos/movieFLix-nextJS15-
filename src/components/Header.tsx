
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="h-14 fixed top-0 left-0 w-full backdrop-blur-2 bg-black/50 backdrop-blur-sm z-40">
      <NavBar></NavBar>
    </div>
  );
};

export default Header;