


import Image from "next/image";
import { Button } from "@/components/ui/button"; 

import { Badge } from "@/components/ui/badge"


export default function Post() {
  return (
    <div className=" border-red-2" >
       <Badge className="" >userSerialNumber</Badge>
       <h1> Post Heading </h1>
       <p>The Post content here. The Post content here. The Post content here. The Post content here. The Post content here. </p>
       <div className="flex items-center bg-gray-100 p-2 rounded w-fit gap-1 " >  <img width="20"   src="https://img.icons8.com/ios-glyphs/90/comments.png" alt="comments"/> Comments </div>
    </div>
  );
}