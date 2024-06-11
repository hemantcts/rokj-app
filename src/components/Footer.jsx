import React from 'react'
import { Link } from 'react-router-dom'
import newLogo from "../images/new-logo.svg";
import golfLogo from "../images/new-rokj-golftour-logo.svg";
import copyrightLogo from '../images/yellow-loewenmut-logo (2).png';


export default function Footer() {
  return (
    <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="footer-image">
                  <Link href="#">
                    <img className="footer-logo" src={newLogo} alt="" />
                  </Link>
                  <Link href="#">
                    <img className="footer-logo2" src={golfLogo} alt=""
                      style={{ paddingLeft: "30px", borderLeft: "2px solid #eceeee" }} />
                  </Link>
                </div>
                <p className="footer-text">Durch die individuelle Förderung von wirtschaftlich oder sozial
                  benachteiligten Kindern und
                  Jugendlichen unterstützen wir ihre nachhaltige Integration in unsere Gesellschaft.</p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-12 col-md-7 footer-item1">
                    <h3 className="heading">Kontakt</h3>
                    <address>
                      Rotary-Stiftung Illnau-Effretikon
                      <br />
                      Kempttalstrasse 52
                      <br />
                      CH-8308 Illnau
                    </address>
                    <Link href="#">E-Mail</Link>
                  </div>
                  <div className="col-12 col-md-5 footer-item2">
                    <h3 className="heading">Quicklinks</h3>
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#">Über uns</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Idee und Zweck</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Erfahrungsberichte</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Antrag stellen</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Kontakt</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Spenden</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line" />

            <div className="copyright text-center">
              2024 © ROKJ Illnau-Effretikon |
              <Link href="#">Impressum</Link>
              |
              <Link href="#">Datenschutz</Link>
              | Konzept und Design by
              <Link href="#">
                <img src={copyrightLogo} alt="" />
              </Link>
            </div>

          </div>
    </div>
  )
}
