import { UserButton } from "@clerk/nextjs";
import SidebarMobile from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { ModeToggle } from "./modetoggle";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="flex items-center p-4">
      <SidebarMobile apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex justify-end items-center w-full gap-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
