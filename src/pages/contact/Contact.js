import { DecoderText } from 'components/DecoderText';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';
import { MdOutlineEmail, MdWhatsapp } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa6';

export const Contact = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
        description="Send me a message if you're interested in discussing a project or if you just want to say hi"
      />

      <Transition in={true} timeout={0}>
        {visible => (
          <>
            <Heading
              className={styles.contactHeading}
              data-visible={visible}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay)}
            >
              <DecoderText text="Let's Connect" start={visible} delay={300} />
            </Heading>

            <div className={styles.contactInfo}>
              <a href="mailto:harveych.18@gmail.com" className={styles.contactLink}>
                <MdOutlineEmail /> harveych.18@gmail.com
              </a>
              <a
                href="https://wa.me/6281317872357"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdWhatsapp /> +62 813 1787 2357
              </a>
              <a
                href="https://www.linkedin.com/in/harvey-christiawan-0325a81a7/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FaLinkedin /> Harvey Christiawan
              </a>
            </div>
          </>
        )}
      </Transition>

      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
