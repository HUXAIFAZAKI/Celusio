"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerChildren } from "@/lib/animations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { features } from "@/data/features";
import { pricingPlans } from "@/data/pricing";
import { stats } from "@/data/stats";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import dynamic from "next/dynamic";
import { useState } from "react";

const TestimonialsSection = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <p>Loading testimonials...</p>,
});

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

export default function Page() {
  const [isAnnual, setIsAnnual] = useState(true);
  console.log(stats);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 items-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div className="space-y-8" variants={fadeIn}>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                Tell a better brand story
              </h1>
              <p className="text-lg text-gray-600">
                Elevate your brand's digital footprint with our integrated
                marketing solutions that deliver measurable results.
              </p>
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[500px]"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0">
                {/* <Image
                  src="/hero-image.png" 
                  alt="Hero Image"
                  fill
                  className="object-contain"
                  priority
                /> */}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Partners Section */}
        <section className="border-y bg-gray-50/50">
          <div className="container py-12">
            <div className="flex justify-between items-center gap-8 opacity-70">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Image
                    key={i}
                    src={`/partner-logo-${i + 1}.png`}
                    alt={`Partner ${i + 1}`}
                    width={120}
                    height={40}
                    loading="lazy"
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-24">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">What We Offer?</h2>
            <p className="text-gray-600">
              A unified space through communication platforms, enabling smart
              brand marketing.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section className="container py-24">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Plans Scale with Your Business
            </h2>
            <p className="text-gray-600">
              Choose the right plan for your growth.
            </p>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setIsAnnual(!isAnnual)}
                variant={isAnnual ? "default" : "outline"}
              >
                {isAnnual ? "Annual" : "Monthly"}
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeIn}>
                <PricingCard
                  plan={plan}
                  className={plan.recommended ? "border-2 border-primary" : ""}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Stats Section */}
        <div className="bg-[#F8F3FF]">
          <section className="container py-10">
            <motion.div
              className="grid md:grid-cols-3 gap-8 text-center"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="text-4xl font-bold mb-2">
                    {typeof window !== "undefined" ? (
                      <CountUp end={stat.value} duration={2} separator="," />
                    ) : (
                      stat.value
                    )}
                    {stat.label === "Happy Customers" && "%"}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="bg-[url('/cta-bg.jpg')] bg-cover bg-center py-24">
            <div className="container text-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Want to Start a Project With Us?
                </h2>
                <p className="text-gray-600 mb-8">
                  Let’s build something amazing together.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
