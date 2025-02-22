'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import videosData from './videos.json';
import { Dialog } from '@headlessui/react';
import { url } from 'inspector';

interface Video {
  id: number;
  title: string;
  category: string;
  video_link: string;
  description: string;
  thumbnail?: string;
}

export default function ResourcePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const filtered = (videosData.videos as Video[]).filter(video =>
        selectedCategories.includes(video.category)
      );
      setFilteredVideos(filtered);
    }
  }, [selectedCategories]);

  const uniqueCategories = Array.from(
    new Set((videosData.videos as Video[]).map(video => video.category))
  );

  const handleCategorySelect = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(cat => cat !== category) : [...prev, category]
    );
  };

  function getVideoId(url: string): string | null {
    try {
      const urlObj = new URL(url);
  
      if (urlObj.hostname === "www.youtube.com" && urlObj.pathname === "/watch") {
        return urlObj.searchParams.get("v");
      }
  
      if (urlObj.hostname === "www.youtube.com" && urlObj.pathname.startsWith("/shorts/")) {
        return urlObj.pathname.split("/")[2];
      }
  
      if (urlObj.hostname === "www.youtube.com" && urlObj.pathname.startsWith("/embed/")) {
        return urlObj.pathname.split("/")[2];
      }
  
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.split("/")[1]; 
      }
  
      return null; 
    } catch (error) {
      console.error("Invalid URL", error);
      return null;
    }
  }
  
  return (
    <div className="p-6 z-0">
      {/* Category Selection Modal */}
      <Dialog open={isDialogOpen} onClose={() => {}} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center relative">
          <Dialog.Title className="text-xl font-bold mb-4">Select at least one category</Dialog.Title>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {uniqueCategories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg border ${selectedCategories.includes(category) ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            className="border-2 border-[#EC4899] text-[#EC4899] px-4 py-2 rounded-2xl mt-2 disabled:opacity-50"
            disabled={selectedCategories.length === 0}
            onClick={() => setIsDialogOpen(false)}
          >
            Next
          </button>
        </Dialog.Panel>
      </Dialog>

      {/* Additional Buttons on the Right Side */}
      {isDialogOpen && (
        <div className="fixed left-4 z-10  top-1/2 transform -translate-y-1/2 gap-5 flex flex-col space-y-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 -rotate-90 rounded-lg shadow-lg"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "./merged.pdf"; // Replace with your actual file path
            link.download = "sample.pdf"; // Name of the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>
            Helpline
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 -rotate-90 rounded-lg shadow-lg">
            Info
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 -rotate-90 rounded-lg shadow-lg">
            Exit
          </button>
        </div>
      )}

      {/* Video Cards Display */}
      {!isDialogOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredVideos.map(video => (
            <div key={video.id}>
              <script>console.log({video.video_link})</script>
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <Image
                  src={ video.thumbnail
                  || `https://img.youtube.com/vi/${getVideoId(video.video_link)}/0.jpg`}
                  alt={video.title}
                  layout='responsive'
                  width={16}
                  height={9}
                  objectFit='cover'
                  className="rounded-md"
                />
                <h3 className="mt-2 font-bold text-lg mb-3">{video.title}</h3>
                <span className="text-sm text-[#EC4899] bg-[#FAE4F0] px-2 py-1 rounded-md ">{video.category}</span>
                <p className="text-gray-600 mt-2">{video.description}</p>
                <a
                  href={video.video_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block border-2 border-[#EC4899]  text-[#EC4899] hover:bg-[#EC4899] hover:text-white transition duration-150 px-4 py-2 rounded-3xl"
                >
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
