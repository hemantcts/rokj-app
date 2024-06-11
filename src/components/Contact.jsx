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

      <section class="bg_banner inner_banner" style={{backgroundImage:`url("${banner2}")`}}>
    <img src={banner2} class="responsive_banner"/>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="banner_content">
						<div class="banner_breadcrumbs">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="https://www.rokj-ilef.ch/">
											<div class="breadcrumbs_home">Home</div>
										</a></li>
									<li class="breadcrumb-item active" aria-current="page">Kontakt</li>
								</ol>
							</nav>
						</div>
						<h1>Kontakt</h1>
					</div>
				</div>
			</div>
		</div>
	</section>

  <section class="wi_full pb-5 purpose_sec kontakt_sec">
		<div class="container">
			<div class="list_position">
				<div class="row">
					<div class="col-12 col-lg-6 mb-4">
						<div class="list_item green_color">
							<img src={emailIcon}/>
							<h3>Adresse</h3>
							<address>Rotary-Stiftung Illnau-Effretikon<br />
Kempttalstrasse 52<br />
CH-8308 Illnau</address>
						</div>
					</div>
					<div class="col-12 col-lg-6 mb-4">
						<div class="list_item blue_color">
							<img src={locationIcon} class="email_icon"/>
							<h3>E-Mail</h3>
							<a href="mailto:info@rokj-ilef.ch">info@rokj-ilef.ch</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  <section class="wi_full py_3 award_sec support_sec">
		<div class="container">
		 <div class="award_detail">
           <div class="row align-items-center">
			<div class="col-12 col-lg-6">
				<div class="award_img">
					<img src="https://www.rokj-ilef.ch/wp-content/uploads/2023/12/gettyimages-172601204-170667a_copy-1.png"/>
				</div>
			</div>
			<div class="col-12 col-lg-6">
				<div class="award_content">
					<h2>Wir brauchen Ihre Unterstützung!</h2>
					<a href="https://www.rokj-ilef.ch/spenden/" class="button">JETZT SPENDEN</a>
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
