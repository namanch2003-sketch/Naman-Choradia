"use client";

import HeroSection from "@/components/home/HeroSection";
import DashboardSection from "@/components/home/DashboardSection";
import FeaturedWritings from "@/components/home/FeaturedWritings";
import NumbersSection from "@/components/home/NumbersSection";
import QuoteSection from "@/components/home/QuoteSection";
import AILabSection from "@/components/home/AILabSection";
import TimelineSection from "@/components/home/TimelineSection";
import JournalSection from "@/components/home/JournalSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <DashboardSection />
      <FeaturedWritings />
      <NumbersSection />
      <QuoteSection />
      <AILabSection />
      <TimelineSection />
      <JournalSection />
      <NewsletterSection />
    </>
  );
}
