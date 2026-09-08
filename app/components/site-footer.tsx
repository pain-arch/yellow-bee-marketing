import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./site-footer.module.css";

export type FooterLink = { label: string; href: string };
export type FooterLinkGroup = { title: string; links: readonly FooterLink[] };
export type SocialPlatform = "facebook" | "instagram" | "linkedin" | "behance";
export type FooterSocialLink = { platform: SocialPlatform; href?: string };
export type SiteFooterProps = {
  tagline?: string;
  groups?: readonly FooterLinkGroup[];
  socials?: readonly FooterSocialLink[];
  phone?: string;
  phoneHref?: string;
  email?: string;
  location?: string;
  copyrightYear?: number;
};

export const footerGroups: readonly FooterLinkGroup[] = [
  { title: "Services", links: [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Website Design & Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Branding & Identity", href: "/services/branding-design" },
    { label: "Maintenance & Support", href: "/services/maintenance-support" },
  ] },
  { title: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ] },
  { title: "Resources", links: [
    { label: "FAQs", href: "/faqs" },
    { label: "Articles & Insights", href: "/resources" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ] },
];

const defaultSocials: readonly FooterSocialLink[] = [
  { platform: "facebook" }, { platform: "instagram" },
  { platform: "linkedin" }, { platform: "behance" },
];
const socialNames: Record<SocialPlatform, string> = {
  facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", behance: "Behance",
};

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const paths: Record<SocialPlatform, ReactNode> = {
    facebook: <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9a22 22 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4V10H8v3h2.4v8Z" fill="currentColor" stroke="none" />,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" /></>,
    linkedin: <><circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" stroke="none" /><path d="M5.5 10v10M10.5 20V10m0 4c0-5.5 7-5.5 7 0v6" strokeWidth="3" /></>,
    behance: <><path d="M3 5h4.5c4 0 4 6 0 6H3Zm0 6h5c4.5 0 4.5 7 0 7H3ZM15 6h6m-7 8h8c0-6-8-6-8 0 0 5 6 5 8 2" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">{paths[platform]}</svg>;
}

function ContactIcon({ kind }: { kind: "phone" | "email" | "location" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      {kind === "phone" && <path d="M7.1 3.5 9.6 8 7.8 9.8a14.7 14.7 0 0 0 6.4 6.4l1.8-1.8 4.5 2.5-.8 3.6c-.2.9-1 1.5-2 1.5A15.7 15.7 0 0 1 2 6.3c0-1 .6-1.8 1.5-2l3.6-.8Z" />}
      {kind === "email" && <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></>}
      {kind === "location" && <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
    </svg>
  );
}

export function SiteFooter({
  tagline = "Creative. Strategic. Results Driven.",
  groups = footerGroups,
  socials = defaultSocials,
  phone = "+44 1234 567890",
  phoneHref = "+441234567890",
  email = "hello@yellowbeemarketing.co.uk",
  location = "London, United Kingdom",
  copyrightYear = 2024,
}: SiteFooterProps) {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand} aria-label="Yellow Bee Marketing home">
              <Image src="/ybm-logo.png" alt="Yellow Bee Marketing" width={141} height={62} sizes="(max-width: 480px) 116px, (max-width: 880px) 128px, 141px" className={styles.logo} />
            </Link>
            <p className={styles.tagline}>{tagline}</p>
            <ul className={styles.socials} aria-label="Social media">
              {socials.map(({ platform, href }) => (
                <li key={platform}>
                  {href ? (
                    <a className={styles.social} href={href} aria-label={socialNames[platform]}><SocialIcon platform={platform} /></a>
                  ) : (
                    <span className={styles.social} role="img" aria-label={`${socialNames[platform]} — profile link coming soon`}><SocialIcon platform={platform} /></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title}`} className={styles.linkGroup}>
              <h2 className={styles.heading}>{group.title}</h2>
              <ul className={styles.links}>
                {group.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
              </ul>
            </nav>
          ))}
          <div className={styles.contact}>
            <h2 className={styles.heading}>Contact Us</h2>
            <address className={styles.contactDetails}>
              <a href={`tel:${phoneHref}`}><ContactIcon kind="phone" /><span>{phone}</span></a>
              <a href={`mailto:${email}`}><ContactIcon kind="email" /><span>{email}</span></a>
              <p><ContactIcon kind="location" /><span>{location}</span></p>
            </address>
          </div>
        </div>
        <p className={styles.copyright}>© {copyrightYear} Yellow Bee Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
}
