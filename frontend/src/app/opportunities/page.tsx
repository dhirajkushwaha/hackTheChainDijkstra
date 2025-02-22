import React from 'react'
import Header from '@/components/ui/custom/Header'
import { FaClock } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Footer from '@/components/ui/custom/footer';

function page() {
  return (
    <div>
        {/* <Header></Header> */}
        <div className="card-grid p-10 flex gap-4 justify-center flex-wrap">
            <div className="card card1  bg-white h-[14.5rem] md:h-[15rem] w-[500px] rounded-2xl border-2 border-[#FFD2EA] p-5 flex flex-row gap-5">
                <div className="left md:h-11 md:w-11 h-7 w-7 md:border-2 border-gray-300 md:p-1 rounded-full">
                    <img src="/assets/org_logo/iiitk.png" alt="org_logo" />
                </div>
                <div className="right">
                    <div className="tag bg-gray-200 px-4 py-1 rounded-2xl font-thin text-sm w-fit mb-2 ">Hackathon</div>
                    <div className="opp-title text-2xl md:text-3xl font-bold poly tracking-wide ">HackTheChain 3.0</div>
                    <div className="club-things mt-3 flex flex-col gap-1.5">
                        <div className="location text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaHome className="md:text-lg text-lg text-pink-500 transition-transform transform inline-block " />Indian Institute of Information Technology (IIIT), Kota</div>
                        <div className="end-time text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaClock className="md:text-lg text-sm text-pink-500 transition-transform transform inline-block " />20-02-2025</div>
                    </div>
                    <div className="hashtags flex flex-row gap-1 mt-5">
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Dijkstra</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Science</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Technology</div>
                    </div>
                </div>
            </div>
            <div className="card card1  bg-white h-[14.5rem] md:h-[15rem] w-[500px] rounded-2xl border-2 border-[#FFD2EA] p-5 flex flex-row gap-5">
                <div className="left md:h-11 md:w-11 h-7 w-7 md:border-2 border-gray-300 md:p-1 rounded-full">
                    <img src="/assets/org_logo/iiitk.png" alt="org_logo" />
                </div>
                <div className="right">
                    <div className="tag bg-gray-200 px-4 py-1 rounded-2xl font-thin text-sm w-fit mb-2 ">Hackathon</div>
                    <div className="opp-title text-2xl md:text-3xl font-bold poly tracking-wide ">HackTheChain 3.0</div>
                    <div className="club-things mt-3 flex flex-col gap-1.5">
                        <div className="location text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaHome className="md:text-lg text-lg text-pink-500 transition-transform transform inline-block " />Indian Institute of Information Technology (IIIT), Kota</div>
                        <div className="end-time text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaClock className="md:text-lg text-sm text-pink-500 transition-transform transform inline-block " />20-02-2025</div>
                    </div>
                    <div className="hashtags flex flex-row gap-1 mt-5">
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Dijkstra</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Science</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Technology</div>
                    </div>
                </div>
            </div>
            <div className="card card1  bg-white h-[14.5rem] md:h-[15rem] w-[500px] rounded-2xl border-2 border-[#FFD2EA] p-5 flex flex-row gap-5">
                <div className="left md:h-11 md:w-11 h-7 w-7 md:border-2 border-gray-300 md:p-1 rounded-full">
                    <img src="/assets/org_logo/iiitk.png" alt="org_logo" />
                </div>
                <div className="right">
                    <div className="tag bg-gray-200 px-4 py-1 rounded-2xl font-thin text-sm w-fit mb-2 ">Hackathon</div>
                    <div className="opp-title text-2xl md:text-3xl font-bold poly tracking-wide ">HackTheChain 3.0</div>
                    <div className="club-things mt-3 flex flex-col gap-1.5">
                        <div className="location text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaHome className="md:text-lg text-lg text-pink-500 transition-transform transform inline-block " />Indian Institute of Information Technology (IIIT), Kota</div>
                        <div className="end-time text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaClock className="md:text-lg text-sm text-pink-500 transition-transform transform inline-block " />20-02-2025</div>
                    </div>
                    <div className="hashtags flex flex-row gap-1 mt-5">
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Dijkstra</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Science</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Technology</div>
                    </div>
                </div>
            </div>
            <div className="card card1  bg-white h-[14.5rem] md:h-[15rem] w-[500px] rounded-2xl border-2 border-[#FFD2EA] p-5 flex flex-row gap-5">
                <div className="left md:h-11 md:w-11 h-7 w-7 md:border-2 border-gray-300 md:p-1 rounded-full">
                    <img src="/assets/org_logo/iiitk.png" alt="org_logo" />
                </div>
                <div className="right">
                    <div className="tag bg-gray-200 px-4 py-1 rounded-2xl font-thin text-sm w-fit mb-2 ">Hackathon</div>
                    <div className="opp-title text-2xl md:text-3xl font-bold poly tracking-wide ">HackTheChain 3.0</div>
                    <div className="club-things mt-3 flex flex-col gap-1.5">
                        <div className="location text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaHome className="md:text-lg text-lg text-pink-500 transition-transform transform inline-block " />Indian Institute of Information Technology (IIIT), Kota</div>
                        <div className="end-time text-[0.75rem] md:text-sm flex flex-row gap-1 items-center h-3 mt-2"><FaClock className="md:text-lg text-sm text-pink-500 transition-transform transform inline-block " />20-02-2025</div>
                    </div>
                    <div className="hashtags flex flex-row gap-1 mt-5">
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Dijkstra</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Science</div>
                        <div className="hash1 border-2 border-gray-300 px-2 py-0.5 rounded-2xl font-thin text-[0.7rem] w-fit mb-2">Technology</div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default page