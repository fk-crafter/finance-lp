export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface AnalysisProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TiltCardProps {
  children: React.ReactNode;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  rating: number;
  avatar: string;
}

export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  originalPrice?: string;
}
