"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Mosura12.png";

import { FOOTER_CONTENT, SOCIAL_ICONS } from "@/constants/footer";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative w-full overflow-hidden border-t border-white/10 bg-black"
    >
      {/* Ambient glow effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ed7f18]/15 blur-[160px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[#ed7f18]/10 blur-[200px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.15, 0.35, 0.15], rotate: [0, 25, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 16, repeat: Infinity, ease: "linear" }
          }
        />
      </div>

      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="mb-4 inline-flex items-center gap-3"
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Mosura"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <Badge
                variant="outline"
                className="border-[#ed7f18]/40 text-xs text-[#ed7f18]"
              >
                {FOOTER_CONTENT.brand.badge}
              </Badge>
            </motion.div>
            <p className="mb-4 max-w-md text-sm text-slate-400">
              {FOOTER_CONTENT.brand.description}
            </p>

            {/* Newsletter */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-white">
                {FOOTER_CONTENT.newsletter.title}
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={FOOTER_CONTENT.newsletter.placeholder}
                  className="h-10 rounded-xl border-white/10 bg-white/5 text-white backdrop-blur placeholder:text-slate-500"
                />
                <Button
                  size="sm"
                  className="h-10 rounded-xl border border-[#ed7f18]/30 bg-[#ed7f18] px-4 text-white shadow-[0_12px_35px_-20px_rgba(237,127,24,0.5)] hover:bg-[#ed7f18]/90"
                  aria-label="Subscribe"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-slate-400">
              <motion.a
                href={`mailto:${FOOTER_CONTENT.contact.email}`}
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-2 hover:text-[#ed7f18] transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden />
                <span>{FOOTER_CONTENT.contact.email}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {FOOTER_CONTENT.links.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { x: 5 }
                      }
                    >
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-[#ed7f18]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-10 h-px bg-white/10"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-2"
          >
            {FOOTER_CONTENT.socials.map((social, index) => {
              const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
              return (
                <motion.div
                  key={social.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.6 + index * 0.05,
                  }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-[#ed7f18]/10 hover:text-[#ed7f18]"
                    aria-label={social.label}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        transition={{ duration: shouldReduceMotion ? 0.25 : 0.3 }}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </motion.div>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-sm text-slate-400"
          >
            <span>© {new Date().getFullYear()} {FOOTER_CONTENT.copyright}</span>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-white/10 bg-white/5 text-slate-400 hover:text-[#ed7f18] hover:border-[#ed7f18]/30"
              onClick={scrollToTop}
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { repeat: Infinity, duration: 1.5 }
                }
              >
                <ArrowUp className="h-4 w-4" aria-hidden />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
