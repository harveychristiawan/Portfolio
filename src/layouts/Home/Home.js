import placeholderImage from 'assets/placeholder-image.png';
import primeHome from 'assets/prime-home.png';
import primeAbsensi from 'assets/prime-absensi.png';
import primeKeuangan from 'assets/prime-keuangan.png';
import prometheusHome from 'assets/prometheus-home.png';
import adexLegend from 'assets/adex-legend.png';
import adexWraith from 'assets/adex-wraith.png';
import planovHome from 'assets/planov-dashboard.png';
import planovNotes from 'assets/planov-notes.png';
import planovVBL from 'assets/planov-vbl.png';
import masterplanTimer from 'assets/masterplan-timer.png';
import masterplanDashboard from 'assets/masterplan-dashboard.png';
import masterplanCalendar from 'assets/masterplan-calendar.png';
import masterplanNotes from 'assets/masterplan-notes.png';
import masterplanKanban from 'assets/masterplan-kanban.png';
import masterplanLogin from 'assets/masterplan-login.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { Experience } from 'layouts/Home/Experience';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = [
  'Full-Stack Developer',
  'Software Engineer',
  'Gen AI Engineer',
  'Project Management',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();
  const experience = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      details,
      experience,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta title="Developer" description="Portfolio of Harvey Christiawan." />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="MasterPlan"
        description={
          <>
            MasterPlan is a web-based application developed to help university students manage their time more effectively and boost their productivity in daily activities.
            <br />
            <br />
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>PHP Laravel</li>
              <li>Tailwind CSS</li>
              <li>MySQL Database</li>
            </ul>
          </>
        }
        buttonText="View repository"
        buttonLink="https://github.com/harveychristiawan/MasterPlan"
        model={{
          type: 'laptop',
          alt: 'MasterPlan Preview',
          textures: [
            {
              srcSet: [masterplanLogin],
              placeholder: placeholderImage,
            },
            {
              srcSet: [masterplanDashboard],
              placeholder: placeholderImage,
            },
            {
              srcSet: [masterplanKanban],
              placeholder: placeholderImage,
            },
            {
              srcSet: [masterplanCalendar],
              placeholder: placeholderImage,
            },
            {
              srcSet: [masterplanTimer],
              placeholder: placeholderImage,
            },
            {
              srcSet: [masterplanNotes],
              placeholder: placeholderImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Prime Genius Academy"
        description={
          <>
            Course management system for Prime Genius Academy to manage finance,
            attendance, and announcements for students and teachers.
            <br />
            <br />
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>React, Next.js, Tailwind CSS</li>
              <li>Node.js, Express</li>
              <li>MySQL Database</li>
            </ul>
          </>
        }
        model={{
          type: 'laptop',
          alt: 'Displaying the home page of the website.',
          textures: [
            {
              srcSet: [primeHome],
              placeholder: placeholderImage,
            },
            {
              srcSet: [primeAbsensi],
              placeholder: placeholderImage,
            },
            {
              srcSet: [primeKeuangan],
              placeholder: placeholderImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Prometheus"
        description="A company profile website for Prometheus Logistics Services & Supply Chain, built using WordPress. This website showcases the company's services, expertise, and industry solutions, providing a professional online presence for clients and partners."
        buttonText="Visit website"
        buttonLink="https://prometheus.co.id/"
        model={{
          type: 'laptop',
          alt: 'landing page',
          textures: [
            {
              srcSet: [prometheusHome],
              placeholder: placeholderImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Planov"
        description={
          <>
            Planov is a web based project that provides students with tools to aid them
            during their study session.
            <br />
            <br />
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>PHP Laravel</li>
              <li>MySQL Database</li>
            </ul>
          </>
        }
        buttonText="View repository"
        buttonLink="https://github.com/harveychristiawan/Planov"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [planovHome],
              placeholder: placeholderImage,
            },
            {
              srcSet: [planovNotes],
              placeholder: placeholderImage,
            },
            {
              srcSet: [planovVBL],
              placeholder: placeholderImage,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
