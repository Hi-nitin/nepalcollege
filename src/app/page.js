import Image from "next/image";
import Navbar from "./components/navbar";
import CollegeList from "./components/collegelist";

export default function Home() {
  return (
    
    <>
    <Navbar/>
    <CollegeList/>
    </>
  );
}


export const metadata = {
  title: "Top Colleges in Nepal | Find Universities & Programs",
  description: "Explore the best colleges and universities in Nepal. Filter by city, university, course, and ownership type.",
  keywords: ["Colleges in Nepal", "Universities in Nepal", "Best Colleges", "Private Institutions", "Public Institutions"],
  authors: [{ name: "https://nepalcollege-5ycx.vercel.app/" }],
};
