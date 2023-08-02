"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const textimonials = [
  {
    name: "Vincent",
    avatar: "/avatar.png",
    title: "Software Engineer",
    description: "This i a best applicantion I've used!",
  },
  {
    name: "Jondoe",
    avatar: "B",
    title: "Teacher",
    description: "This i a best applicantion I've used!",
  },
  {
    name: "Smith",
    avatar: "C",
    title: "Teach Lead",
    description: "The best in class! Love it!",
  },
  {
    name: "Tom Holand",
    avatar: "D",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
];
const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {textimonials.map((item) => (
          <Card
            key={item.name}
            className="dark:bg-[#192339] dark:text-white  dark:border-none hover:scale-105 transition-all cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="rounded-full w-8 h-8"
                  />
                </Avatar>
                <div>
                  <p className="text-lg">{item.name}</p>

                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                <p>{item.description}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
