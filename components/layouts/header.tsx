import Hamburger from "../hamburger";
import Logo from "../logo";
import Navigation from "../navigation";

const Header = ({ setHamburger, hamburger }: IhamburgerProps): JSX.Element => {
  return (
    <header
      className={`bg-background ${
        hamburger ? " max-[768px]:h-[100vh] max-[768px]:z-30" : "h-20 "
      } overflow-hidden border-b border-border sticky  top-0 z-50 max-[770px]:flex-col px-3 md:px-6 flex items-center max-[770px]:justify-start justify-between w-full`}
    >
      <div className="container flex-shrink-0 md:flex md:items-center justify-between">
        <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
        <Logo />

        {/* className={`${hamburger ? " max-[1000px]:block" : "max-[770px]:hidden " */}
        <div className={`${hamburger ? "w-full" : ""} `}>
          <Navigation hamburger={hamburger} setHamburger={setHamburger} />
        </div>
      </div>
    </header>
  );
};

export default Header;
