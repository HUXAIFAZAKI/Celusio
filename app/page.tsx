"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerChildren } from "@/lib/animations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/Testimonials";
import { features } from "@/data/features";
import { pricingPlans } from "@/data/pricing";
import { stats } from "@/data/stats";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";

export default function Page() {
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
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[500px]"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg"
                  alt="Analytics Dashboard"
                  fill
                  className="object-contain"
                />
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
                    src="/placeholder.svg"
                    alt={`Partner ${i + 1}`}
                    width={120}
                    height={40}
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
              <motion.div key={index} variants={fadeIn}>
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
                <PricingCard plan={plan} />
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
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="container py-10">
            <motion.div
              className="text-center"
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
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
