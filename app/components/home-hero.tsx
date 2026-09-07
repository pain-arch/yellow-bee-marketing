import Image from "next/image";
import Link from "next/link";
import styles from "./home-hero.module.css";

export type HeroAction = {
  label: string;
  href: string;
};

export type HomeHeroProps = {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

const defaultPrimaryAction: HeroAction = {
  label: "Grow My Brand",
  href: "/contact",
};

const defaultSecondaryAction: HeroAction = {
  label: "See Our Work",
  href: "/work",
};

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function HomeHero({
  eyebrow = "Marketing. Technology. Growth.",
  title = "Empowering Brands in the",
  highlightedTitle = "Digital Age",
  description = "We build smart strategies and digital experiences that drive real growth, measurable impact, and lasting relationships.",
  primaryAction = defaultPrimaryAction,
  secondaryAction = defaultSecondaryAction,
}: HomeHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.media}>
        <Image
          src="/hero-background.png"
          alt="Marketing campaign dashboards displayed alongside an ecommerce website on a laptop and phone"
          fill
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 74vw, 78vw"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title} id="home-hero-title">
            <span>{title}</span>
            <strong>{highlightedTitle}</strong>
          </h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={primaryAction.href}>
              <span>{primaryAction.label}</span>
              <ArrowRight />
            </Link>
            <Link className={styles.secondaryAction} href={secondaryAction.href}>
              <span>{secondaryAction.label}</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
