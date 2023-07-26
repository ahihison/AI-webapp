"use client";
import Image from "next/image";

const Loader = () => {
  return (
    <div className=" flex flex-col gap-y-4 items-center justify-center h-full">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/logo.png" alt="logo" fill />
      </div>
      <p className="text-sm text-muted-foreground">Geniuse is thinking....</p>
    </div>
  );
};

export default Loader;
