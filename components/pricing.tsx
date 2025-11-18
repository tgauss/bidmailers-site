import React from "react";
import { Button } from "./button";

const PricingCard = ({
  tier,
  price,
  unit,
  minOrder,
  isHighlighted = false,
  features,
}: {
  tier: string;
  price: string;
  unit: string;
  minOrder?: string;
  isHighlighted?: boolean;
  features: string[];
}) => {
  return (
    <div
      className={`relative rounded-[37px] flex flex-col gap-3 p-4 ${
        isHighlighted
          ? "border border-white bg-gradient-to-b from-[#3d9df7] via-[#188bf6] to-[#1273d6]"
          : "bg-[#DCDCDC]"
      }`}
    >
      <div className="space-y-8 p-4 bg-[#F5F5F5] rounded-[28px] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] pb-20 px-4">
        <div className="flex flex-col">
          <h3 className="text-[18px] w-fit font-medium text-gray-900 rounded-[9999px] border border-[#DCDCDC] bg-white flex justify-center items-center px-[14.32px] py-1">
            {tier}
          </h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-[40px] font-bold">{price}</span>
            <span className="ml-1 text-gray-500">{unit}</span>
          </div>
          {minOrder && (
            <span className="text-sm text-gray-600 mt-1">{minOrder}</span>
          )}
        </div>

        <Button className="w-full py-4 px-6 bg-gray-900 text-white text-md font-medium shadow-sm hover:bg-gray-800 transition-colors">
          Get Started
        </Button>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-[#188bf6] mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              <span className="text-[14px] text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Pricing() {
  const starterFeatures = [
    "Mobile app access",
    "Mark up to 250 properties",
    "Basic bid packet template",
    "72-hour turnaround",
    "Email support",
  ];

  const growthFeatures = [
    "Everything in Starter",
    "Mark up to 1,000 properties",
    "Custom bid packet design",
    "Priority 48-hour turnaround",
    "Neighborhood analytics",
    "ROI tracking dashboard",
    "Phone & email support",
  ];

  const scaleFeatures = [
    "Everything in Growth",
    "Unlimited properties",
    "Multiple team members",
    "24-hour rush turnaround",
    "Advanced analytics & reporting",
    "Dedicated account manager",
  ];

  return (
    <div id="pricing" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Simple, Volume-Based Pricing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No hidden fees. No contracts. Just straightforward per-mailer pricing
          that scales with your business. The more you send, the less you pay.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 items-center">
        <PricingCard
          tier="Starter"
          price="$4.50"
          unit="/mailer"
          minOrder="Min. 100 mailers"
          features={starterFeatures}
        />
        <PricingCard
          tier="Growth"
          price="$4.00"
          unit="/mailer"
          minOrder="Min. 250 mailers"
          features={growthFeatures}
          isHighlighted
        />
        <PricingCard
          tier="Scale"
          price="$2.75"
          unit="/mailer"
          minOrder="Min. 2,000 mailers/month"
          features={scaleFeatures}
        />
      </div>
    </div>
  );
}
