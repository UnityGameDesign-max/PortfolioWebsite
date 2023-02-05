import React from "react";
import Navigation from "../components/Navigation";
import SkillCard from "../components/SkillCard";
import Socials from "../components/Socials";
import ProjectCard from "../components/ProjectCard";
import Aos from 'aos';
import 'aos/dist/aos.css';
import TakeAlotClone from "../assets/TakeAlotScreenshot.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react"; 

function Home() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <div className="home">
      <Navigation />
      <Socials />
      <div className="home__hero">
        <div className="home__hero-details">
          <pre className="home__hero-section-tumi">&lt;tumelo&gt;</pre>
            <h1 data-aos="fade-up" className="home__hero-section-text">
              I Create Applications for the Web
            </h1>
          <p data-aos="fade-up" data-aos-delay="250" className="home__hero-section-slogan">
            I am a software engineer specializing in building and designing
            amazing user interface.
          </p>
          <div className="home__hero-button-wrapper">
            <button data-aos="fade-up" data-aos-delay="450" className="home__hero-button">See Projects</button>
          </div>
          <pre className="home__hero-section-tumi">&lt;/tumelo&gt;</pre>
        </div>
        <div className="home__hero-section-scroll">
          <p className="scroll-text">Scrolldown</p>
          <svg
            className="scroll-arrow"
            width="23"
            height="63"
            viewBox="0 0 16 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 22.7071C7.68342 23.0976 8.31658 23.0976 8.70711 22.7071L15.0711 16.3431C15.4616 15.9526 15.4616 15.3195 15.0711 14.9289C14.6805 14.5384 14.0474 14.5384 13.6569 14.9289L8 20.5858L2.34315 14.9289C1.95262 14.5384 1.31946 14.5384 0.928933 14.9289C0.538408 15.3195 0.538408 15.9526 0.928933 16.3431L7.29289 22.7071ZM7 0L7 22H9L9 0L7 0Z"
              fill="#6615EB"
              fill-opacity="0.79"
            />
          </svg>
        </div>
      </div>
      <div className="home__skills">
        <div className="section-title">
          <h2 className="home__skills-heading">WHAT I DO</h2>
        </div>

        <p className="home__skills-description">
          I am a frontend who likes to create beautiful websites, and cool
          Applications.
        </p>
        <div className="home__skills-cards">
          <div className="home__skills-top">
            <SkillCard
              data-aos="fade-up" data-aos-delay="450"
              icon={
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3689 13.0564C15.4764 12.9489 15.604 12.8636 15.7445 12.8054C15.8849 12.7472 16.0355 12.7173 16.1875 12.7173C16.3395 12.7173 16.4901 12.7472 16.6305 12.8054C16.771 12.8636 16.8986 12.9489 17.0061 13.0564C17.1136 13.1639 17.1989 13.2915 17.2571 13.432C17.3153 13.5724 17.3452 13.723 17.3452 13.875C17.3452 14.027 17.3153 14.1776 17.2571 14.318C17.1989 14.4585 17.1136 14.5861 17.0061 14.6936L13.1974 18.5L17.0061 22.3064C17.2232 22.5235 17.3452 22.818 17.3452 23.125C17.3452 23.432 17.2232 23.7265 17.0061 23.9436C16.789 24.1607 16.4945 24.2827 16.1875 24.2827C15.8805 24.2827 15.586 24.1607 15.3689 23.9436L10.7439 19.3186C10.6362 19.2112 10.5508 19.0836 10.4925 18.9431C10.4342 18.8027 10.4042 18.6521 10.4042 18.5C10.4042 18.3479 10.4342 18.1973 10.4925 18.0568C10.5508 17.9164 10.6362 17.7888 10.7439 17.6814L15.3689 13.0564ZM21.6311 13.0564C21.5236 12.9489 21.396 12.8636 21.2555 12.8054C21.1151 12.7472 20.9645 12.7173 20.8125 12.7173C20.6605 12.7173 20.5099 12.7472 20.3695 12.8054C20.229 12.8636 20.1014 12.9489 19.9939 13.0564C19.8864 13.1639 19.8011 13.2915 19.7429 13.432C19.6847 13.5724 19.6548 13.723 19.6548 13.875C19.6548 14.027 19.6847 14.1776 19.7429 14.318C19.8011 14.4585 19.8864 14.5861 19.9939 14.6936L23.8026 18.5L19.9939 22.3064C19.7768 22.5235 19.6548 22.818 19.6548 23.125C19.6548 23.432 19.7768 23.7265 19.9939 23.9436C20.211 24.1607 20.5055 24.2827 20.8125 24.2827C21.1195 24.2827 21.414 24.1607 21.6311 23.9436L26.2561 19.3186C26.3638 19.2112 26.4492 19.0836 26.5075 18.9431C26.5658 18.8027 26.5958 18.6521 26.5958 18.5C26.5958 18.3479 26.5658 18.1973 26.5075 18.0568C26.4492 17.9164 26.3638 17.7888 26.2561 17.6814L21.6311 13.0564Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M4.625 4.625C4.625 3.39837 5.11228 2.22199 5.97963 1.35463C6.84699 0.487275 8.02337 0 9.25 0L27.75 0C28.9766 0 30.153 0.487275 31.0204 1.35463C31.8877 2.22199 32.375 3.39837 32.375 4.625V32.375C32.375 33.6016 31.8877 34.778 31.0204 35.6454C30.153 36.5127 28.9766 37 27.75 37H9.25C8.02337 37 6.84699 36.5127 5.97963 35.6454C5.11228 34.778 4.625 33.6016 4.625 32.375V4.625ZM27.75 2.3125H9.25C8.63669 2.3125 8.04849 2.55614 7.61482 2.98982C7.18114 3.42349 6.9375 4.01169 6.9375 4.625V32.375C6.9375 32.9883 7.18114 33.5765 7.61482 34.0102C8.04849 34.4439 8.63669 34.6875 9.25 34.6875H27.75C28.3633 34.6875 28.9515 34.4439 29.3852 34.0102C29.8189 33.5765 30.0625 32.9883 30.0625 32.375V4.625C30.0625 4.01169 29.8189 3.42349 29.3852 2.98982C28.9515 2.55614 28.3633 2.3125 27.75 2.3125Z"
                    fill="#794AFF"
                  />
                </svg>
              }
              cardTitle="Code"
              cardDescription="I write very neat and clean readable code"
            />
            <SkillCard
              icon={
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_47_6)">
                    <path
                      d="M28.0876 0.337678C28.195 0.23 28.3226 0.14457 28.4631 0.08628C28.6036 0.0279901 28.7542 -0.00201416 28.9062 -0.00201416C29.0583 -0.00201416 29.2089 0.0279901 29.3494 0.08628C29.4899 0.14457 29.6175 0.23 29.7249 0.337678L36.6624 7.27518C36.77 7.38258 36.8555 7.51018 36.9138 7.65065C36.972 7.79112 37.0021 7.94172 37.0021 8.0938C37.0021 8.24589 36.972 8.39648 36.9138 8.53696C36.8555 8.67743 36.77 8.80502 36.6624 8.91243L13.5374 32.0374C13.4264 32.1476 13.2942 32.2342 13.1489 32.2918L1.58636 36.9168C1.37624 37.0009 1.14605 37.0215 0.924334 36.976C0.70262 36.9305 0.499129 36.821 0.339089 36.6609C0.179049 36.5009 0.0694981 36.2974 0.0240171 36.0757C-0.0214639 35.854 -0.000874563 35.6238 0.0832326 35.4137L4.70823 23.8512C4.76588 23.7058 4.85242 23.5736 4.96261 23.4627L28.0876 0.337678ZM25.9162 5.7813L31.2187 11.0839L34.2088 8.0938L28.9062 2.79124L25.9162 5.7813ZM29.5838 12.7188L24.2812 7.41624L9.24998 22.4475V23.1251H10.4062C10.7129 23.1251 11.007 23.2469 11.2238 23.4637C11.4407 23.6805 11.5625 23.9746 11.5625 24.2813V25.4376H12.7187C13.0254 25.4376 13.3195 25.5594 13.5363 25.7762C13.7532 25.993 13.875 26.2871 13.875 26.5938V27.7501H14.5525L29.5838 12.7188ZM7.01148 24.686L6.76636 24.9311L3.23286 33.7672L12.0689 30.2337L12.314 29.9886C12.0935 29.9061 11.9033 29.7584 11.769 29.565C11.6347 29.3716 11.5627 29.1418 11.5625 28.9063V27.7501H10.4062C10.0996 27.7501 9.80548 27.6282 9.58864 27.4114C9.3718 27.1946 9.24998 26.9005 9.24998 26.5938V25.4376H8.09373C7.85827 25.4374 7.62848 25.3653 7.43508 25.231C7.24168 25.0967 7.09389 24.9066 7.01148 24.686Z"
                      fill="#794AFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_47_6">
                      <rect width="37" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              cardTitle="UI/UX"
              cardDescription="I created custom and beautiful and functional user interface"
            />

            <SkillCard
              icon={
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 18.5C15.7149 18.5 17.4795 17.7691 18.7806 16.4681C20.0816 15.167 20.8125 13.4024 20.8125 11.5625C20.8125 9.72256 20.0816 7.95798 18.7806 6.65695C17.4795 5.35591 15.7149 4.625 13.875 4.625C12.0351 4.625 10.2705 5.35591 8.96945 6.65695C7.66841 7.95798 6.9375 9.72256 6.9375 11.5625C6.9375 13.4024 7.66841 15.167 8.96945 16.4681C10.2705 17.7691 12.0351 18.5 13.875 18.5ZM2.3125 32.375C2.3125 32.375 0 32.375 0 30.0625C0 27.75 2.3125 20.8125 13.875 20.8125C25.4375 20.8125 27.75 27.75 27.75 30.0625C27.75 32.375 25.4375 32.375 25.4375 32.375H2.3125ZM25.4375 8.09375C25.4375 7.78709 25.5593 7.493 25.7762 7.27616C25.993 7.05932 26.2871 6.9375 26.5938 6.9375H35.8438C36.1504 6.9375 36.4445 7.05932 36.6613 7.27616C36.8782 7.493 37 7.78709 37 8.09375C37 8.40041 36.8782 8.6945 36.6613 8.91134C36.4445 9.12818 36.1504 9.25 35.8438 9.25H26.5938C26.2871 9.25 25.993 9.12818 25.7762 8.91134C25.5593 8.6945 25.4375 8.40041 25.4375 8.09375ZM26.5938 13.875C26.2871 13.875 25.993 13.9968 25.7762 14.2137C25.5593 14.4305 25.4375 14.7246 25.4375 15.0312C25.4375 15.3379 25.5593 15.632 25.7762 15.8488C25.993 16.0657 26.2871 16.1875 26.5938 16.1875H35.8438C36.1504 16.1875 36.4445 16.0657 36.6613 15.8488C36.8782 15.632 37 15.3379 37 15.0312C37 14.7246 36.8782 14.4305 36.6613 14.2137C36.4445 13.9968 36.1504 13.875 35.8438 13.875H26.5938ZM31.2188 20.8125C30.9121 20.8125 30.618 20.9343 30.4012 21.1512C30.1843 21.368 30.0625 21.6621 30.0625 21.9688C30.0625 22.2754 30.1843 22.5695 30.4012 22.7863C30.618 23.0032 30.9121 23.125 31.2188 23.125H35.8438C36.1504 23.125 36.4445 23.0032 36.6613 22.7863C36.8782 22.5695 37 22.2754 37 21.9688C37 21.6621 36.8782 21.368 36.6613 21.1512C36.4445 20.9343 36.1504 20.8125 35.8438 20.8125H31.2188ZM31.2188 27.75C30.9121 27.75 30.618 27.8718 30.4012 28.0887C30.1843 28.3055 30.0625 28.5996 30.0625 28.9062C30.0625 29.2129 30.1843 29.507 30.4012 29.7238C30.618 29.9407 30.9121 30.0625 31.2188 30.0625H35.8438C36.1504 30.0625 36.4445 29.9407 36.6613 29.7238C36.8782 29.507 37 29.2129 37 28.9062C37 28.5996 36.8782 28.3055 36.6613 28.0887C36.4445 27.8718 36.1504 27.75 35.8438 27.75H31.2188Z"
                    fill="#794AFF"
                  />
                </svg>
              }
              cardTitle="Problem Solver"
              cardDescription="I am a great problem solver and have good analytical and technical skills"
            />
          </div>
          <div className="home__skills-bottom">
            <SkillCard
              icon={
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 0C8.27875 0 0 8.27875 0 18.5C0 26.6863 5.29562 33.6006 12.6494 36.0519C13.5744 36.2137 13.9213 35.6587 13.9213 35.1731C13.9213 34.7337 13.8981 33.2769 13.8981 31.7275C9.25 32.5831 8.0475 30.5944 7.6775 29.5537C7.46937 29.0219 6.5675 27.38 5.78125 26.9406C5.13375 26.5938 4.20875 25.7381 5.75812 25.715C7.215 25.6919 8.25562 27.0562 8.6025 27.6112C10.2675 30.4094 12.9269 29.6231 13.9906 29.1375C14.1525 27.935 14.6381 27.1256 15.17 26.6631C11.0538 26.2006 6.7525 24.605 6.7525 17.5287C6.7525 15.5169 7.46938 13.8519 8.64875 12.5569C8.46375 12.0944 7.81625 10.1981 8.83375 7.65438C8.83375 7.65438 10.3831 7.16875 13.9213 9.55062C15.4012 9.13438 16.9738 8.92625 18.5463 8.92625C20.1188 8.92625 21.6913 9.13438 23.1713 9.55062C26.7094 7.14563 28.2588 7.65438 28.2588 7.65438C29.2763 10.1981 28.6287 12.0944 28.4438 12.5569C29.6231 13.8519 30.34 15.4937 30.34 17.5287C30.34 24.6281 26.0156 26.2006 21.8994 26.6631C22.57 27.2412 23.1481 28.3512 23.1481 30.0856C23.1481 32.56 23.125 34.5488 23.125 35.1731C23.125 35.6587 23.4719 36.2369 24.3969 36.0519C28.0697 34.8123 31.2612 32.4521 33.5221 29.3034C35.783 26.1548 36.9994 22.3763 37 18.5C37 8.27875 28.7213 0 18.5 0Z"
                    fill="#794AFF"
                  />
                </svg>
              }
              cardTitle="Version Control"
              cardDescription="I exceptionally good with the github version control system and can collaborate with a team"
            />
            <SkillCard
              icon={
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 18.5C15.7149 18.5 17.4795 17.7691 18.7806 16.4681C20.0816 15.167 20.8125 13.4024 20.8125 11.5625C20.8125 9.72256 20.0816 7.95798 18.7806 6.65695C17.4795 5.35591 15.7149 4.625 13.875 4.625C12.0351 4.625 10.2705 5.35591 8.96945 6.65695C7.66841 7.95798 6.9375 9.72256 6.9375 11.5625C6.9375 13.4024 7.66841 15.167 8.96945 16.4681C10.2705 17.7691 12.0351 18.5 13.875 18.5ZM2.3125 32.375C2.3125 32.375 0 32.375 0 30.0625C0 27.75 2.3125 20.8125 13.875 20.8125C25.4375 20.8125 27.75 27.75 27.75 30.0625C27.75 32.375 25.4375 32.375 25.4375 32.375H2.3125ZM25.4375 8.09375C25.4375 7.78709 25.5593 7.493 25.7762 7.27616C25.993 7.05932 26.2871 6.9375 26.5938 6.9375H35.8438C36.1504 6.9375 36.4445 7.05932 36.6613 7.27616C36.8782 7.493 37 7.78709 37 8.09375C37 8.40041 36.8782 8.6945 36.6613 8.91134C36.4445 9.12818 36.1504 9.25 35.8438 9.25H26.5938C26.2871 9.25 25.993 9.12818 25.7762 8.91134C25.5593 8.6945 25.4375 8.40041 25.4375 8.09375ZM26.5938 13.875C26.2871 13.875 25.993 13.9968 25.7762 14.2137C25.5593 14.4305 25.4375 14.7246 25.4375 15.0312C25.4375 15.3379 25.5593 15.632 25.7762 15.8488C25.993 16.0657 26.2871 16.1875 26.5938 16.1875H35.8438C36.1504 16.1875 36.4445 16.0657 36.6613 15.8488C36.8782 15.632 37 15.3379 37 15.0312C37 14.7246 36.8782 14.4305 36.6613 14.2137C36.4445 13.9968 36.1504 13.875 35.8438 13.875H26.5938ZM31.2188 20.8125C30.9121 20.8125 30.618 20.9343 30.4012 21.1512C30.1843 21.368 30.0625 21.6621 30.0625 21.9688C30.0625 22.2754 30.1843 22.5695 30.4012 22.7863C30.618 23.0032 30.9121 23.125 31.2188 23.125H35.8438C36.1504 23.125 36.4445 23.0032 36.6613 22.7863C36.8782 22.5695 37 22.2754 37 21.9688C37 21.6621 36.8782 21.368 36.6613 21.1512C36.4445 20.9343 36.1504 20.8125 35.8438 20.8125H31.2188ZM31.2188 27.75C30.9121 27.75 30.618 27.8718 30.4012 28.0887C30.1843 28.3055 30.0625 28.5996 30.0625 28.9062C30.0625 29.2129 30.1843 29.507 30.4012 29.7238C30.618 29.9407 30.9121 30.0625 31.2188 30.0625H35.8438C36.1504 30.0625 36.4445 29.9407 36.6613 29.7238C36.8782 29.507 37 29.2129 37 28.9062C37 28.5996 36.8782 28.3055 36.6613 28.0887C36.4445 27.8718 36.1504 27.75 35.8438 27.75H31.2188Z"
                    fill="#794AFF"
                  />
                </svg>
              }
              cardTitle="Problem Solver"
              cardDescription="I am a great problem solver and have good analytical and technical skills"
            />
            <SkillCard
              icon={
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 18.5C15.7149 18.5 17.4795 17.7691 18.7806 16.4681C20.0816 15.167 20.8125 13.4024 20.8125 11.5625C20.8125 9.72256 20.0816 7.95798 18.7806 6.65695C17.4795 5.35591 15.7149 4.625 13.875 4.625C12.0351 4.625 10.2705 5.35591 8.96945 6.65695C7.66841 7.95798 6.9375 9.72256 6.9375 11.5625C6.9375 13.4024 7.66841 15.167 8.96945 16.4681C10.2705 17.7691 12.0351 18.5 13.875 18.5ZM2.3125 32.375C2.3125 32.375 0 32.375 0 30.0625C0 27.75 2.3125 20.8125 13.875 20.8125C25.4375 20.8125 27.75 27.75 27.75 30.0625C27.75 32.375 25.4375 32.375 25.4375 32.375H2.3125ZM25.4375 8.09375C25.4375 7.78709 25.5593 7.493 25.7762 7.27616C25.993 7.05932 26.2871 6.9375 26.5938 6.9375H35.8438C36.1504 6.9375 36.4445 7.05932 36.6613 7.27616C36.8782 7.493 37 7.78709 37 8.09375C37 8.40041 36.8782 8.6945 36.6613 8.91134C36.4445 9.12818 36.1504 9.25 35.8438 9.25H26.5938C26.2871 9.25 25.993 9.12818 25.7762 8.91134C25.5593 8.6945 25.4375 8.40041 25.4375 8.09375ZM26.5938 13.875C26.2871 13.875 25.993 13.9968 25.7762 14.2137C25.5593 14.4305 25.4375 14.7246 25.4375 15.0312C25.4375 15.3379 25.5593 15.632 25.7762 15.8488C25.993 16.0657 26.2871 16.1875 26.5938 16.1875H35.8438C36.1504 16.1875 36.4445 16.0657 36.6613 15.8488C36.8782 15.632 37 15.3379 37 15.0312C37 14.7246 36.8782 14.4305 36.6613 14.2137C36.4445 13.9968 36.1504 13.875 35.8438 13.875H26.5938ZM31.2188 20.8125C30.9121 20.8125 30.618 20.9343 30.4012 21.1512C30.1843 21.368 30.0625 21.6621 30.0625 21.9688C30.0625 22.2754 30.1843 22.5695 30.4012 22.7863C30.618 23.0032 30.9121 23.125 31.2188 23.125H35.8438C36.1504 23.125 36.4445 23.0032 36.6613 22.7863C36.8782 22.5695 37 22.2754 37 21.9688C37 21.6621 36.8782 21.368 36.6613 21.1512C36.4445 20.9343 36.1504 20.8125 35.8438 20.8125H31.2188ZM31.2188 27.75C30.9121 27.75 30.618 27.8718 30.4012 28.0887C30.1843 28.3055 30.0625 28.5996 30.0625 28.9062C30.0625 29.2129 30.1843 29.507 30.4012 29.7238C30.618 29.9407 30.9121 30.0625 31.2188 30.0625H35.8438C36.1504 30.0625 36.4445 29.9407 36.6613 29.7238C36.8782 29.507 37 29.2129 37 28.9062C37 28.5996 36.8782 28.3055 36.6613 28.0887C36.4445 27.8718 36.1504 27.75 35.8438 27.75H31.2188Z"
                    fill="#794AFF"
                  />
                </svg>
              }
              cardTitle="Problem Solver"
              cardDescription="I am a great problem solver and have good analytical and technical skills"
            />
          </div>
        </div>
      </div>
      <div className="project">
        <h2 className="project-title">SOME OF MY WORK</h2>
        <Link target='_blank' to='https://takealot-clone-ef7fb.web.app/'>
        <ProjectCard
          title="TakeAlot Clone"
          description="An E-commerce site which was inspired by Takealot.com, made and built to showcase some development skills.Create an account buy items and add them to the cart and checkout to pay."
          languages="React | FireBase | FakeAPIStore | Material UI | Webhook"
          githubLink=""
          image={TakeAlotClone}
        />
        </Link>
        
      </div>
    </div>
  );
}

export default Home;
