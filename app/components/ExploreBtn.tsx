"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mx-auto mt-10" onClick={()=> console.log("Explore Btn Clicked")}>
        <a href="#events">
            <div className="flex flex-row justify-center items-center gap-2">
                <p>Explore Events</p>
                <ArrowDown className="w-5 h-5"/>
            </div>
            
        </a>

    </button>
  )
}

export default ExploreBtn
