"use client";

import { Provider } from "react-redux";
import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { store } from "@/utils/store";

interface LayoutsProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutsProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        <Navbar />
        {/* main 使用 flex-grow 确保内容较少时 Footer 依然在底部 */}
        <main className="w-full flex-grow scroll-smooth">
          {children}
        </main>
        <Footer />
      </Provider>
    </div>
  );
}
