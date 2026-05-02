import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Capabilities } from "@/components/capabilities";
import { Cta } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Capabilities />
      <Cta />
    </>
  );
}
