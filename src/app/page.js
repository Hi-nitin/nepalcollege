export const metadata = {
  title: "Top Colleges in Nepal | Best Universities & Programs",
  description: "Find the best colleges and universities in Nepal. Compare courses, tuition fees, and admission requirements.",
  keywords: ["Colleges in Nepal", "Universities in Nepal", "Best Colleges", "Private Institutions", "Public Institutions", "Nepal Education", "Top Universities"],
  authors: [{ name: "Nepal College Guide" }],
  openGraph: {
    title: "Top Colleges in Nepal | Best Universities & Courses",
    description: "Explore the best colleges and universities in Nepal. Find detailed info about courses, admissions, and more.",
    url: "https://nepalcollege-5ycx.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://nepalcollege-5ycx.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal Colleges Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Colleges in Nepal | Best Universities & Courses",
    description: "Find the best colleges and universities in Nepal. Filter by city, university, and more.",
    images: ["https://nepalcollege-5ycx.vercel.app/og-image.jpg"],
  },
};

import Navbar from "./components/navbar";
import CollegeList from "./components/collegelist";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Top Colleges in Nepal - Find the Best Universities & Programs
        </h1>
        <CollegeList />
      </main>
    </>
  );
}
