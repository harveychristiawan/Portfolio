import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export const PdfViewer = ({ pdfUrl, pageNumber = 1, onLoadSuccess, onLoadError }) => {
  const [viewportWidth, setViewportWidth] = useState(undefined);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    setViewportWidth(window.innerWidth);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Document
      file={pdfUrl}
      onLoadSuccess={onLoadSuccess}
      onLoadError={onLoadError}
      loading={<div className="loading">Loading PDF...</div>}
      className="pdfDocument"
    >
      <Page
        pageNumber={pageNumber}
        renderTextLayer={true}
        renderAnnotationLayer={true}
        className="pdfPage"
        width={viewportWidth < 768 ? viewportWidth - 30 : undefined}
      />
    </Document>
  );
};
