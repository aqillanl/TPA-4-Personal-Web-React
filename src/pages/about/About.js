import React from "react";
import "./About.css";
import Profil from "../../assets/1.jpg";

const PageAbout = () => {
  return (
    <>
      <section id="about">
        <div className="wrapAbout">
          <img className="aboutgambar" src={Profil} alt="" />
          <br />
          <p className="teksabout">
            Hi saya <b>Aqilla Noor Lazuardi</b>, saya seorang pemuda asli Semarang, Jawa Tengah
            <br />
            Saat ini Saya sedang menempuh pendidikan sebagai mahasiswa di Universitas Dian Nuswantoro Semarang yang mengambil jurusan Teknik Informatika.
            <br />
            Sekarang saya sedang mengikuti Program Studi Independen pada Kampus Merdeka dan memilih{" "}
            <a className="link" target="_blank" href="https://skilvul.com/">
              skilvul
            </a>
            sebagai mitranya.
          </p>
        </div>
      </section>
    </>
  );
};

export default PageAbout;
