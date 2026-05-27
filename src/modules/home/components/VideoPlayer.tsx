import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaPlay } from "react-icons/fa";

interface VideoPlayerProps {}

export default function VideoPlayer({}: VideoPlayerProps) {
  return (
    <section className="w-full h-auto">
      <div className="w-full h-[80px] lg:h-[180px] xl:h-[260px] 2xl:h-[360px] bg-[#0D0C1E] relative ">
        <div className="w-[320px] md:w-[420px] lg:w-[620px] xl:w-[820px] 2xl:w-[1010px] absolute rounded-2xl overflow-hidden top-0 md:-top-12 lg:top-0 right-1/2 translate-x-1/2 ">
          {/* 将src修改为你实际的工业场景演示图路径 */}
          <Image
            src="/images/factory-demo.jpg" 
            alt="工业吸油绵应用演示"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto relative"
          />
          {/* 替换为你真实的视频地址 */}
          <Link
            href="https://www.youtube.com/watch?v=你的视频ID" 
            aria-label="link-video"
            target="_blank"
            className="absolute top-1/2 right-1/2 translate-x-10 -translate-y-10 lg:translate-x-16 tra lg:-translate-y-14"
          >
            <Button
              aria-label="play-video"
              className="h-auto bg-white rounded-full p-6 lg:p-10 border-none hover:scale-105 transition-transform"
            >
              <FaPlay color="#1d4ed8" size={25} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[120px] lg:h-[180px] xl:h-[260px] 2xl:h-[360px] bg-[#F4F7FC]" />
    </section>
  );
}
