import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoPlayer() {
  return (
    <section className="w-full relative py-12">
      {/* 背景层：通过拆分深色与浅色背景实现层次感 */}
      <div className="absolute top-0 w-full h-1/2 bg-[#0D0C1E]" />
      <div className="absolute bottom-0 w-full h-1/2 bg-[#F4F7FC]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative group">
          {/* 视频封面图 */}
          <Image
            src="/images/factory-demo.jpg" 
            alt="工业吸油绵应用演示视频"
            width={1200}
            height={675}
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* 遮罩层：增加朦胧感让按钮更显眼 */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          
          {/* 播放按钮：居中处理 */}
          <Link
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" 
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Button
              shape="circle"
              size="large"
              className="w-20 h-20 lg:w-28 lg:h-28 flex items-center justify-center bg-white/90 hover:bg-white border-none shadow-xl hover:scale-110 transition-all"
            >
              <FaPlay className="text-blue-600 ml-1" size={30} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
