import { Different } from "@/components/Different";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { Section } from "@/components/Section";
import { WhoFor } from "@/components/WhoFor";
import { earlyAccess } from "@/lib/copy";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Different />
      <WhoFor />
      <Section id="early-access" kicker={earlyAccess.kicker} title={earlyAccess.title} intro={earlyAccess.intro} tone="wash">
        <div className="relative max-w-3xl">
          <EarlyAccessForm />
        </div>
      </Section>
    </>
  );
}
