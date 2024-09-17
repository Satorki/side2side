interface Props {
  menuHandler: () => void;
  menuIsOpen: boolean;
}

const NavButton: React.FC<Props> = ({ menuHandler, menuIsOpen }) => {
  return (
    <button
      onClick={menuHandler}
      className="md:hidden flex flex-col justify-center items-center gap-2 min-w-[32px] min-h-[32px] cursor-pointer"
    >
      <span
        className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          menuIsOpen
            ? "-rotate-90 translate-y-4 -translate-x-2.5"
            : "translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          menuIsOpen ? "-rotate-90 translate-y-1.5" : "translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          menuIsOpen
            ? "-rotate-90 -translate-y-1 translate-x-2.5"
            : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default NavButton;
