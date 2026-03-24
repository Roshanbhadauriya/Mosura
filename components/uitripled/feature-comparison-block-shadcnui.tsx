"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Crown, Rocket, Sparkles, Star, X, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Developer",
    popular: false,
    price: "$0",
    period: "/month",
    description: "Perfect for exploring Mosura",
    icon: Rocket,
    gradient: "from-slate-500/10 via-slate-500/5 to-transparent",
    iconColor: "text-slate-500",
    features: ["Up to 1M Requests", "Basic Edge Caching", "Community Support"],
  },
  {
    name: "Production",
    popular: true,
    price: "$49",
    period: "/month",
    description: "Most popular for scaling AI apps",
    icon: Star,
    gradient: "from-(--primary-color)/20 via-(--primary-color)/10 to-transparent",
    iconColor: "text-(--primary-color)",
    features: [
      "Up to 50M Requests",
      "Semantic Caching",
      "LLM Load Balancing",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    popular: false,
    price: "Custom",
    period: "",
    description: "For mission-critical infrastructure",
    icon: Crown,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-purple-500",
    features: [
      "Unlimited Requests",
      "Custom Origin Models",
      "Dedicated Manager",
      "SLA Support",
    ],
  },
];

const features = [
  {
    category: "Core Gateway",
    items: [
      { name: "Edge Routing", free: true, pro: true, enterprise: true },
      { name: "Rate Limiting", free: true, pro: true, enterprise: true },
      { name: "Semantic Caching", free: false, pro: true, enterprise: true },
      { name: "Custom WAF Rules", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "AI Integration",
    items: [
      { name: "Prompt Observability", free: true, pro: true, enterprise: true },
      { name: "Model Fallbacks", free: false, pro: true, enterprise: true },
      {
        name: "Bring Your Own LLM",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Limits",
    items: [
      { name: "Monthly Requests", free: true, pro: false, enterprise: false },
      { name: "Unlimited Requests", free: false, pro: true, enterprise: true },
      { name: "Support Level", free: false, pro: true, enterprise: true },
      { name: "Dedicated Manager", free: false, pro: false, enterprise: true },
    ],
  },
];

export function FeatureComparisonBlock() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4" variant="secondary">
            <Zap className="mr-1 h-3 w-3" />
            Compare Plans
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Choose the right plan for you
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Compare features across all our plans and find the perfect fit for
            your needs
          </p>
        </motion.div>

        {/* Pricing Cards - No horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 space-y-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isHovered = hoveredPlan === index;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onHoverStart={() => setHoveredPlan(index)}
                  onHoverEnd={() => setHoveredPlan(null)}
                  className="relative"
                >
                  {/* Popular badge glow effect */}
                  {plan.popular && (
                    <motion.div
                      className="absolute -inset-1 rounded-2xl bg-linear-to-r from-(--primary-color) via-(--primary-color)/50 to-(--primary-color) opacity-20 blur-xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.02, 1],
                      }}

                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <Card
                    className={`group relative overflow-hidden border-border/50 bg-linear-to-br from-card via-card to-card/80 backdrop-blur-sm transition-all duration-500 ${
                      plan.popular
                        ? "border-(--primary-color)/50 shadow-2xl shadow-(--primary-color)/10"
                        : "hover:border-(--primary-color)/30 hover:shadow-xl"
                    } ${isHovered && !plan.popular ? "scale-[1.02]" : ""} ${
                      plan.popular ? "scale-[1.05] lg:scale-110" : ""
                    }`}
                  >
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${plan.gradient} opacity-0 transition-opacity duration-500`}
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    />

                    {/* Shimmer effect */}
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}

                    {/* Popular badge */}
                    {plan.popular && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                        }}
                        className="absolute -right-1 -top-1"
                      >
                        <Badge className="gap-1 rounded-bl-lg rounded-tr-xl border-(--primary-color)/20 bg-(--primary-color) text-black px-3 py-1 shadow-lg font-bold">
                          <Sparkles className="h-3 w-3" />
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}

                    <div className="relative z-10 p-6 md:p-8">
                      {/* Icon */}
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`rounded-2xl bg-linear-to-br ${plan.gradient} p-3 shadow-lg`}
                        >
                          <Icon className={`h-8 w-8 ${plan.iconColor}`} />
                        </div>
                      </motion.div>

                      {/* Plan name and description */}
                      <div className="mb-6 text-center">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="mb-6 text-center">
                        <motion.div
                          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-5xl font-bold tracking-tight">
                            {plan.price}
                          </span>
                          <span className="ml-1 text-base text-muted-foreground">
                            {plan.period}
                          </span>
                        </motion.div>
                      </div>

                      {/* Features list */}
                      <motion.ul className="mb-6 space-y-3">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check
                                className={`mt-0.5 h-5 w-5 shrink-0 ${plan.iconColor}`}
                              />
                            </motion.div>
                            <span className="text-sm text-foreground/90">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* CTA Button */}
                      <Button
                        className={`group relative w-full overflow-hidden ${
                          plan.popular ? "shadow-lg shadow-primary/20" : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        <motion.span
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                          animate={
                            isHovered
                              ? { x: ["-200%", "200%"] }
                              : { x: "-200%" }
                          }
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="relative">
                          {plan.popular ? "Get Started Now" : "Choose Plan"}
                        </span>
                        <motion.span
                          className="relative ml-2"
                          animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                          transition={{
                            duration: 0.5,
                            repeat: isHovered ? Infinity : 0,
                          }}
                        >
                          →
                        </motion.span>
                      </Button>

                      {/* Popular plan extra info */}
                      {plan.popular && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="mt-3 text-center text-xs text-muted-foreground"
                        >
                          ✨ Best value for money
                        </motion.p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Feature Comparison Table - Horizontal scroll only for table */}
        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-w-[640px]"
          >
            <div className="space-y-6">
              {features.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * categoryIndex }}
                >
                  <h4 className="mb-4 text-lg font-semibold">
                    {category.category}
                  </h4>
                  <Card className="overflow-hidden border-border">
                    {category.items.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 * featureIndex }}
                        className={`grid grid-cols-4 gap-4 border-b border-border p-4 last:border-b-0 ${
                          featureIndex % 2 === 0 ? "bg-muted/30" : ""
                        }`}
                      >
                        <div className="col-span-1 flex items-center">
                          <span className="text-sm font-medium">
                            {feature.name}
                          </span>
                        </div>

                        {/* Free */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {feature.free ? (
                              <Check className="h-5 w-5 text-(--primary-color)" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/30" />
                            )}
                          </motion.div>
                        </div>

                        {/* Pro */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {feature.pro ? (
                              <Check className="h-5 w-5 text-(--primary-color)" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/30" />
                            )}
                          </motion.div>
                        </div>

                        {/* Enterprise */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {feature.enterprise ? (
                              <Check className="h-5 w-5 text-(--primary-color)" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/30" />
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="mb-4 text-sm text-muted-foreground">
                Need a custom plan?
              </p>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
