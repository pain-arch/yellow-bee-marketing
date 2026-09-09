"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./selected-work.module.css";

export type SelectedProject = {
  title: string;
  services: string;
  image: string;
  href: string;
  imagePosition?: string;
};

export type SelectedWorkProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  projects?: readonly SelectedProject[];
  allProjectsHref?: string;
  allProjectsLabel?: string;
};

export const yellowBeeSelectedProjects: readonly SelectedProject[] = [
  {
    title: "Home Haven Childcare",
    services: "Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/01-home-haven-childcare.png",
    href: "/work/home-haven-childcare",
  },
  {
    title: "Smart Reach Solutions",
    services: "Branding, Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/02-smart-reach-solutions.png",
    href: "/work/smart-reach-solutions",
  },
  {
    title: "Gulshan Restaurant & Bar",
    services: "Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/03-gulshan-restaurant-and-bar.png",
    href: "/work/gulshan-restaurant-and-bar",
  },
  {
    title: "Fast Track University",
    services: "Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/04-fast-track-university.png",
    href: "/work/fast-track-university",
  },
  {
    title: "Harper Learning",
    services: "Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/05-harper-learning.png",
    href: "/work/harper-learning",
  },
  {
    title: "Wonder Watchers Ltd",
    services: "Branding, Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/06-wonder-watchers-ltd.png",
    href: "/work/wonder-watchers-ltd",
  },
  {
    title: "The Growth Group",
    services: "Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/07-the-growth-group.png",
    href: "/work/the-growth-group",
  },
  {
    title: "Dacy Care",
    services: "Website Design & Development",
    image: "/yellow-bee-selected-work-project-images/08-dacy-care.png",
    href: "/work/dacy-care",
  },
];

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function SelectedWork({
  eyebrow = "Selected Work",
  title = "Work that makes an impact.",
  description = "We partner with brands to create digital experiences that drive results and growth.",
  projects = yellowBeeSelectedProjects,
  allProjectsHref = "/work",
  allProjectsLabel = "View All Projects",
}: SelectedWorkProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  function showNextProject() {
    const track = trackRef.current;

    if (!track) return;

    const card = track.querySelector<HTMLElement>(`[data-project-card]`);
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = (card?.offsetWidth ?? track.clientWidth) + gap;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;

    track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: "smooth" });
  }

  return (
    <section className={styles.section} aria-labelledby="selected-work-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="selected-work-heading">{title}</h2>
          <p className={styles.description}>{description}</p>
          <Link className={styles.allProjects} href={allProjectsHref}>
            <span>{allProjectsLabel}</span>
            <ArrowRight />
          </Link>
        </div>

        <div className={styles.gallery}>
          <ul
            className={styles.track}
            ref={trackRef}
            aria-label="Selected client projects"
            tabIndex={0}
          >
            {projects.map((project) => (
              <li className={styles.slide} key={project.title} data-project-card>
                <Link className={styles.card} href={project.href}>
                  <div className={styles.media}>
                    <Image
                      src={project.image}
                      alt={`${project.title} website project preview`}
                      fill
                      sizes="(max-width: 640px) 84vw, (max-width: 1000px) 45vw, (max-width: 1440px) 29vw, 27rem"
                      style={{ objectPosition: project.imagePosition ?? "top center" }}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{project.title}</h3>
                    <p>{project.services}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {projects.length > 1 ? (
            <button
              className={styles.nextButton}
              type="button"
              onClick={showNextProject}
              aria-label="Show next selected project"
            >
              <ArrowRight />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
