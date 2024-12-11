import WelcomeSection from "./welcome";
import CategoriesSection from "./categories";
import NotificationsPanel from "./notifications";
import Image from "next/image";

import bgGradient from "@/assets/svg/main-bg-gradient.svg";

export default function Page() {
  return (
    <div className="bg-card px-5 py-7 rounded-5xl">
      <div className="inner-layout gap-7">
        <div className="flex flex-col gap-6 relative z-20">
          <WelcomeSection />
          <CategoriesSection />
          <div>
            <div className="px-8 py-2 text-xl font-medium">
              <span>Recent Notifications</span>
            </div>
            <div className="bg-card-3 rounded-4xl px-5"></div>
          </div>

          <Image
            src={bgGradient}
            alt=""
            className="absolute left-24 top-28 -z-20"
          />
        </div>
        <div>
          <NotificationsPanel />
        </div>
      </div>
    </div>
  );
}
