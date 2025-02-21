import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatlingWidget from "@/components/ui/chatlingWidget"


export default function Home() {
  return (
    <div>
      <div className="hero  w-full  flex flex-col md:flex-row md:p-10 relative container justify-center md:items-start items-center">  
        <img src="/assets/images/hero_sec_img.png" alt="hero_sec_image_bg" className="absolute w-[80%] top-[-20%] right-0"/>
        <div className="hleft h-[100%] w-[80%] lg:w-[50%] md:w-[80%]  md:p-[8rem]  flex flex-col justify-center gap-8">
          <h2 className="text-4xl font-semibold">A Safe Space for Women to Grow, Heal & Connect.</h2>
          <h3 className=" text-lg">Join a vibrant community of women supporting each other. Get expert guidance, explore new opportunities, and grow in a safe and uplifting space.</h3>
          <h3 className="mt-6 text-lg">Trusted by 10,000+ Women | 500+ Mentors | 100+ Career Opportunities</h3>
          <button className="bg-[#FF00BF] w-[10rem] px-3 py-2 text-white rounded-3xl text-lg mt-14 self-center md:self-start">
            Join Now
          </button>
        </div>
        <div className="hright h-[100%] w-[50%]">
          <img src="/assets/images/hero_girl.png" alt="hero_girl" className="w-full md:w-[80%]" />
        </div>
      </div>
      <ChatlingWidget />
    </div>
  );
}
