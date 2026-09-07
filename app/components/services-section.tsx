import Image from "next/image";
import Link from "next/link";
import styles from "./services-section.module.css";

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type ServicesSectionProps = {
  eyebrow?: string;
  title?: string;
  introduction?: string;
  services?: readonly ServiceItem[];
  allServicesHref?: string;
  allServicesLabel?: string;
};

export const yellowBeeServices: readonly ServiceItem[] = [
  {
    title: "Branding & Design",
    description: "Build a strong brand foundation that connects and differentiates.",
    href: "/services/branding-design",
    icon: "/service-icons/branding.png",
  },
  {
    title: "UI/UX Design",
    description: "Design experiences users love that are intuitive and memorable.",
    href: "/services/ui-ux-design",
    icon: "/service-icons/uiux.png",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that attract, engage, and convert.",
    href: "/services/digital-marketing",
    icon: "/service-icons/digital-marketing.png",
  },
  {
    title: "Web Development",
    description: "Fast, scalable websites built for performance and growth.",
    href: "/services/web-development",
    icon: "/service-icons/web-developmnet.png",
  },
  {
    title: "Mobile App Development",
    description: "Powerful mobile experiences that users love and trust.",
    href: "/services/mobile-app-development",
    icon: "/service-icons/mobile-app.png",
  },
  {
    title: "Maintenance / Support",
    description: "Ongoing support to keep your digital presence at its best.",
    href: "/services/maintenance-support",
    icon: "/service-icons/support.png",
  },
];

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.icon}
        src={service.icon}
        alt=""
        width={1254}
        height={1254}
        sizes="(max-width: 430px) 68px, 78px"
      />
      <div className={styles.cardContent}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link className={styles.cardLink} href={service.href} aria-label={`Learn more about ${service.title}`}>
          <span>Learn More</span>
          <ArrowRight />
        </Link>
      </div>
    </article>
  );
}

export function ServicesSection({
  eyebrow = "Our Services",
  title = "End-to-end digital solutions designed for growth.",
  introduction = "From strategy to execution, we deliver solutions that are creative, data-driven, and built to perform.",
  services = yellowBeeServices,
  allServicesHref = "/services",
  allServicesLabel = "Explore All Services",
}: ServicesSectionProps) {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <div className={styles.headingBlock}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id="services-heading">{title}</h2>
          </div>
          <p className={styles.introduction}>{introduction}</p>
          <Link className={styles.allServices} href={allServicesHref}>
            <span>{allServicesLabel}</span>
            <ArrowRight />
          </Link>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
