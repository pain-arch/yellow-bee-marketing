import Image, { type StaticImageData } from "next/image";
import styles from "./trusted-clients.module.css";

export type ClientLogo = {
  name: string;
  src: string | StaticImageData;
  width: number;
  height: number;
  scale?: "compact" | "standard" | "wide";
};

export type TrustedClientsProps = {
  heading?: string;
  clients?: readonly ClientLogo[];
};

export const yellowBeeClients: readonly ClientLogo[] = [
  { name: "Career Developers Limited", src: "/clients/CDL web logo.png", width: 788, height: 234, scale: "wide" },
  { name: "Easy Caring", src: "/clients/Easy Caring Logo.png", width: 7134, height: 1754, scale: "wide" },
  { name: "Fast Track", src: "/clients/fast logo.png", width: 609, height: 158, scale: "wide" },
  { name: "Gulshan", src: "/clients/Gulshan logo.png", width: 638, height: 143, scale: "wide" },
  { name: "Home Haven Childcare", src: "/clients/Home-Haven-Logo.webp", width: 771, height: 234, scale: "wide" },
  { name: "NXTGEN Education", src: "/clients/NXTGEN-logo.png", width: 1496, height: 562, scale: "standard" },
  { name: "Sia Abayas", src: "/clients/sia-abayas-logo.png", width: 300, height: 96, scale: "standard" },
  { name: "Smart Reach Solutions", src: "/clients/smart-reach-logo.png", width: 1200, height: 217, scale: "wide" },
  { name: "Wonder Watchers", src: "/clients/wonder-logo.png", width: 526, height: 218, scale: "compact" },
  { name: "Wonder Whizz Kids", src: "/clients/WWK-logo.png", width: 300, height: 52, scale: "wide" },
];

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 2.8c2.1 1.8 4.5 2.8 7.2 3v5.5c0 4.8-2.8 8.2-7.2 10-4.4-1.8-7.2-5.2-7.2-10V5.8c2.7-.2 5.1-1.2 7.2-3Z" />
      <path d="m8.7 11.8 2.1 2.1 4.5-4.6" />
    </svg>
  );
}

function LogoGroup({ clients, duplicate = false }: { clients: readonly ClientLogo[]; duplicate?: boolean }) {
  return (
    <ul className={`${styles.logoGroup} ${duplicate ? styles.duplicate : ""}`} aria-hidden={duplicate || undefined}>
      {clients.map((client) => (
        <li className={styles.logoItem} data-scale={client.scale ?? "standard"} key={client.name}>
          <Image
            className={styles.logo}
            src={client.src}
            alt={duplicate ? "" : client.name}
            width={client.width}
            height={client.height}
            sizes="(max-width: 430px) 120px, (max-width: 834px) 140px, (max-width: 1280px) 150px, 170px"
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustedClients({
  heading = "Trusted by ambitious brands and fast-growing companies.",
  clients = yellowBeeClients,
}: TrustedClientsProps) {
  return (
    <section className={styles.section} id="trusted-clients" aria-labelledby="trusted-clients-heading">
      <div className={styles.panel}>
        <div className={styles.intro}>
          <span className={styles.icon}>
            <ShieldIcon />
          </span>
          <h2 id="trusted-clients-heading">{heading}</h2>
        </div>

        <div className={styles.marquee} role="region" aria-label="Trusted client logos">
          <div className={styles.track}>
            <LogoGroup clients={clients} />
            <LogoGroup clients={clients} duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
