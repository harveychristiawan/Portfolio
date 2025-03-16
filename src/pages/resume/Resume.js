import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
import styles from './Resume.module.css';
import { MdFileDownload, MdErrorOutline } from 'react-icons/md';
import { useEffect, useState, useRef } from 'react';

export const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState('/CV.pdf');
  const [pdfLoaded, setPdfLoaded] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const checkPdfLoaded = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        if (
          !iframeDoc ||
          iframeDoc.body.innerHTML.includes('error') ||
          iframeDoc.body.innerHTML === ''
        ) {
          setPdfLoaded(false);
        }
      } catch (e) {
        setPdfLoaded(false);
      }
    };

    const timer = setTimeout(checkPdfLoaded, 3000);

    iframe.addEventListener('load', checkPdfLoaded);

    return () => {
      clearTimeout(timer);
      iframe.removeEventListener('load', checkPdfLoaded);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Harvey-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section className={styles.resume}>
      <Meta title="Resume" description="My Resume" />

      <Transition in={true} timeout={0}>
        {__visible => (
          <>
            <div className={styles.resumeContainer}>
              <div className={styles.pdfWrapper}>
                {pdfLoaded ? (
                  <iframe
                    ref={iframeRef}
                    src={`${pdfUrl}#view=FitH`}
                    className={styles.pdfViewer}
                    title="Resume PDF"
                    onError={() => setPdfLoaded(false)}
                  />
                ) : (
                  <div className={styles.fallbackContainer}>
                    <MdErrorOutline className={styles.fallbackIcon} />
                    <h3>Unable to display PDF</h3>
                    <p>
                      The PDF viewer couldn&apos;t load the resume. Please download the
                      file to view it.
                    </p>
                    <button
                      className={`${styles.downloadButton} ${styles.fallbackButton}`}
                      onClick={handleDownload}
                    >
                      <MdFileDownload />
                      <span>Download Resume</span>
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.buttonContainer}>
                <button
                  className={styles.downloadButton}
                  onClick={handleDownload}
                  aria-label="Download Resume"
                >
                  <MdFileDownload />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};
