import Image from "next/image";
import Link from "next/link";
import styles from "./site-header.module.css";

export type HeaderNavItem = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

export type SiteHeaderProps = {
  navigation?: readonly HeaderNavItem[];
  phoneDisplay?: string;
  phoneHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultNavigation: readonly HeaderNavItem[] = [
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources", hasMenu: true },
  { label: "Pricing", href: "/pricing" },
];

function ChevronDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 8" width="12" height="8">
      <path d="m1 1.25 5 5 5-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M7.1 3.5 9.6 8 7.8 9.8a14.7 14.7 0 0 0 6.4 6.4l1.8-1.8 4.5 2.5-.8 3.6c-.2.9-1 1.5-2 1.5A15.7 15.7 0 0 1 2 6.3c0-1 .6-1.8 1.5-2l3.6-.8Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function SiteHeader({
  navigation = defaultNavigation,
  phoneDisplay = "(310) 595-6938",
  phoneHref = "+13105956938",
  ctaLabel = "Let’s Talk",
  ctaHref = "/contact",
}: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Yellow Bee Marketing home">
          <Image
            src="/ybm-logo.png"
            alt="Yellow Bee Marketing"
            width={141}
            height={62}
            priority
            sizes="(max-width: 430px) 116px, (max-width: 1024px) 128px, 141px"
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className={styles.navLink} href={item.href} key={item.label}>
              <span>{item.label}</span>
              {item.hasMenu ? <ChevronDown /> : null}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href={`tel:${phoneHref}`} aria-label={`Call Yellow Bee Marketing at ${phoneDisplay}`}>
            <PhoneIcon />
            <span>{phoneDisplay}</span>
          </a>
          <Link className={styles.cta} href={ctaHref}>
            <span>{ctaLabel}</span>
            <ArrowRight />
          </Link>
        </div>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open primary navigation">
            <MenuIcon />
          </summary>
          <div className={styles.mobilePanel}>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.label}>
                  <span>{item.label}</span>
                  {item.hasMenu ? <ChevronDown /> : null}
                </Link>
              ))}
            </nav>
            <a className={styles.mobilePhone} href={`tel:${phoneHref}`}>
              <PhoneIcon />
              <span>{phoneDisplay}</span>
            </a>
            <Link className={styles.mobileCta} href={ctaHref}>
              <span>{ctaLabel}</span>
              <ArrowRight />
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
