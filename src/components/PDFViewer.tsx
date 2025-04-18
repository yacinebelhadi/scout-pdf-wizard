
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface PDFViewerProps {
  file: string;
}

const PDFViewer = ({ file }: PDFViewerProps) => {
  const zoomPluginInstance = zoomPlugin();
  const toolbarPluginInstance = toolbarPlugin();

  return (
    <div className="h-[600px] w-full border rounded-lg overflow-hidden bg-white">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={file}
          plugins={[zoomPluginInstance, toolbarPluginInstance]}
          defaultScale={1}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
