import React from "react";
import jsPDF from "jspdf";
import PTSans from "../PTSans";
export default function Pdf({ data }) {
  const print = () => {
    var doc = new jsPDF();
    doc.addFileToVFS("PTSans.ttf", PTSans.font);
    doc.addFont("PTSans.ttf", "PTSans", "normal");
    doc.setFont("PTSans"); // set font

    doc.setFontSize(20);
    doc.text(data.main.name, 100, 30, null, null, "center");
    doc.setFontSize(15);
    doc.text("İletişim Bilgileri", 30, 45);
    doc.setFontSize(12);
    doc.text("E-Mail", 40, 55);
    doc.setTextColor(75);
    doc.text(data.main.email, 65, 55);
    doc.setTextColor(0);
    doc.text("Adres", 40, 65);
    doc.setTextColor(75);
    doc.text(data.main.address, 65, 65);
    doc.setTextColor(0);
    doc.setFontSize(15);
    doc.text("Deneyim", 30, 75);
    doc.setFontSize(12);
    let y = 75;
    for (let i = 0; i < data.resume.work.length; i++) {
      let w = data.resume.work[i];
      y = y + 10;
      doc.text(w.company, 40, y);
      doc.setTextColor(150);
      y = y + 6;
      doc.text(w.years, 45, y);
      doc.setTextColor(75);
      y = y + 6;
      doc.text(w.title, 45, y);
      doc.setTextColor(0);
    }
    y = y + 10;
    doc.setFontSize(15);
    doc.text("Eğitim", 30, y);
    doc.setFontSize(12);
    for (let i = 0; i < data.resume.education.length; i++) {
      let e = data.resume.education[i];
      y = y + 10;
      doc.text(e.school, 40, y);
    }
    doc.save("MUTABAKAT FORMU.pdf");
  };

  return <a onClick={print}>deneme</a>;
}
