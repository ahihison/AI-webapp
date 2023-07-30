import { UserButton } from "@clerk/nextjs";
import SidebarMobile from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <SidebarMobile apiLimitCount={apiLimitCount} />
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
