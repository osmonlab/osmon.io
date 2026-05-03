import { Hero } from "@/components/hero";
import { Tension } from "@/components/tension";
import { Demo } from "@/components/demo";
import { Proof } from "@/components/proof";
import { Process } from "@/components/process";
import { Manifesto } from "@/components/manifesto";
import { LatestJournal } from "@/components/latest-journal";
import { Cta } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Tension />
      <Demo />
      <Proof />
      <Process />
      <Manifesto />
      <LatestJournal />
      <Cta />
    </>
  );
}
