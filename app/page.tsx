"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, Shield, Zap, Box, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8">
            {/* <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design.jpg-vSVR5IySRXNFYp4hEFjXnsXzqGHfDM.jpeg"
//               alt="Logo"
//               width={32}
//               height={32}
//               className="rounded"
//             /> */}
          </div>
          <span className="text-xl font-semibold">Celusio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary">
            About Us
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Contact Us
          </a>
        </nav>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          Get Started
        </Button>
      </header>

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
                marketing solutions that deliver measurable results
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
              <Image
                src="/placeholder.svg"
                alt="Partner 1"
                width={120}
                height={40}
              />
              <Image
                src="/placeholder.svg"
                alt="Partner 2"
                width={120}
                height={40}
              />
              <Image
                src="/placeholder.svg"
                alt="Partner 3"
                width={120}
                height={40}
              />
              <Image
                src="/placeholder.svg"
                alt="Partner 4"
                width={120}
                height={40}
              />
              <Image
                src="/placeholder.svg"
                alt="Partner 5"
                width={120}
                height={40}
              />
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
            <h2 className="text-3xl font-bold mb-4">What we Offer?</h2>
            <p className="text-gray-600">
              A unified space through communication platforms. Enable realtime
              that smart brand marketing geographics live.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Community Support",
                description:
                  "24/7 real-time support for all your marketing needs",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Security First",
                description:
                  "Enterprise-grade security protocols and data protection",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "24/7 Expert Support",
                description:
                  "Round-the-clock assistance from our marketing experts",
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "NPS Tracking",
                description: "Monitor and improve customer satisfaction scores",
              },
              {
                icon: <Box className="h-6 w-6" />,
                title: "Fully Integrated",
                description: "Seamless integration with your existing tools",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Monthly Updates",
                description:
                  "Regular feature updates and performance improvements",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
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
            <h2 className="text-3xl font-bold mb-4">
              Our plans scale with your product
            </h2>
            <p className="text-gray-600">
              A unified space through communication platforms
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "For Starter",
                price: "$59",
                features: [
                  "Analytics Dashboard",
                  "Feature Integration",
                  "Customer Support",
                  "Marketing Templates",
                ],
              },
              {
                title: "For Teams",
                price: "$99",
                features: [
                  "Advanced Analytics",
                  "Priority Support",
                  "Custom Integration",
                  "Marketing Automation",
                ],
                featured: true,
              },
              {
                title: "For Company",
                price: "Custom",
                features: [
                  "Enterprise Features",
                  "Dedicated Support",
                  "Custom Development",
                  "SLA Agreement",
                ],
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card
                  className={`p-8 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                      : ""
                  } hover:shadow-xl transition-shadow duration-300`}
                >
                  <h3 className="font-semibold mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold mb-4">{plan.price}</div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.featured
                        ? "bg-white text-primary hover:bg-white/90"
                        : ""
                    }`}
                    variant={plan.featured ? "secondary" : "default"}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="container py-24">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { value: "25,356", label: "Projects Done" },
              { value: "1M+", label: "Projects Done" },
              { value: "95%", label: "Happy Customers" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container py-24">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">
              Want to start a Project With us?
            </h2>
            <p className="text-gray-600 mb-8">
              Elevate your project growth limited contact in region to.
              Supported our seamless behavior determine available in catalogue.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8">
                {/* <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design.jpg-vSVR5IySRXNFYp4hEFjXnsXzqGHfDM.jpeg"
//                   alt="Logo"
//                   width={32}
//                   height={32}
//                   className="rounded"
//                 /> */}
              </div>
              <span className="text-xl font-semibold">Celusio</span>
            </div>
            <nav className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
