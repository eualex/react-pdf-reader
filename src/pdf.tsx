import * as PDFJS from 'pdfjs-dist/build/pdf';
import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker';

export function PDFReader() {
  PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const { 0: file } = event.target.files;
    const fileReader = new FileReader();

    fileReader.onload = async e => {
      const buffer = e.target?.result as ArrayBufferLike & Float64Array;
      if (!buffer) return;
      const doc = await PDFJS.getDocument(buffer).promise;
      const page = await doc.getPage(1);
      const content = await page.getTextContent();
      const { items } = content;
      console.log(items);
    };

    fileReader.readAsArrayBuffer(file);
  }

  return <input type="file" onChange={handleChange} />;
}
