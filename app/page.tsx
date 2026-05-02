import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Capabilities } from "@/components/capabilities";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Capabilities />
      <CtaFooter />
    </main>
  );
}
