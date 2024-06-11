import React, { useCallback, useEffect } from 'react';
import banner from '../images/banner-img.png';
import image1 from '../images/javier-trueba-iqpr1xkf5f0-unsplash-2560-hq.png';
import image2 from "../images/barometer-graph-1.svg";
import image3 from "../images/ashton-bingham-sahbl2upxco-unsplash.png";
import image4 from "../images/rokj-erfahrungsbericht-4-610-hq.png";
import image5 from "../images/rokj-erfahrungsbericht-1-610-hq.png";
import image6 from "../images/rokj-erfahrungsbericht-2.png";
import image7 from "../images/4uQJ0h1QvGk-HD.png";
import image8 from "../images/Group 12.png";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

   
export default function Home() {

  return (

    <>
      <div>
        <header>
          <Navbar/>
        </header>
        <section>
          <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="inside-banner">
                    <h1 className="heading">ROKJ Illnau-Effretikon <br /> kein Kind im Abseits</h1>

                    <p>Durch die individuelle Förderung von wirtschaftlich oder sozial benachteiligten Kindern
                      und Jugendlichen unterstützen wir ihre nachhaltige Integration in unsere Gesellschaft.
                    </p>
                    <div style={{ display: 'inline' }}>
                      <Link className="mybtn1 btn-hover" href="#">SPENDEN</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container position">
            <div className="row">
              <div className="col-12 col-lg-4 mb-4">
                <div className="items item1">
                  <h3 className="heading">Idee/Zweck</h3>
                  <p>Ziele, Visionen und unser Engagement</p>
                  <Link className="my-btn my-btn2 mybtn1" href="#">MEHR ERFAHREN</Link>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4">
                <div className="items item2">
                  <h3 className="heading">Spenden</h3>
                  <p>Jetzt Jugendliche und Kinder der Region Winterthur unterstützen</p>
                  <Link className="my-btn my-btn2 mybtn4" href="#">MEHR ERFAHREN</Link>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4">
                <div className="items item3">
                  <h3 className="heading">Erfolge</h3>
                  <p>Was ROKJ schon geschafft hatt</p>
                  <Link className="my-btn my-btn2 mybtn5" href="#">MEHR ERFAHREN</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="spacing">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="main-item1">
                  <div className="title">ROKJ Illnau-Effretikon</div>
                  <h2 className="heading">Über uns</h2>
                  <p>Das Projekt «Rotary und Inner Wheel für Kinder und Jugendliche aus sozial benachteiligten
                    Familien (ROKJ)» wurde im November 2008 auf Initiative von Toni Schönenberger im Kanton
                    Thurgau
                    initiiert. </p>
                  <Link className=" btn-hover mybtn2" href="#">MEHR</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main-item2">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="spacing graph-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h2>Spendenbarometer</h2>
                <p>Damit auch Sie den Fortschritt unserer Unterstützung mitverfolgenden können, zeigen wir Ihnen
                  laufend unseren Spendenerfolg.</p>
              </div>
              <img src={image2} alt="" />
              <strong>Vielen Dank für Ihre Unterstützung!</strong>
            </div>
          </div>
        </section>

        <section className="spacing section3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="info-pic">
                  <img src={image3} style={{ width: "100%" }} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inside-info2">
                  <div className="title">ROKJ Illnau-Effretikon</div>
                  <h2>«Als Kind ist jeder ein Künstler. Die Schwierigkeit liegt darin, als Erwachsener einer zu
                    bleiben.»
                  </h2>
                  <h3>Pablo Picasso</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container my-4">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="info3">
                  <div className="title">ROKJ Illnau-Effretikon</div>
                  <h2>Erfahrungsberichte</h2>
                  <p>Hier zeigen wir Ihnen einen kleinen Einblick in unsere Projekte, welche mit Ihrer Hilfe
                    verwirklicht
                    werden konnten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="spacing">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 my-3">
                <div className="card">
                  <div className="card-pic">
                    <div className="card-pic2">
                      <img src={image4} className="card-img-top" alt="..." />
                      <div className="date">
                        23.August 2023
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="heading">Robo Sapiens an die WM in Panama</h4>
                    <p className="card-text">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit</p>
                  </div>

                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 my-3">
                <div className="card">
                  <div className="card-pic">
                    <div className="card-pic2">
                      <img src={image5} className="card-img-top" alt="..." />
                      <div className="date">
                        23.August 2023
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="heading">Eine Querflöte für Maria</h4>
                    <p className="card-text">Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
                      neque elit.</p>
                  </div>

                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 my-3">
                <div className="card">
                  <div className="card-pic">
                    <div className="card-pic2">
                      <img src={image6} className="card-img-top" alt="..." />
                      <div className="date">
                        23.August 2023
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="heading">Sereina geht ins Reitlager</h4>
                    <p className="card-text">Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                      pharetra, erat sed fermentum feugiat, velit mauris egestas quam.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="spacing pt-5 last-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="inside-info4">
                  <h2>Lernen Sie uns <br /> besser kennen</h2>
                  <p>Ein kleiner Einblick in unsere Arbeit…</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="video-box">
                  <img src={image7} style={{ width: "100%" }} alt="" />

                  <div className="video-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src={image8} alt="" />
                  </div>

                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="modal fade v-modal" id="exampleModal" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <iframe id="ytv" width="100%" height="315"
                              src="https://www.youtube.com/embed/4uQJ0h1QvGk?si=XSMPhkJOkzq42OXc"
                              title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                            <div className="cross">
                              <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        <footer>
          <Footer/>
        </footer>
      </div>

    </>
  )
}
