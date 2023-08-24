import React from "react";
import Logo from "../img/Logo.svg";
import Tg from "../img/tg.svg";
import Instagram from "../img/instagram.svg";
import Youtube from "../img/youtube.svg";
import { getText } from "./Locales";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-info">
          <div>
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="Logo" />
            </a>
            <div className="footer-block block-close">
              <a href="/">
                <img src={Tg} alt="Tg" />
              </a>
              <a href="/">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="/">
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#uslug">
                {getText("nav1")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {getText("nav2")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                {getText("nav3")}
              </a>
            </li>
            <li className="nav-item item_call">
              <a className="nav-link" href="#call">
                {getText("nav4")}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav-border">
            <li className="nav-item">{getText("telNumber")}</li>
            <li className="nav-item">
              <a href="tel:+998333000057" style={{ textDecoration: "none" }}>
                +998333000057
              </a>
            </li>
            <li className="nav-item">{getText("address")}</li>
            <li className="nav-item item_call">{getText("location")}</li>
          </ul>
          <div className="footer-btn">
            <div className="footer-block block">
              <a href="https://t.me/gulchehra57">
                <img src={Tg} alt="Tg" />
              </a>
              <a href="https://www.instagram.com/cleaning_by_gunaydin/">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="/">
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
            <div className="button_center btn-center">
              <a
                href="#call"
                style={{ textDecoration: "none" }}
                className="call_button"
              >
                {getText("nav4")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
