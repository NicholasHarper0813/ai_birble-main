import {
  AudioLines,
  Code,
  Image as ImageIcon,
  MessageCircle,
  Music,
  Video,
  Zap,
} from "lucide-react";
import AppLogo from "../../icons/app-logo";
import SidebarItem from "./sidebar-item";
import Image from "next/image";

import sidebarCtaImage from "@/assets/images/sidebar-cta.png";
import astronautImage from "@/assets/images/sidebar-astronaut.png";

// Sidebar items
const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    subitems: [],
  },
  {
    label: "AI Generator",
    subitems: [
      {
        label: "Conversation",
        icon: <MessageCircle className="h-3 w-3" />,
      },
      {
        label: "Image Creation",
        icon: <ImageIcon className="h-3 w-3" />,
      },
      {
        label: "Music Creation",
        icon: <Music className="h-3 w-3" />,
      },
      {
        label: "Video Creation",
        icon: <Video className="h-3 w-3" />,
      },
      {
        label: "Code Creation",
        icon: <Code className="h-3 w-3" />,
      },
      {
        label: "Text to Voice",
        icon: <AudioLines className="h-3 w-3" />,
      },
    ],
  },
  {
    label: "Collections",
    subitems: [],
  },
  {
    label: "Token Sale",
    subitems: [],
  },
];

// Sidebar bottom items
const SIDEBAR_BOTTOM_ITEMS = [
  {
    label: "Profile & Settings",
  },
  {
    label: "FAQ & Help",
  },
  {
    label: "Logout",
  },
];

// Sidebar component
export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-sidebar overflow-y-auto overflow-x-hidden">
      <div className="relative z-20">
        <div className="mt-11 mb-14 flex justify-center">
          <AppLogo />
        </div>
        <div className="px-5">
          {/* First List */}
          <ul className="flex flex-col gap-3">
            {SIDEBAR_ITEMS.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                subItems={item.subitems}
              />
            ))}
          </ul>
          {/* CTA */}
          <div className="mt-24 mb-12 relative">
            <Image src={sidebarCtaImage} alt="" className="w-full" />
            <Image
              src={astronautImage}
              alt=""
              className="w-1/2 absolute bottom-2/4 z-10"
            />
            <div className="bg-[#0B0623] bg-opacity-60 backdrop-blur-xl p-4 rounded-3xl absolute bottom-0 left-0 right-0 mx-2 mb-3">
              <div className="flex gap-6">
                <Zap className="fill-white h-12 w-12" />
                <div className="flex flex-col">
                  <span className="text-semibold">Upgrade</span>
                  <span className="text-semibold text-2xl">300</span>
                </div>
              </div>
            </div>
          </div>
          {/* Second List */}
          <ul className="flex flex-col gap-3">
            {SIDEBAR_BOTTOM_ITEMS.map((item) => (
              <SidebarItem key={item.label} label={item.label} />
            ))}
          </ul>

          {/* Profile */}
          <div className="mt-12 mb-16 flex gap-3 items-center">
            <div className="relative rounded-2xl overflow-hidden h-16 w-16">
              <Image
                src={
                  "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
                fill
                objectFit="cover"
              />
            </div>
            <div className="leading-loose flex flex-col">
              <span className="text-semibold text-lg">Mima Smith</span>
              <span className="text-foreground-secondary text-xs">
                Designer
              </span>
            </div>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="bg-[#1F2A88] rounded-full h-72 w-72 absolute left-1/2 top-56 -z-10 blur-[100px]" />
        <div className="bg-[#471F88] rounded-full h-56 w-72 absolute right-1/2 bottom-80 -z-10 blur-[100px]" />
      </div>
    </aside>
  );
};
