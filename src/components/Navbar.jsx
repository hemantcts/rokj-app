import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../images/LOGO-ROKJ.png';
import copyrightLogo from '../images/yellow-loewenmut-logo (2).png';


export default function Navbar() {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 0) {
            document.getElementById("navid").classList.add("sticky");
        }
        else {
            document.getElementById("navid").classList.remove("sticky")
        }
    })

    useEffect(() => {
        const nav = document.getElementById("navbarSupportedContent");
        nav.style.right = "-100%"
    })

    const handleClick = () => {
        let nav = document.getElementById("navbarSupportedContent");
        let btn = document.getElementById("btn-toogle-id");

        let bar1 = document.getElementById("b1");
        let bar2 = document.getElementById("b2");
        let bar3 = document.getElementById("b3");
        if (nav.style.right === "-100%") {
            bar2.style.display = "none";
            bar1.style.transform = "rotate(45deg)";
            bar3.style.transform = "rotate(-45deg)";
            bar1.style.top = "6px";
            bar3.style.marginBottom = "4px";
            btn.style.padding = "12px 10px"
            nav.style.right = "0";
        }
        else {
            bar2.style.display = "block";
            bar1.style.transform = "rotate(0)";
            bar3.style.transform = "rotate(0)";
            bar1.style.top = "0";
            bar3.style.marginBottom = "0";
            btn.style.padding = "10px";
            nav.style.right = "-100%";
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg my-navbar sticky1" id="navid">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="mybtn1 btn-hover btn-hover2">SPENDEN</button>

                    <button className="navbar-toggler" onClick={handleClick} id="btn-toogle-id" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar bar1" id="b1"></span>
                        <span className="icon-bar bar2" id="b2"></span>
                        <span className="icon-bar bar3" id="b3" style={{ margin: 0 }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Über uns</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Idee und Zweck</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Erfahrungsberichte</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Antrag stellen</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Kontakt</Link>
                            </li>
                            <li className="nav-item">
                                <button className="mybtn1 btn-hover temp-btn">SPENDEN</button>
                            </li>
                        </ul>
                        <div className="copyright2 copyright">
                            2024 © ROKJ Illnau-Effretikon |
                            <Link to="/">Impressum</Link>
                            |
                            <Link to="/">Datenschutz</Link>
                            <br />
                            Konzept und Design by
                            <Link to="/">
                                <img src={copyrightLogo} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
