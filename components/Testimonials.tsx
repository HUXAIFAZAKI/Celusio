"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [filteredTestimonials, setFilteredTestimonials] =
    useState(testimonials);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      if (window.innerWidth < 768) {
        setFilteredTestimonials(testimonials.slice(0, 3));
      } else {
        setFilteredTestimonials(testimonials);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= filteredTestimonials.length
        ? 0
        : prevIndex + itemsPerPage
    );
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? (totalPages - 1) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  }

  function getItemsPerPage() {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 768) return 3;
    return 1;
  }

  const currentTestimonials = filteredTestimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say About Us
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
            Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations.
          </p>
        </div>
        <div className="relative mt-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-purple-100"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonials</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-purple-100"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonials</span>
              </Button>
            </div>
            <div className="flex gap-2 mt-4">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? "bg-purple-600"
                      : "bg-purple-200"
                  }`}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    content:
      "The team's innovative approach to problem-solving and their attention to detail exceeded our expectations.",
    name: "Andrew Chris",
    title: "Client from Uganda",
  },
  {
    content:
      "Working with this team has been a game-changer for our business. Their expertise and dedication to quality are unmatched.",
    name: "Chris Evans",
    title: "TechSolutions Inc.",
  },
  {
    content:
      "Outstanding service and exceptional results. The team's communication and project management skills made the process smooth.",
    name: "Sarah Chen",
    title: "Innovation Labs",
  },
  {
    content:
      "Their ability to understand our requirements and translate them into practical solutions was impressive.",
    name: "Michael Rodriguez",
    title: "Digital Ventures",
  },
  {
    content:
      "The level of creativity and technical expertise demonstrated by the team was remarkable.",
    name: "Emma Thompson",
    title: "Creative Studios",
  },
  {
    content:
      "A fantastic experience from start to finish. The team's proactive approach helped us stay ahead of the competition.",
    name: "David Kim",
    title: "Future Systems",
  },
  {
    content:
      "Exceptional service delivery and outstanding technical knowledge. They turned our complex requirements into elegant solutions.",
    name: "Lisa Anderson",
    title: "Tech Innovators",
  },
  {
    content:
      "The team's dedication to excellence and their ability to meet deadlines consistently made them an invaluable partner.",
    name: "James Wilson",
    title: "Global Solutions",
  },
  {
    content:
      "Their innovative thinking and commitment to quality resulted in deliverables that exceeded our expectations.",
    name: "Rachel Martinez",
    title: "NextGen Corp",
  },
];
