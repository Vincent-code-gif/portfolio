"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
       
        <RecentProjects />
        <Clients />
        <Experience />
        
        <Footer />
      </div>
    </main>
  );
};

export default Home;
