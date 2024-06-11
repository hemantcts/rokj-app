import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import banner2 from "../images/Kontakt-responsive-img.png"
import emailIcon from "../images/email_icon.svg"
import locationIcon from "../images/location_icon.svg"

export default function Contact() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <section className="bg_banner inner_banner" style={{backgroundImage:`url("${banner2}")`}}>
    <img src={banner2} className="responsive_banner"/>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="banner_content">
						<div className="banner_breadcrumbs">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="https://www.rokj-ilef.ch/">
											<div className="breadcrumbs_home">Home</div>
										</a></li>
									<li className="breadcrumb-item active" aria-current="page">Kontakt</li>
								</ol>
							</nav>
						</div>
						<h1>Kontakt</h1>
					</div>
				</div>
			</div>
		</div>
	</section>

  <section className="wi_full pb-5 purpose_sec kontakt_sec">
		<div className="container">
			<div className="list_position">
				<div className="row">
					<div className="col-12 col-lg-6 mb-4">
						<div className="list_item green_color">
							<img src={emailIcon}/>
							<h3>Adresse</h3>
							<address>Rotary-Stiftung Illnau-Effretikon<br />
Kempttalstrasse 52<br />
CH-8308 Illnau</address>
						</div>
					</div>
					<div className="col-12 col-lg-6 mb-4">
						<div className="list_item blue_color">
							<img src={locationIcon} className="email_icon"/>
							<h3>E-Mail</h3>
							<a href="mailto:info@rokj-ilef.ch">info@rokj-ilef.ch</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  <section className="wi_full py_3 award_sec support_sec">
		<div className="container">
		 <div className="award_detail">
           <div className="row align-items-center">
			<div className="col-12 col-lg-6">
				<div className="award_img">
					<img src="https://www.rokj-ilef.ch/wp-content/uploads/2023/12/gettyimages-172601204-170667a_copy-1.png"/>
				</div>
			</div>
			<div className="col-12 col-lg-6">
				<div className="award_content">
					<h2>Wir brauchen Ihre Unterstützung!</h2>
					<a href="https://www.rokj-ilef.ch/spenden/" className="button">JETZT SPENDEN</a>
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
  )
}
