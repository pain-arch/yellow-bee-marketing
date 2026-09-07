import { HomeHero } from "./components/home-hero";
import { SiteHeader } from "./components/site-header";
import { ServicesSection } from "./components/services-section";
import { TrustedClients } from "./components/trusted-clients";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <TrustedClients />
        <ServicesSection />
      </main>
    </>
  );
}
