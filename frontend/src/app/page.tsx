import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatlingWidget from "@/components/ui/custom/chatlingWidget"
import Header from "@/components/ui/custom/Header"; 
import Link from 'next/link';

export default function Home() {
  return (
    <div> 
      {/* <Header/> */}
      <div className="hero w-full flex flex-col md:flex-row md:p-10 relative container justify-center md:items-start items-center mt-[150px] md:mt-10">  
        <img src="/assets/images/hero_sec_img.png" alt="hero_sec_image_bg" className="absolute w-[80%] top-[-20%] right-0"/>
        <div className="hleft h-[100%] w-[80%] lg:w-[50%] md:w-[80%]  md:p-[8rem]  flex flex-col justify-center gap-8">
          <h2 className="text-4xl font-semibold poly">A Safe Space for Women to Grow, Heal & Connect.</h2>
          <h3 className=" text-lg">Join a vibrant community of women supporting each other. Get expert guidance, explore new opportunities, and grow in a safe and uplifting space.</h3>
          <h3 className="mt-6 text-lg">Trusted by 10,000+ Women | 500+ Mentors | 100+ Career Opportunities</h3>

          <Link href="./register" >
            <button className="bg-[#FF00BF] w-[10rem] px-3 py-2 text-white rounded-3xl text-lg mt-14 self-center md:self-start">
              Join Now
            </button>
          
          </Link>
        </div>
        <div className="hright h-[100%] w-full  md:w-[50%] mt-10 md:mt-0">
          <img src="/assets/images/hero_girl.png" alt="hero_girl" className="w-full md:w-[80%]" />
        </div>
      </div>

      <div className="community m-5 pt-24 pl-24 pr-24 rounded-2xl bg-gradient-to-r from-white to bg-[#FFE1FA] flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div className="cleft w-full md:w-1/2 h-full md:h-[70%] mb-10 md:mb-0">
            <img src="/assets/images/comm.png" alt="community_of_girls" className="w-full md:w-[70%]" />
          </div>


          <div className="cright w-full md:w-[50%] flex flex-col gap-12">
            <h2 className="text-4xl font-semibold poly">A Girls-Only Community</h2>
            <h3 className=" text-lg">Welcome to a women-only space built just for you! Our community is designed to be a secure, empowering, and judgment-free environment where women from all backgrounds can connect, share their thoughts, seek support, and explore opportunities without fear or hesitation.</h3>
            
            <Link href="./community" >
            
              <button className="bg-black text-white inline-block px-7 py-3 w-fit rounded-3xl poly md:self-start self-center ">
                Connect
              </button>
            </Link>
          </div>

          
      </div>
      <div className="consultant m-5 pt-[3rem] pl-[7rem] pr-24 rounded-2xl bg-gradient-to-r flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div className="cleft flex flex-col gap-12 w-full md:w-1/2 mt-10">
            <h2 className="text-4xl font-semibold poly">Need Someone to Talk To?</h2>
            <h3 className=" text-lg">We understand that sometimes, all you need is a listening ear and the right guidance. Our consultancy services connect you with compassionate and experienced consultants who can help you navigate your thoughts, feelings, and challenges.</h3>
            
            <Link href="/consultancy">
              <button className="bg-[#FF00BF] text-white inline-block px-7 py-3 w-fit rounded-3xl poly md:self-start self-center">
                Explore
              </button>
            
            </Link>
            
          </div>


          <div className="cright w-full md:w-1/2 h-[70%] flex flex-row justify-end mt-10 md:mt-0">
            <img src="/assets/images/doc.png" alt="community_of_girls" className="w-full md:w-[60%]" />
          </div>
      </div>

      <div className="guidance m-5 pt-24 pl-24 pr-24 rounded-2xl bg-gradient-to-r from-white to bg-[#FFE1FA] flex flex-row">

          <div className="cleft w-full md:w-1/2 h-[70%] mb-10 md:mb-0">
            <img src="/assets/images/guide.png" alt="community_of_girls" className="w-full md:w-[80%] bg-blend-difference" />
          </div>


          <div className="cright w-full md:w-[50%] flex flex-col gap-12 text-center md:text-left">
            <h2 className="text-4xl font-semibold poly">Looking for the Right Guidance?</h2>
            <h3 className=" text-lg">Our Guidance Page is designed to help you find the support and advice you need. We understand that every individual faces unique challenges, which is why we’ve created a simple way to get personalized recommendations.</h3>
            
            <Link href="/guidance" >
              <button className="bg-black text-white inline-block px-7 py-3 w-fit rounded-3xl poly self-center md:self-start">
              Explore
              </button>
            
            </Link>
          </div>
      </div>
      <div className="consultant m-5 pt-24 pl-[7rem] pr-24 rounded-2xl bg-gradient-to-r flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div className="cleft flex flex-col gap-12 w:full md:w-1/2">
            <h2 className="text-4xl font-semibold poly">Know More About Us</h2>
            <h3 className=" text-lg">At Maitri, we believe that everyone deserves a space to be heard, understood, and supported. Our platform is dedicated to helping girls and women navigate their personal challenges by connecting them with experienced consultants who offer guidance, encouragement, and practical solutions.</h3>
            <h3 className=" text-lg">Whether you're dealing with emotional struggles, self-doubt, stress, or life decisions, we provide a judgment-free zone where you can find answers. Through personalized consultations, curated resources, and expert advice, we aim to empower you to move forward with confidence.</h3>
          </div>


          <div className="cright w-full md:w-1/2 h-[70%] flex flex-row justify-end mt-10 md:mt-0">
            <img src="/assets/images/maitri.webp" alt="community_of_girls" className="md:w-[65%] w-[100%] rounded-2xl " />
          </div>
      </div> 
      <ChatlingWidget />
    </div>
  );
}
