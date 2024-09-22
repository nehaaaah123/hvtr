import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import bgVideo from "./vdo.mp4"; // Ensure the correct path

export default function Layout() {
    return (
        <div className="relative flex flex-col min-h-screen">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full bg-opacity-10 object-cover -z-10"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Header />
            <main className="flex-grow relative z-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
