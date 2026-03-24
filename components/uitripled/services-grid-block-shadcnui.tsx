"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Zap,
  Workflow,
  BarChart3,
  Code,
  Palette,
  Rocket,
  Settings,
  Users,
} from "lucide-react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";

const ICON_MAP: Record<string, any> = {
  Brain,
  Shield,
  Zap,
  Workflow,
  BarChart3,
  Code,
  Palette,
  Rocket,
  Settings,
  Users,
};

export function ServicesGridBlock() {
  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ed7f18] font-boldtracking-[0.3em] text-sm"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase"
          >
            {HOMEPAGE_CONTENT.services_header?.title || "Complete Solutions for Your Business"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg mt-4"
          >
            {HOMEPAGE_CONTENT.services_header?.description || "Everything you need to build, launch, and scale your digital products with confidence"}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6">
          {(HOMEPAGE_CONTENT.services || []).map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Settings;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-xl md:p-6">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 ${service.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className={`w-fit rounded-xl ${service.bgColor} p-3`}
                      >
                        <Icon
                          className={`h-6 w-6 ${service.iconColor} md:h-7 md:w-7`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-4 space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className={`h-1 w-1 rounded-full bg-primary`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn w-full text-xs md:text-sm"
                    >
                      Learn More
                      <span
                        className="ml-2 inline-block transition-transform group-hover/btn:translate-x-1"
                      >
                        →
                      </span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Need a custom solution?
          </p>
          <Button size="lg">Contact Our Team</Button>
        </motion.div>
      </div>
    </section>
  );
}
