import { HomeHero } from "./components/home-hero";
import { SiteHeader } from "./components/site-header";
import { TrustedClients } from "./components/trusted-clients";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <TrustedClients />
      </main>
    </>
  );
}
