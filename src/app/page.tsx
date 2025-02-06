"use client"
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HostelList from "@/components/HostelList";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [searchQuery] = useState("");

  return (
    <div>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus officiis unde asperiores, cum modi facilis, velit officia eius voluptates inventore praesentium vero corporis eum magnam quas nisi voluptatibus ipsam?</p> */}
      <Navbar/>
      <Banner/>
      {/* <HostelList/> */}
      <HostelList searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}