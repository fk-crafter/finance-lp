import { TestimonialProps } from "@/types";

export const testimonials: TestimonialProps[] = [
  {
    name: "Leslie Alexander",
    role: "Community",
    message:
      "This finance tool has transformed the way I manage my budget. Highly recommend it to anyone!",
    rating: 5,
    avatar: "/img/1.jpg",
  },
  {
    name: "Dianne Russell",
    role: "Finance Enthusiast",
    message:
      "An amazing tool for anyone looking to gain control over their finances with ease.",
    rating: 5,
    avatar: "/img/2.jpg",
  },
  {
    name: "Darrell Steward",
    role: "Investor",
    message:
      "Making investments has never been easier. Love the insights and analytics provided!",
    rating: 5,
    avatar: "/img/3.jpg",
  },
  {
    name: "Kathryn Murphy",
    role: "Budget Analyst",
    message:
      "This tool helps me stay on top of my finances without any hassle. A must-have for everyone.",
    rating: 4,
    avatar: "/img/4.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Finance Coach",
    message:
      "I recommend this tool to all my clients. It’s intuitive, efficient, and provides amazing insights!",
    rating: 5,
    avatar: "/img/5.jpg",
  },
  {
    name: "Kristin Watson",
    role: "Wealth Manager",
    message:
      "The best tool I've used for tracking expenses and managing client portfolios effectively.",
    rating: 5,
    avatar: "/img/6.jpg",
  },
];

export const pricingFeatures = {
  silver: [
    "No discount",
    "Basic support",
    "Ads banner free",
    "Design style",
    "Component library",
    "Limited links",
    "Dedicated analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users",
  ],
  gold: [
    "No discount",
    "Basic support",
    "Ads banner free",
    "Design style",
    "Component library",
    "Limited links",
    "Dedicated analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users",
  ],
  premium: [
    "No discount",
    "Basic support",
    "Ads banner free",
    "Design style",
    "Component library",
    "Limited links",
    "Dedicated analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users",
  ],
};

export const pricing = {
  monthly: {
    silver: "$10",
    gold: "$20",
    premium: "$30",
  },
  yearly: {
    silver: { price: "$99", original: "$120" },
    gold: { price: "$199", original: "$240" },
    premium: { price: "$299", original: "$360" },
  },
};
