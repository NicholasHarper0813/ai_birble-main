import Image from "next/image";
import productiveImage from "@/assets/svg/productivity.svg";
import chainLinkImage from "@/assets/svg/winning-team.svg";
import paymentsImage from "@/assets/svg/payments.svg";
import projectsImage from "@/assets/svg/projects-gallery.svg";
import creativeImage from "@/assets/svg/creative-materials.svg";
import campaignImage from "@/assets/svg/campaign-notifications.svg";
import satellite1 from "@/assets/svg/sattelite-1.svg";
import satellite2 from "@/assets/svg/satellite-2.svg";

const CATEGORIES = [
  {
    title: "Skating Dashboard",
    image: productiveImage,
  },
  {
    title: "ChainLink Raffle",
    image: chainLinkImage,
  },
  {
    title: "Payment Center",
    image: paymentsImage,
  },
  {
    title: "Media Created",
    image: projectsImage,
  },
  {
    title: "Creative Center",
    image: creativeImage,
  },
  {
    title: "Campaign Center",
    image: campaignImage,
  },
];

const CategoriesSection = () => {
  return (
    <>
      <div className="bg-card py-4 px-5 rounded-4xl">
        <div className="grid grid-cols-2 gap-6">
          <div className="px-6 pb-5 pt-16  bg-gradient-to-tr from-[#B0751E] to-[#9C610A] rounded-3xl relative">
            <h3 className="text-2xl font-semibold">Business Center</h3>
            <div className="text-white/50">
              Create Business Plans, Whitepaper and more.
            </div>
            <Image
              src={satellite1}
              alt=""
              className="absolute -right-5 bottom-8"
            />
          </div>
          <div className="px-6 pb-5 pt-16  bg-gradient-to-tr from-[#74136F] to-[#60005B] rounded-3xl relative">
            <h3 className="text-2xl font-semibold">Web 3</h3>
            <div className="text-white/50">Create Smart Contracts and NFTs</div>
            <Image
              src={satellite2}
              alt=""
              className="absolute -right-5 bottom-8"
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-6 gap-6">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-[#4646D6] rounded-3xl flex flex-col items-center"
          >
            <Image
              src={category.image}
              alt={category.title}
              className="mb-14"
            />
            <h4 className="font-semibold px-5 pb-8">{category.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesSection;
