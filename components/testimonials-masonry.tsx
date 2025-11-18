"use client";

import { cn } from "@/lib/utils";
import { FaQuoteLeft } from "react-icons/fa";

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="py-20">
      <h2
        id="reviews-title"
        className={cn(
          "text-3xl font-medium tracking-tight text-neutral-900 sm:text-center dark:text-white",
        )}
      >
        Trusted by Roofing Contractors Nationwide
      </h2>
      <p
        className={cn(
          "mt-2 text-lg text-neutral-600 sm:text-center dark:text-neutral-200",
        )}
      >
        Here&apos;s what contractors are saying about Bid Mailers changing their business.
      </p>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-4 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {grid.map((testimonialsCol, index) => (
          <div
            key={`testimonials-col-${index}`}
            className="grid items-start gap-4"
          >
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="mt-8 flex items-center gap-2">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription>{testimonial.name}</QuoteDescription>
                    <QuoteDescription className="text-[10px]">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-transparent bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        className,
      )}
    >
      <FaQuoteLeft className="absolute top-2 left-2 text-neutral-300" />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "relative py-2 text-base font-normal text-black dark:text-white",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "max-w-sm text-xs font-normal text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike Rodriguez",
    quote:
      "Bid Mailers completely changed how I get customers. I used to spend $2000/month on shared leads. Now I mark 300 homes on Saturday morning and have 10-15 calls by Wednesday.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Rodriguez Roofing, Phoenix AZ",
  },
  {
    name: "Tom Williams",
    quote: "First campaign: 250 mailers, 8 jobs booked. That&apos;s a 3.2% conversion rate. My digital ads barely hit 0.5%.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Premier Roof Co, Dallas TX",
  },
  {
    name: "Sarah Johnson",
    quote:
      "As a female contractor, I love that homeowners call ME. No more competing with 5 other roofers at their door. Game changer.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Johnson Exteriors, Atlanta GA",
  },
  {
    name: "David Chen",
    quote: "The ROI tracking is incredible. I know exactly which neighborhoods convert best. North side: 5.1%, South side: 2.2%. Now I only mark the winners.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Chen Roofing Solutions, Seattle WA",
  },
  {
    name: "Carlos Martinez",
    quote: "72-hour turnaround is no joke. Marked homes Monday after the hailstorm, estimates in mailboxes Thursday. Signed 6 contracts that week.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Martinez Brothers, Denver CO",
  },
  {
    name: "Bill Thompson",
    quote:
      "Been roofing 20 years. This is the first marketing that actually makes sense. I see the roof, I price it, homeowner gets MY price. Simple.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Thompson Roofing, Nashville TN",
  },
  {
    name: "Mark Anderson",
    quote:
      "My son marks properties while I&apos;m doing installs. By the time I&apos;m done with a job, I have 5 new estimates waiting. It&apos;s like printing money.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Anderson & Son Roofing, Chicago IL",
  },
  {
    name: "Robert Davis",
    quote:
      "$76 per customer acquisition vs $340 with Google Ads. Do the math. I cancelled all my digital marketing.",
    src: "https://i.pravatar.cc/150?img=15",
    designation: "Davis Roofing Group, Houston TX",
  },
  {
    name: "Jessica Lee",
    quote:
      "The custom bid packets are professional AF. Homeowners tell me it&apos;s the most detailed estimate they&apos;ve ever received. Close rate went from 15% to 31%.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Lee Construction, Portland OR",
  },
  {
    name: "Steve Miller",
    quote:
      "I work storm damage. Speed matters. While everyone else is knocking doors, my estimates are already in mailboxes. First one wins.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "StormGuard Roofing, Orlando FL",
  },
  {
    name: "Paul Wilson",
    quote:
      "Started with 100 mailers to test. Now sending 2000/month. Hired 3 crews just to handle the volume. Best problem I&apos;ve ever had.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Wilson Roofing Inc, Detroit MI",
  },
  {
    name: "Tony Russo",
    quote:
      "No more driving 45 minutes for a lead that 4 other guys are bidding. I mark my own neighborhood, get local jobs, home by 5.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Russo Roofing, Boston MA",
  },
];