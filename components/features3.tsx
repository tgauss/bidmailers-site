"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Message type definition
type Message = {
  role: "assistant" | "user";
  content: string;
};

// Card type definition
type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
  gradient: string;
};

// Reusable components
const GradientTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-4">{children}</h2>
);

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F9FAFB] rounded-[18px] p-4 border border-[#E1E1E1] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)] flex flex-col gap-4">
    {children}
  </div>
);

const ContentBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "space-y-4 rounded-xl p-4 border border-[#E1E1E1] bg-white min-h-[280px]",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="px-2">
    <motion.h3
      whileHover={{ scale: 1.02 }}
      className="text-lg font-bold mb-2"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-gray-500 text-sm leading-relaxed"
    >
      {description}
    </motion.p>
  </div>
);

// Mobile App Section Component
const MobileAppSection = () => {
  const features = [
    {
      icon: "📍",
      title: "Mark Properties",
      description: "Walk or drive any neighborhood and mark homes",
    },
    {
      icon: "📷",
      title: "Upload Photos",
      description: "Take photos of roof damage from the street",
    },
    {
      icon: "💰",
      title: "Set Your Price",
      description: "Enter your estimate for each property",
    },
  ];

  return (
    <SectionWrapper>
      <ContentBox className="flex flex-col">
        <div className="space-y-4 flex-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all"
            >
              <div className="text-xl">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-auto border border-gray-200 rounded-lg p-3 bg-gradient-to-r from-[#188bf6] to-[#3d9df7] text-white"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-medium">Properties Marked Today</p>
              <p className="text-xl font-bold">247</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-90">Estimated Revenue</p>
              <p className="text-base font-semibold">$988</p>
            </div>
          </div>
        </motion.div>
      </ContentBox>

      <SectionTitle
        title="Simple Mobile App"
        description="Mark properties in seconds. Upload photos. Set your price. We handle everything else."
      />
    </SectionWrapper>
  );
};

// Mailing Process Section Component
const MailingProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Data Processing",
      description: "Your marked properties are processed",
      icon: "⚙️",
      time: "< 1 hour",
    },
    {
      id: 2,
      title: "Print & Package",
      description: "Professional estimates printed",
      icon: "🖨️",
      time: "24 hours",
    },
    {
      id: 3,
      title: "Mail Delivery",
      description: "USPS delivers to homeowners",
      icon: "📬",
      time: "48-72 hours",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="mb-6 text-center">
          <h2 className="text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#188bf6] to-[#1273d6]">
            72 Hour Turnaround
          </h2>
          <p className="text-gray-500 text-sm">From mark to mailbox</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`p-4 rounded-lg border transition-all ${
                index === activeStep
                  ? "border-[#188bf6] bg-gradient-to-r from-[#f0f8ff] to-white"
                  : "border-gray-200 bg-white"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: index === activeStep ? 1.02 : 1,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{step.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className={`font-semibold text-sm ${
                        index === activeStep ? "text-[#188bf6]" : "text-gray-700"
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      index === activeStep
                        ? "bg-[#188bf6] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentBox>

      <SectionTitle
        title="We Handle Everything"
        description="From data processing to printing to mailing - you just mark the homes."
      />
    </SectionWrapper>
  );
};

// ROI Tracking Section Component
const ROITrackingSection = () => {
  const metrics = [
    { label: "Avg Response Rate", value: "5.2%", trend: "+12%" },
    { label: "Cost Per Lead", value: "$76", trend: "-34%" },
    { label: "Close Rate", value: "23%", trend: "+8%" },
    { label: "ROI", value: "412%", trend: "+56%" },
  ];

  return (
    <SectionWrapper>
      <ContentBox className="overflow-hidden">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-gray-800">Campaign Performance</h3>
          <p className="text-xs text-gray-500">Last 30 days</p>
        </div>

        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg p-2 border border-gray-100"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-800">{metric.value}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${
                    metric.trend.startsWith('+')
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-3 p-2.5 rounded-lg bg-gradient-to-r from-[#188bf6] to-[#3d9df7] text-white"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs opacity-90">Total Revenue Generated</p>
              <p className="text-lg font-bold">$47,280</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 5l-5 5M5 5l5 5" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </ContentBox>

      <SectionTitle
        title="Track Your Success"
        description="Real-time analytics showing exactly how your mailings perform and your ROI."
      />
    </SectionWrapper>
  );
};

// Main Features3 component
const Features3 = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GradientTitle>
            Your Complete <span className="text-[#188bf6]">Workflow</span>
          </GradientTitle>
          <p className="text-gray-600">
            From marking properties to tracking ROI - everything you need
            to run successful direct mail campaigns at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MobileAppSection />
          <MailingProcessSection />
          <ROITrackingSection />
        </div>
      </div>
    </section>
  );
};

export default Features3;
