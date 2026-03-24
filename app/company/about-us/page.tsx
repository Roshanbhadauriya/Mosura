"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Lightbulb,
  Target,
  Users,
  ShieldCheck,
  Cog,
  TrendingUp,
  Cpu,
  Handshake,
  Puzzle,
  Zap,
  Send,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const MISSION_ICONS = [
  { icon: Lightbulb, label: "Need" },
  { icon: Puzzle, label: "Innovation" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Cpu, label: "Tech" },
];

const APPROACH_ICONS = [
  { icon: Cog, label: "Customize" },
  { icon: Target, label: "Solution" },
  { icon: Zap, label: "Efficiency" },
];

const VALUES = [
  {
    icon: Target,
    title: "Expertise",
    description:
      "With years of experience and a proven track record of success, we have the expertise to tackle even the most complex technology challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We are passionate about innovation and are constantly exploring new technologies and methodologies to deliver cutting-edge solutions that drive business growth.",
  },
  {
    icon: Handshake,
    title: "Client-Centric Approach",
    description:
      "Our clients are at the heart of everything we do. We are committed to building long-term partnerships based on trust, transparency, and mutual success.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Quality is our top priority. We adhere to the highest standards of quality assurance to ensure that our solutions are reliable, secure, and perform at the highest level.",
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden pt-32 pb-20">
        {/* Ambient glow — matches FooterCTA / Hero patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(237,127,24,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="overflow-hidden border-border/50 bg-card">
              <div className="aspect-4/3 bg-linear-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center">
                <div className="text-center space-y-3 p-8">
                  <Users className="mx-auto h-16 w-16 text-[#ed7f18]/60" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Team collaboration
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <span className="text-5xl font-black leading-none text-[#ed7f18]">
                &ldquo;Z
              </span>
              <p className="pt-2 text-lg font-medium leading-relaxed text-slate-200">
                eroteq Software Private Limited. Welcome to Zeroteq, where
                innovation meets excellence in technology solutions.
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-400">
              As a leading technology service provider, we are dedicated to
              empowering businesses across industries to embrace digital
              transformation and thrive in the modern digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Mission ───────────────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-2 w-2 translate-x-16 translate-y-8 rounded-full bg-[#ed7f18]" />
        <div className="pointer-events-none absolute right-1/3 top-8 h-3 w-3 rounded-full bg-slate-600" />

        <div className="mx-auto grid max-w-7xl items-start gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              At Zeroteq, our mission is to deliver cutting-edge technology
              solutions that drive growth, efficiency, and innovation for our
              clients. We are committed to understanding our clients&apos; unique
              needs and challenges, and to providing tailor-made solutions that
              exceed expectations and deliver tangible results. Building a
              resilient digital infrastructure for the modern ecosystem.
            </p>
          </motion.div>

          {/* Icon grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {MISSION_ICONS.map(({ icon: Icon, label }) => (
              <motion.div key={label} whileHover={{ y: -5 }}>
                <Card className="group flex flex-col items-center gap-3 border-border/50 bg-card p-6 transition-all hover:border-[#ed7f18]/40 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ed7f18]/10 text-[#ed7f18] transition-colors group-hover:bg-[#ed7f18]/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {label}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Approach ──────────────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
              Our Approach
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              We believe in a collaborative approach to technology. By working
              closely with our clients, we gain a deep understanding of their
              businesses, enabling us to develop customized solutions that
              address their specific requirements and goals. Our team of
              experienced professionals combines technical expertise with
              industry knowledge to deliver innovative, reliable, and scalable
              solutions that empower our clients to stay ahead of the
              competition. Making digital services smarter, simpler and more
              secure.
            </p>
          </motion.div>

          {/* Icon grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {APPROACH_ICONS.map(({ icon: Icon, label }) => (
              <motion.div key={label} whileHover={{ y: -5 }}>
                <Card className="group flex flex-col items-center gap-3 border-border/50 bg-card p-6 transition-all hover:border-[#ed7f18]/40 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ed7f18]/10 text-[#ed7f18] transition-colors group-hover:bg-[#ed7f18]/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {label}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,127,24,0.05)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full border-border/50 bg-card p-6 text-center transition-all hover:border-[#ed7f18]/40 hover:shadow-xl">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#ed7f18]/10 transition-all group-hover:bg-[#ed7f18]/20 group-hover:shadow-[0_0_30px_rgba(237,127,24,0.15)]">
                    <Icon className="h-8 w-8 text-[#ed7f18]" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team Section ──────────────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet With Our Professional Team Member
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              &ldquo;Our team is our greatest asset. Comprised of talented
              professionals with diverse backgrounds and expertise, our team is
              dedicated to delivering exceptional results for our clients. Meet
              the people who make Zeroteq a success.&rdquo;
            </p>
          </motion.div>

          {/* Team placeholder cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Engineering Lead", "Product Lead", "Design Lead"].map(
              (role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group border-border/50 bg-card p-6 transition-all hover:border-[#ed7f18]/40 hover:shadow-xl">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-slate-800 to-slate-900 border border-white/10 text-2xl font-bold text-slate-500 group-hover:border-[#ed7f18]/30 transition-colors">
                      {role.charAt(0)}
                    </div>
                    <h4 className="font-semibold text-white">Team Member</h4>
                    <p className="text-sm text-[#ed7f18]">{role}</p>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Contact Form ──────────────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl p-8 sm:p-12">
              <h2 className="mb-8 text-3xl font-bold text-white">
                Send your messages
              </h2>

              <div className="space-y-5">
                {/* Row 1 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    placeholder="Enter your name"
                    className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#ed7f18]/50"
                  />
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#ed7f18]/50"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    placeholder="Enter your phone number"
                    className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#ed7f18]/50"
                  />
                  <Input
                    placeholder="Your subject"
                    className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#ed7f18]/50"
                  />
                </div>

                {/* Row 3 */}
                <Input
                  placeholder="Your website"
                  className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#ed7f18]/50"
                />

                {/* Message */}
                <Textarea
                  placeholder="Write your message"
                  rows={5}
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#ed7f18]/50 resize-none"
                />

                <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#ed7f18] text-white font-bold text-base shadow-[0_20px_50px_rgba(237,127,24,0.3)] hover:shadow-[0_25px_60px_rgba(237,127,24,0.5)] transition-all hover:-translate-y-1">
                  <Send className="mr-2 h-4 w-4 inline-block" />
                  Send Message
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── CTA — matches FooterCTA pattern ───────────────────────────── */}
      <section className="relative w-full py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(237,127,24,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto"
          >
            Ready to transform your business with Zeroteq? Contact us today to learn more about our solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#ed7f18] text-white font-bold text-lg shadow-[0_20px_50px_rgba(237,127,24,0.3)] hover:shadow-[0_25px_60px_rgba(237,127,24,0.5)] transition-all hover:-translate-y-1">
              Contact Us
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
