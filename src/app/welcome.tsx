import welcomeImage from "@/assets/images/welcome-image.png";
import WalletScribble from "@/assets/svg/wallet-scribble-bg.svg";
import { Wallet } from "lucide-react";

const WelcomeSection = () => {
  return (
    <div className="grid grid-cols-[1fr_272px] gap-8">
      <div
        className="rounded-4xl py-10 px-12"
        style={{
          background: `url(${welcomeImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0% 0%",
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="font-semibold text-3xl">Dashboard</h2>
            <h3 className="text-white/50">Monday 22 Jan 2024</h3>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl">Welcome back, Mima!</h3>
            <div className="bg-[#232343] bg-opacity-40 backdrop-blur-[80px] rounded-full p-1">
              <button className="px-5 py-2">Pro Plan</button>
              <button className="px-5 py-2 rounded-full bg-white text-black">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-4xl aspect-square p-4"
        style={{
          background: `url(${WalletScribble.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#232343] bg-opacity-20 backdrop-blur-[80px] rounded-4xl py-7 px-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between">
                <span>Wallet Balance</span>
                <Wallet className="fill-white" />
              </div>
              <div className="text-3xl font-semibold mt-5">9,758.01</div>
              <div className="text-white/50 text-sm">Birble AI Tokens</div>
            </div>
            <div>
              <div className="text-right text-xs text-white/50 px-2">
                Remaining
              </div>
              <div className="bg-card-4 rounded-2xl p-2.5 text-sm mt-1">
                <ul>
                  <li className="flex justify-between border-b border-white/5">
                    <span className="text-white/50">Tokens</span>
                    <span>300</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5">
                    <span className="text-white/50">Collection Creation</span>
                    <span>24</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
