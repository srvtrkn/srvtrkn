import React from "react";
import jsPDF from "jspdf";
import PTSans from "../PTSans";
import data from "../resumeData";
export default function Pdf() {
  const print = () => {
    var doc = new jsPDF();
    doc.addFileToVFS("PTSans.ttf", PTSans.font);
    doc.addFont("PTSans.ttf", "PTSans", "normal");
    doc.setFont("PTSans"); // set font

    doc.setFontSize(25);
    doc.text(data.main.name, 30, 30);
    doc.setFontSize(15);
    doc.text("İletişim Bilgileri", 30, 45);
    doc.setFontSize(12);
    doc.text("E-Mail", 40, 53);
    doc.setTextColor(75);
    doc.text(data.main.email, 65, 53);
    doc.setTextColor(0);
    doc.text("Telefon", 40, 59);
    doc.setTextColor(75);
    doc.text(data.main.phone, 65, 59);
    doc.setTextColor(0);
    let y = 59;
    for (let i = 0; i < data.main.social.length; i++) {
      let s = data.main.social[i];
      y = y + 6;
      doc.text(s.name, 40, y);
      doc.setTextColor(75);
      doc.text(s.url, 65, y);
      doc.setTextColor(0);
    }
    y = y + 6;
    doc.setTextColor(0);
    doc.text("Adres", 40, y);
    doc.setTextColor(75);
    doc.text(data.main.address, 65, y);
    doc.setTextColor(0);
    y = y + 10;
    doc.setFontSize(15);
    doc.text("Yetenekler", 30, y);
    doc.setFontSize(12);
    let skills = "";
    data.resume.skills.forEach(s => {
      skills += s.name + ", ";
    });
    y = y + 8;
    doc.setTextColor(75);
    doc.setFontSize(10);
    doc.text(skills.slice(0, -2), 40, y);
    doc.setTextColor(0);
    y = y + 10;
    doc.setFontSize(15);
    doc.text("Deneyim", 30, y);
    doc.setFontSize(12);
    for (let i = 0; i < data.resume.work.length; i++) {
      let w = data.resume.work[i];
      y = y + 8;
      doc.text(w.company, 40, y);
      doc.setTextColor(150);
      y = y + 6;
      doc.text(w.years, 45, y);
      doc.setTextColor(75);
      y = y + 6;
      doc.text(w.title, 45, y);
      for (let j = 0; j < w.descriptions.length; j++) {
        const d = w.descriptions[j];
        y = y + 6;
        doc.setFontSize(10);
        doc.text("- " + d, 50, y);
      }
      doc.setFontSize(12);
      doc.setTextColor(0);
    }
    doc.addPage();
    y = 30;
    doc.setFontSize(15);
    doc.text("Eğitim", 30, y);
    doc.setFontSize(12);
    for (let i = 0; i < data.resume.education.length; i++) {
      let e = data.resume.education[i];
      y = y + 8;
      doc.text(`${e.school} (${e.type})`, 40, y);
      doc.setTextColor(75);
      y = y + 6;
      doc.text(
        e.department ? `${e.department} - ${e.degree}` : e.degree,
        45,
        y
      );
      doc.setTextColor(150);
      y = y + 6;
      doc.text(e.graduated, 45, y);
      doc.setTextColor(0);
    }
    y = y + 10;
    doc.setFontSize(15);
    doc.text("Kurslar", 30, y);
    doc.setFontSize(12);
    for (let i = 0; i < data.main.courses.length; i++) {
      let c = data.main.courses[i];
      y = y + 8;
      doc.text(c.name, 40, y);
      doc.setTextColor(75);
      y = y + 6;
      doc.text(c.corporation, 45, y);
      doc.setTextColor(150);
      y = y + 6;
      doc.text(c.time, 45, y);
      doc.setTextColor(0);
    }
    y = y + 10;
    doc.setFontSize(15);
    doc.text("Bireysel Projeler", 30, y);
    doc.setFontSize(12);
    for (let i = 0; i < data.portfolio.projects.length; i++) {
      let p = data.portfolio.projects[i];
      y = y + 8;
      doc.text(p.title, 40, y);
      doc.setTextColor(75);
      y = y + 6;
      doc.text(p.category, 45, y);
      doc.setTextColor(58, 127, 187);
      y = y + 6;
      doc.text(p.url, 45, y);
      doc.setTextColor(0);
    }

    doc.save("CV - Servet Erkan.pdf");
  };

  return (
    <a className="button" onClick={print}>
      CV İndir
    </a>
  );
}
