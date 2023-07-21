import { UserButton } from "@clerk/nextjs";
import SidebarMobile from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <SidebarMobile />
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
