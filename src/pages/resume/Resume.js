import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
import { PdfViewer } from 'components/PdfViewer';
import styles from './Resume.module.css';
import { MdFileDownload, MdErrorOutline } from 'react-icons/md';
import { useState } from 'react';

export const Resume = () => {
  const [pdfUrl] = useState('/CV.pdf');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Harvey-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));

  return (
    <Section className={styles.resume}>
      <Meta title="Resume" description="My Resume" />

      <Transition in={true} timeout={0}>
        {__visible => (
          <>
            <div className={styles.resumeContainer}>
              <div className={styles.pdfWrapper}>
                {!pdfError ? (
                  <>
                    <PdfViewer
                      pdfUrl={pdfUrl}
                      pageNumber={pageNumber}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={() => setPdfError(true)}
                    />

                    {numPages > 1 && (
                      <div className={styles.pdfNavigation}>
                        <button
                          onClick={goToPrevPage}
                          disabled={pageNumber <= 1}
                          className={styles.pdfNavButton}
                        >
                          Previous
                        </button>
                        <p className={styles.pdfPageInfo}>
                          Page {pageNumber} of {numPages}
                        </p>
                        <button
                          onClick={goToNextPage}
                          disabled={pageNumber >= numPages}
                          className={styles.pdfNavButton}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.fallbackContainer}>
                    <MdErrorOutline className={styles.fallbackIcon} />
                    <h3>Unable to display PDF</h3>
                    <p>
                      The PDF viewer couldn&apos;t load the resume. Please download the
                      file to view it.
                    </p>
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
