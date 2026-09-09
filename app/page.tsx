import { HomeHero } from "./components/home-hero";
import { SiteHeader } from "./components/site-header";
import { ServicesSection } from "./components/services-section";
import { SelectedWork } from "./components/selected-work";
import { TrustedClients } from "./components/trusted-clients";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <TrustedClients />
        <ServicesSection />
        <SelectedWork />
      </main>
      <SiteFooter />
    </>
  );
}
