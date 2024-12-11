import ActivityActionCard from "@/components/ui/activity-action-card";
import NotificationTile from "@/components/ui/notification-tile";
import React from "react";

const NotificationsPanel = () => {
  return (
    <div className="rounded-4xl bg-card-2 p-5">
      {/* Notifications */}
      <div className="flex items-center justify-between px-5">
        <span className="text-xl">Notifications</span>
        <button className="text-[#4C86FF]">SEE ALL</button>
      </div>
      <div className="bg-card-3 py-4 px-6 rounded-4xl mt-6 max-h-[412px] overflow-y-auto no-scrollbar">
        <div className="text-sm text-white/50 mb-2.5">Today</div>
        <ul className="flex flex-col gap-5">
          <NotificationTile
            time="10:00PM"
            message="You have a new follower Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat."
          />
          <NotificationTile
            time="12:00AM"
            message="You have a new follower Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat."
            red
          />
          <NotificationTile
            time="1:00PM"
            message="You have a new follower Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat."
            red
          />
          <NotificationTile
            time="1:00PM"
            message="You have a new follower Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat."
            red
          />
          <NotificationTile
            time="1:00PM"
            message="You have a new follower Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat."
            red
          />
        </ul>
      </div>

      {/* Activity */}
      <div className="mt-16">
        <div className="flex items-center justify-between px-5">
          <span className="text-xl">Activity Center</span>
        </div>
        <div className="rounded-4xl bg-card-3 p-2.5 mt-6">
          <div className="flex flex-col gap-y-4">
            {/* NFT COLLECTION */}
            <div className="bg-card-4 rounded-3xl p-2.5">
              <span className="text-xl px-2.5">NFT Collection</span>
              <div className="grid grid-cols-3 gap-3.5 mt-4">
                <div className="rounded-2xl px-5 pb-4 pt-14 bg-[#9227D2]">
                  <span className="block text-2xl font-semibold">3234</span>
                  <span className="text-sm font-thin">Created</span>
                </div>
                <div className="rounded-2xl px-5 pb-4 pt-14 bg-[#6232E8]">
                  <span className="block text-2xl font-semibold">63</span>
                  <span className="text-sm font-thin">Deployed</span>
                </div>
                <div className="rounded-2xl px-5 pb-4 pt-14 bg-[#E42474]">
                  <span className="block text-2xl font-semibold">4</span>
                  <span className="text-sm font-thin">Pending</span>
                </div>
              </div>
            </div>

            <ActivityActionCard
              title="Latest Smart Contracts"
              heading="XYZ Smart Contract"
              subHeading="Deployed 24 March 2024"
              buttonText="Deployed"
            />

            {/* CAMPAIGN */}
            <div className="bg-card-4 rounded-3xl p-2.5">
              <span className="text-xl px-2.5">Campaign</span>
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                <div className="rounded-2xl px-5 pb-4 pt-14 bg-[#D55A33]">
                  <span className="block text-2xl font-semibold">24</span>
                  <span className="text-sm font-thin">All Campaign</span>
                </div>
                <div className="rounded-2xl px-5 pb-4 pt-14 bg-[#01986B]">
                  <span className="block text-2xl font-semibold">3</span>
                  <span className="text-sm font-thin">Current Campaign</span>
                </div>
              </div>
            </div>

            <ActivityActionCard
              title="Next Billing Date"
              heading="Wednesday, 24 March 2024"
              subHeading="Your pro plan is expiring soon"
              buttonText="Pay now"
            />
            <ActivityActionCard
              title="New Release"
              heading="Motion Creator"
              subHeading="Turn your still images into motion"
              buttonText="Explore"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;
