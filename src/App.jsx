import React from "react";
import BasicTable from "./BasicTable";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const App = () => {
  const saveAsPDF = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pdfWidth * 0.8; // Adjust this value as needed
      const imgHeight = (imgWidth * canvas.height) / canvas.width;
      const xPos = (pdfWidth - imgWidth) / 2;
      const yPos = 10; // Adjust this value to set the vertical position
      pdf.addImage(imgData, "PNG", xPos, yPos, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={saveAsPDF}>Save As PDF</button>
        </div>
        <div
          id="divToPrint"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <BasicTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
