import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import PaypalExpressBtn from '../components/PayPalBtn';

import masonicCon from '../assets/images/masonicConLogo.jpg';
import txCon from '../assets/images/tx-con-copy.jpg';
import mcc from '../assets/images/mccLogo.jpg';
import campMasonry from '../assets/images/Camp-Masonry.jpg';
import spml from '../assets/images/SPML_Masonic-Con_Color.jpg';
import esotericon from '../assets/images/Esotericon2020.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="purchase" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Purchase your Esotericon 2021 tickets now!</h2>
            <div className="mx-auto text-center">
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="5B7KJXWPUPEMY" />
                  <table>
                    <tr><td><input type="hidden" name="on0" value="2021 MAE Ticket(s)" />2021 MAE Ticket(s)</td></tr><tr><td><select name="os0">
	                    <option value="Virtual Only (Donation)">Virtual Only (Donation) $1.00 USD</option>
	                    <option value="Virtual + Swag + Shipping (Donation)">Virtual + Swag + Shipping (Donation) $2.00 USD</option>
	                    <option value="In-Person + Swag (Donation)">In-Person + Swag (Donation) $3.00 USD</option>
	                    <option value="In-Person + Swag + Brew Night (Donation)">In-Person + Swag + Brew Night (Donation) $5.00 USD</option>
	                    <option value="VIP Pass (Donation)">VIP Pass (Donation) $450.00 USD</option>
	                    <option value="Tarot Reading (Donation)">Tarot Reading (Donation) $5.00 USD</option>
                    </select> </td></tr>
                  </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About the Conference</h2>
            <p className="text-white-50">
              The Mid-Atlantic Esotericon is the first of its kind conference
              for, and about Esoteric Masonry and Esoteric topics. Founded in
              2019, our mission is to bring together like-minded individuals for
              a day of education, fellowship and immersion in an effort to break
              the stigma associated with Esoteric topics.
            </p>
            <p className="text-white-50">
              We are truly humbled over the support of our attendees and speakers in making
              this years event another success! Thank you to all that showed up, to our
              speakers, and to Jaime and Angel for doing tarot readings all day. We also
              of course are especially grateful for all the donations made to Give Kids
              the World. You can donate through the link below to help make a difference
              in a families life! We know that a 100% virtual conference wasn't what any
              of us had in mind, but unfortunately that's what we were given, and thanks
              to you all it was a great day. Survey's should be coming shortly, speaker
              videos are being worked on and will be shared as soon as they're ready.
              Don't forget to mark your calendars for June 11th and 12th for Mid-Atlantic
              Esotericon 2021!
            </p>
            <h2 className="text-white mb-4">
              <a href="https://www.gktw.org/">Give Kids the World Village</a>
            </h2>
          </div>
        </div>
        <img src={esotericon} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="speakers" className="speakers-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            {/* <img className="img-fluid mb-3 mb-lg-0" src={attendees} alt="" /> */}
            <iframe width="560" height="315" src='https://www.youtube.com/embed/N7rdcHxPJKI'
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    title='Roadmap to Freemasonry: Joe and Kevin Mid-Atlantic Esotericon 2019'
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Hosts</h4>
              <p className="text-black-50 mb-0">
                Hear our hosts talk to Brother Juan Sepulveda from RoadMap to Freemasonry talk about
                what motivated them to start up the Mid-Atlantic Esotericon.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={comingSoon} alt="https://www.freepik.com/free-photos-vectors/clock" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="speakers-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">2020 Conference Speakers</h4>
                  <p className="mb-0 text-white-50">
                    Stay tuned for coming announcements on our 2020 speaker lineup!
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/f_auto,q_auto/v1584880918/maeGraphics/2020%20Speakers/chuckDunning2020_yqhnxg.webp"} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Bro. C.R. "Chuck" Dunning Jr.</h4>
                  <p className="mb-0 text-white-50">
                  Chuck is an advocate, facilitator, and consultant in contemplative practice. With 
                  more than 30 years in the professional fields of higher education and mental health, 
                  as well as in Masonry and other currents in the Western esoteric traditions, 
                  Chuck’s consistent commitment is to the actual practice of internal disciplines 
                  to facilitate and enhance experiences of initiation and transformation.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/f_auto,q_auto/v1584880918/maeGraphics/2020%20Speakers/donMcAndrews2020_sgym7g.webp"} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">RW Donald McAndrews</h4>
                  <p className="mb-0 text-white-50">
                  Donald McAndrews was raised to the Sublime Degree of Master Mason in Iowa in 1970 
                  and has a Masonic career that spans several lifetimes. Most notably, Don has served as 
                  the Grand High Priest of Royal Arch Masons in Virginia in 2015, Most Illustrious Grand 
                  Master of Cryptic Masons in the District of Columbia in 2016 and is Past District 
                  Deputy Grand Master for the 4th Masonic District in the Grand Lodge of Virginia.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/f_auto,q_auto/v1584880918/maeGraphics/2020%20Speakers/joeWages2020_ripkm0.webp"} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Bro. Josef Wages, 32°</h4>
                  <p className="mb-0 text-white-50">
                  Bro Wäges 32°, is a member of the Blue Friars, Plano Lodge #768, Fate Lodge #802, the
                  Dallas Valley of the AASR, Fellow of the Grand College of Rites, and several
                  Lodges of Research. Editor of The Secret School of Wisdom, the Authentic Rituals and
                  Doctrines of the Illuminati, L'École secrète de sagesse, Rituels et doctrines authentiques des
                  Illuminati: Une école secrète de Sagesse, and On Materialism and Idealism. He is currently
                  preparing the forthcoming books, Ecossais Masonry: A History of the High Degrees from the Scots
                  Master to the Order of the Royal Secret, for SRRS, the Columbian Illuminati, The Improved System of the Illuminati.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/f_auto,q_auto/v1584880918/maeGraphics/2020%20Speakers/daveBacon2020_iqdy4h.webp"} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Bro Dave Bacon</h4>
                  <p className="mb-0 text-white-50">
                  Bro. Dave Bacon is a member of Philadelphia Lodge No. 177, in New Philadelphia, OH as well as 
                  Ashlar Lodge No. 639 in Twinsburg, OH. A lifelong artist and entrepreneur, Bro. Dave is the 
                  owner and operator of Spellbound Tattoos in Massillon, Ohio and has sought to blend the arts 
                  into Freemasonry with his previous work with Cornerstone Regalia and Ashlar Aprons. Bro. Dave 
                  is also passionate about esoteric subjects and has given lectures on symbolic interpretation 
                  throughout Ohio and Virginia. Bro. Dave has also written extensively about his Masonic experiences 
                  in his blog Between the Compasses.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/f_auto,q_auto/v1584880918/maeGraphics/2020%20Speakers/angelMillar2020_ttigb8.webp"} alt="Copyright Leticia Burgos 2019" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Angel Millar</h4>
                  <p className="mb-0 text-white-50">
                  Angel Millar is the author of The Three Stages of Initiatic Spirituality: Craftsman, Warrior, 
                  Magician, which explores the three archetypes, from their appearance in ancient, tribal society, 
                  through ancient Greek thought, Buddhism, and Hinduism to the martial arts, Kundalini, Tantra, 
                  inner alchemy, and psychology.

                  Millar is also the author of several books on the history of Freemasonry and a well-lecturer on 
                  the subjects of self-mastery, spirituality, and esotericism. New Dawn magazine has described his 
                  work as “…of extraordinary importance in this time of cultural and even spiritual conflict.”
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/f_auto,q_auto/v1584880918/maeGraphics/2020%20Speakers/rjJohnson2020_s4dgoy.webp"} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">R.W. Robert H. Johnson</h4>
                  <p className="mb-0 text-white-50">
                  Philosophy is at the core of what Robert is after. Having grown up in Italy and being exposed 
                  to the culture and much of the renaissance art and literature, Freemasonry became a natural 
                  place for him to gravitate toward. He is an avid musician and writer. He’s written for several 
                  print magazines and blogs on subjects ranging from Firearms and Medical Ethics to Theology and 
                  Comparative Religions. Robert's primary studies are in philosophy and mathematics. He also 
                  holds an honorary Doctorate Degree in Philosophy in Religion.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="friends" className="friends-section bg-light">
    <div className="container">
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <a href="https://www.facebook.com/MasonicCon/"><img className="img-fluid" src={masonicCon} alt="" /></a>
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="friends-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">
                  Ezekiel Bates Lodge Masonic Con
                </h4>
                <p className="mb-0 text-white-50">
                  The Masonic Con that started it all, hosted by the Brethren
                  of Ezekiel Bates Lodge in Attelboro MA, for the past four
                  years Masonic Con has hosted a wide range of speakers, and
                  Masonic vendors and has inspired us, and other Masonic
                  Conferences to bring education to the Masonic masses!
                </p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <a href="http://campmasonry.xara.hosting//"><img className="img-fluid" src={campMasonry} alt="" /></a>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="friends-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Camp Masonry</h4>
                <p className="mb-0 text-white-50">
                  What started out as a camping trip between the four Lodges
                  in their Masonic District has now grown into a Masonic
                  phenominon bringing in Masons from across the country.
                  Including speakers, ritual work, a Grand Masters class,
                  festive board and a night time Master Mason Degree that
                  can't be found anywhere else. Join the Brethren of Ohio for
                  a truly unique Masonic experience!
                </p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <a href="https://www.texasmasonicon.com/"><img className="img-fluid" src={txCon} alt="" /></a>
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="friends-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Texas Masonic Con</h4>
                <p className="mb-0 text-white-50">
                  Started in 2018 by several Brethren of Ft Worth Lodge No
                  148, the Texas Masonic Con was a way for these Brethren to
                  offer Masonic education to a wider audience than just their
                  Lodge.
                </p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <a href="https://www.masoniccon.com/"><img className="img-fluid" src={spml} alt="" /></a>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="friends-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">SPML Masonic Con</h4>
                <p className="mb-0 text-white-50">
                  The west coast Masonic Con started by Brethren from South
                  Pasadena Masonic Lodge. This event boasts a festive board,
                  distinguished group of Masonic scholars as well as the
                  screening of several Masonic related movies.
                </p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <a href="https://masonicconchicago.com/"><img className="img-fluid" src={mcc} alt="" /></a>
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="friends-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Masonic Con Chicago</h4>
                <p className="mb-0 text-white-50">
                  The latest Masonic conference to come on the scene, with an
                  eye on Freemasons in the mid-west. Held in the Windy City
                  Chicago, Masonic Con Chicago will hold its first conference
                  in September of 2020.
                </p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
