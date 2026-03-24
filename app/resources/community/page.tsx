"use client";

import Link from "next/link";
import { Globe, ArrowRight, Github, MessageSquare, MonitorPlay } from "lucide-react";
import WorldMap from "@/components/ui/world-map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white  pb-20">
      
      {/* Hero Section with World Map */}
      <section className="w-full relative overflow-hidden pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-(--primary-color)/30 bg-(--primary-color)/5 text-sm font-medium text-slate-200 mb-8">
            Mosura Community
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Community is the DNA of Mosura
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            The Mosura community brings together developers, contributors, and technology leaders
            from all over the world who are passionate about building the future of API
            management. We share resources, knowledge, and best practices for building and
            deploying APIs with Mosura.
          </p>

          <Button asChild className="relative z-10 bg-(--primary-color) hover:brightness-110 text-white px-7 py-3 text-sm font-semibold rounded-xl shadow-[0_16px_45px_rgba(237,127,24,0.6)] transition-all hover:scale-105 active:scale-95 group">
            <Link href="/resources/community/forum" className="flex items-center gap-2">
              Explore Community <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="w-full mt-[-40px] md:mt-[-80px] relative z-0 opacity-80">
          <WorldMap
            lineColor="#ed7f18" // Mosura primary color
            dots={[
              // North America -> Others
              { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: 51.5074, lng: -0.1278 } }, // LA to London
              { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 35.6895, lng: 139.6917 } }, // SF to Tokyo
              { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 52.52, lng: 13.405 } }, // NY to Berlin
              { start: { lat: 40.7128, lng: -74.006 }, end: { lat: -23.5505, lng: -46.6333 } }, // NY to Sao Paulo
              { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: -23.5505, lng: -46.6333 } }, // LA to Sao Paulo
              
              // Europe -> Others
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 8.076, lng: 88.8777 } }, // London to Mumbai (India)
              { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: -33.9249, lng: 18.4241 } }, // Paris to Cape Town
              { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 1.3521, lng: 103.8198 } }, // Frankfurt to Singapore
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 25.2048, lng: 55.2708 } }, // London to Dubai

              // Asia -> Others
              { start: { lat: 8.076, lng: 88.8777 }, end: { lat: 1.3521, lng: 103.8198 } }, // Mumbai to Singapore
              { start: { lat: 8.076, lng: 88.8777 }, end: { lat: 25.2048, lng: 55.2708 } }, // Mumbai to Dubai
              { start: { lat: 8.076, lng: 88.8777 }, end: { lat: -33.8688, lng: 151.2093 } }, // Mumbai to Sydney
              { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: -33.8688, lng: 151.2093 } }, // Tokyo to Sydney
              { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -26.2041, lng: 28.0473 } }, // Singapore to Johannesburg
              { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: 37.5665, lng: 126.9780 } }, // Tokyo to Seoul

              // Additional minor connections
              { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: -33.8688, lng: 151.2093 } }, // LA to Sydney
              { start: { lat: -33.9249, lng: 18.4241 }, end: { lat: -23.5505, lng: -46.6333 } }, // Cape Town to Sao Paulo
            ]}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#0a0a0a] border-y border-white/5 py-16 mt-[-40px] relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-(--primary-color)">400B+</div>
              <div className="text-sm text-slate-400 font-medium">API Calls/Day</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-(--primary-color)">300M+</div>
              <div className="text-sm text-slate-400 font-medium">Downloads</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-(--primary-color)">62K+</div>
              <div className="text-sm text-slate-400 font-medium">GitHub Stars</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-(--primary-color)">160K+</div>
              <div className="text-sm text-slate-400 font-medium">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup & Stay Connected */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Mosura Community</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Get the Mosura newsletter, event discounts, and access to free workshops, user calls, tech talks, local Meetups, and more.
        </p>

        <form className="max-w-lg mx-auto space-y-4 mb-16" onSubmit={(e) => e.preventDefault()}>
          <div className="text-left">
            <Input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#0F0F11] border-white/10 text-white h-12 focus-visible:ring-(--primary-color)" 
            />
          </div>
          <Button className="w-full bg-(--primary-color) hover:brightness-110 text-white h-12 text-md font-semibold transition-all duration-200">
            Sign Me Up
          </Button>
          <p className="text-xs text-slate-500 text-left leading-relaxed pt-2">
            I understand that by submitting this form, I agree to receive communications from Mosura. <a href="#" className="text-slate-300 hover:text-white underline underline-offset-2">Code of Conduct &rarr;</a>
          </p>
        </form>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 border-t border-white/5">
          <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 text-(--primary-color)" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-1">Stay Connected</h3>
            <p className="text-slate-400 text-sm mb-2">Engage with other Mosura developers on your favorite channels</p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a href="#" className="text-(--primary-color) hover:brightness-125 transition-all">Chat on Slack</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="flex items-center gap-1 text-(--primary-color) hover:brightness-125 transition-all">Join the Forum <ArrowRight className="w-3 h-3 -rotate-45" /></a>
              <span className="text-slate-700">|</span>
              <a href="#" className="flex items-center gap-1 text-(--primary-color) hover:brightness-125 transition-all">Watch on YouTube <ArrowRight className="w-3 h-3 -rotate-45" /></a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
