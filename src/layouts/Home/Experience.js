import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Link } from 'components/Link';
import { Transition } from 'components/Transition';
import { Fragment, useState, useContext } from 'react';
import { media } from 'utils/style';
import styles from './Experience.module.css';
import Compnet from '../../components/Icon/svg/compnet.svg';
import Prometheus from '../../components/Icon/svg/prometheus.svg';
import Prime from '../../components/Icon/svg/prime.svg';
import Binus from '../../components/Icon/svg/binus.svg';
import ReactIcon from '../../components/Icon/svg/react.svg';
import Javascript from '../../components/Icon/svg/javascript.svg';
import Typescript from '../../components/Icon/svg/typescript.svg';
import NodeIcon from '../../components/Icon/svg/nodejs.svg';
import NextIcon from '../../components/Icon/svg/nextjs.svg';
import Html from '../../components/Icon/svg/html.svg';
import Css from '../../components/Icon/svg/css.svg';
import Mysql from '../../components/Icon/svg/mysql.svg';
import Postgresql from '../../components/Icon/svg/postgresql.svg';
import Figma from '../../components/Icon/svg/figma.svg';
import Wordpress from '../../components/Icon/svg/wordpress.svg';
import Office from '../../components/Icon/svg/office.svg';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Developer',
    company: 'Prime Genius Academy',
    logoSrc: Prime,
    duration: 'Feb 2025 - Mar 2025',
    // description:
    //   'Managed student projects and organized tech events. Coordinated team of volunteers and ensured timely delivery of projects.',
    url: 'https://www.instagram.com/primegeniusacademy/',
  },
  {
    id: 2,
    role: 'Fullstack Developer Intern',
    company: 'PT. Nusantara Compnet Integrator',
    logoSrc: Compnet,
    duration: 'Feb 2024 - Feb 2025',
    // description:
    //   'Developed responsive web applications using React and Next.js. Implemented UI components and integrated with backend APIs.',
    url: 'https://www.compnet.co.id/',
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'Prometheus',
    logoSrc: Prometheus,
    duration: 'Nov 2024 - Dec 2024',
    // description:
    //   'Built and maintained client websites. Worked with HTML, CSS, JavaScript and various CMS platforms.',
    url: 'https://prometheus.co.id/',
  },
  {
    id: 4,
    role: 'Activist',
    company: 'Himpunan Teknik Informatika (HIMTI)',
    logoSrc: Binus,
    duration: 'Feb 2022 - Feb 2024',
    // description:
    //   'Built and maintained client websites. Worked with HTML, CSS, JavaScript and various CMS platforms.',
    url: 'https://student-activity.binus.ac.id/himti/',
  },
];

const skills = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'node' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Wordpress', icon: 'wordpress' },
  { name: 'Office', icon: 'office' },
];

const SkillIcon = ({ name }) => {
  const iconMap = {
    javascript: Javascript,
    typescript: Typescript,
    react: ReactIcon,
    node: NodeIcon,
    nextjs: NextIcon,
    html: Html,
    css: Css,
    mysql: Mysql,
    postgresql: Postgresql,
    figma: Figma,
    wordpress: Wordpress,
    office: Office,
  };

  const Icon = iconMap[name.toLowerCase()];
  return Icon ? <Icon className={`${styles.skillIcon} ${styles.themeIcon}`} /> : null;
};

const ExperienceText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Experience" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My professional journey includes internships, work experience, and roles within
      university organizations. I&apos;ve developed a diverse set of skills in both soft
      and hard skills.
    </Text>
  </Fragment>
);

const ExperienceItem = ({ experience, visible }) => (
  <div className={styles.experienceCard} data-visible={visible}>
    <div className={styles.experienceHeader}>
      <div className={styles.experienceInfo}>
        <Heading level={4} className={styles.experienceRole}>
          {experience.role}
        </Heading>
        <div className={styles.companyRow}>
          <Text size="m" className={styles.experienceCompany}>
            <Link href={experience.url}>{experience.company}</Link>
          </Text>

          <div className={styles.companyLogoContainer}>
            {experience.logoSrc ? (
              <experience.logoSrc
                className={`${styles.companyLogo} ${styles.themeIcon}`}
              />
            ) : (
              <div className={styles.companyLogoPlaceholder}>
                {experience.company.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <Text size="s" className={styles.experienceDuration}>
          {experience.duration}
        </Text>
      </div>
    </div>
    {experience.description && (
      <Text className={styles.experienceDescription} size="s" as="p">
        {experience.description}
      </Text>
    )}
  </div>
);

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.header}>
              <ExperienceText visible={visible} titleId={titleId} />
            </div>

            <div className={styles.experienceGrid} data-visible={visible}>
              {experiences.map(experience => (
                <ExperienceItem
                  key={experience.id}
                  experience={experience}
                  visible={visible}
                />
              ))}
            </div>
            <div className={styles.skillsSection}>
              <div className={styles.tag} aria-hidden>
                <div className={styles.tagText} data-visible={visible}>
                  Skillset
                </div>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
              </div>
              <div className={styles.skillsContainer} data-visible={visible}>
                <div className={styles.skillsGrid}>
                  {skills.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                      <div className={styles.skillContent}>
                        <SkillIcon name={skill.icon} />
                        <Text className={styles.skillName}>{skill.name}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/resume"
                  icon="arrowRight"
                >
                  Full Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
