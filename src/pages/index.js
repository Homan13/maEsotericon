import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import mae2021 from '../assets/images/mae2021.jpg';

import jaime from '../assets/images/jaimeLamb-2021Bio.jpg';
import benWilliams from '../assets/images/benWilliams-2021Bio.jpg';
import adam from '../assets/images/adamGoldman-2021Bio.jpg';
import chuck from '../assets/images/chuckDunning-2021Bio.jpg';
import ryan from '../assets/images/ryanFlynn-2021Bio.jpg';
import benWallace from '../assets/images/benWallace-2021Bio.jpg';
import justin from '../assets/images/justinSledge-2021Bio.jpg';
import mitch from '../assets/images/mitchHorowitz-2021Bio.jpg';

import txCon from '../assets/images/tx-con-copy.jpg';
import campMasonry from '../assets/images/Camp-Masonry.jpg';

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

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About the Conference</h2>
            <p className="text-white-50">
            The Mid-Atlantic Esotericon is the first of its kind conference for and about Esoteric, 
            Hermetic, Initiatic, and Transcendental topics. Founded in 2019, our mission is to 
            bring together like-minded individuals for a day of education, fellowship and immersion in 
            an effort to break the stigma associated with Esoteric topics.
            </p>
            <p className="text-white-50">
            It's that time of year again, and we have just announced that the 2021 Edition of 
            Esotericon will again be virtual. With the success of last year’s fully virtual event,  
            we are confident that we again can provide you all with amazing, worthwhile, and 
            relevant education.  New speakers, new extra content, and a day filled with new ways to 
            look at the world without, and the world within.
            </p>
            <h2 className="text-white mb-4">
              <a href="https://www.gktw.org/">Give Kids the World Village</a>
            </h2>
          </div>
        </div>
        <img src={mae2021} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="purchase" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Standard Event Pricing Coming Soon!</h2>
            <p className="text-white-50">
            Thank you all for the overwhelming support! Early bird tickets have now closed. Don't
            worry though, if you haven't purchased ticket yet standard pricing tickets will be 
            going on sale shortly!
            </p>
          </div>
        </div>
      </div>
</section>

    <section id="speakers" className="speakers-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
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

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={jaime} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Jaime Paul Lamb</h4>
                  <p className="mb-0 text-white-50">
                  Jaime Paul Lamb is the author of MYTH, MAGICK & MASONRY: Occult Perspectives in 
                  Freemasonry and APPROACHING THE MIDDLE CHAMBER: The Seven Liberal Arts in Freemasonry 
                  and the Western Esoteric Tradition He is a member of Old Well-Saint John’s Lodge no. 6, F.&A.M., 
                  Norwalk, CT; a Charter member of Ascension Lodge no. 89, F.&A.M., Phoenix, AZ; a 
                  frater of the Arizona College of the Societas Rosicruciana in Civitatibus Foederatis; 
                  and is Past Master of Arizona Research Lodge no. 1 for the year 2016. Lamb has been 
                  writing and lecturing on Masonic and occult subjects since 2014.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={benWilliams} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Ben Williams</h4>
                  <p className="mb-0 text-white-50">
                  In the Blue Lodge, Ben is a Past Master of Telluride and Norwood Lodges in Colorado and 
                  currently serves as the Secretary of Research Lodge of Colorado. He publishes the Rocky 
                  Mountain Mason and Esoteric Mason magazines and hosts the Rocky Mountain Mason podcast.
                  Among other places, he has been published in the Knight Templar magazine, the Philalethes 
                  Journal of Masonic Research, and most recently his paper on “Masonry in ‘Pike’s Peak Country’” 
                  was selected for publication in Quattuor Coronati’s Freemasonry on the Frontier.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={adam} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Adam Goldman</h4>
                  <p className="mb-0 text-white-50">
                  Worshipful Brother Adam Goldman is the Grand Orator for the Grand Lodge of Washington, DC 
                  FAAM, and the Orator for DC’s premier Esoteric Lodge, Benjamin B. French No. 15.  He is 
                  also an Officer in both of the major Rites and a member of several Grand Lodges and/or Research 
                  Lodges in California, Europe, and Central America. Additionally, WB Goldman is active in 
                  several Occult bodies that focus on the Western Esoteric Tradition—such as the Masonic 
                  Rosicrucians in England and America.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={chuck} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Chuck Dunning</h4>
                  <p className="mb-0 text-white-50">
                  Chuck is an advocate, facilitator, and consultant in contemplative practice. With more than 
                  30 years in the professional fields of higher education and mental health, as well as in 
                  Masonry and other currents in the Western esoteric traditions, Chuck’s consistent commitment 
                  is to the actual practice of internal disciplines to facilitate and enhance experiences of 
                  initiation and transformation. With that aim, he has authored Contemplative Masonry: Basic 
                  Applications of Mindfulness, Meditation, and Imagery for the Craft, and was a contributing 
                  author in The Art and Science of Initiation.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={ryan} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Ryan Flynn</h4>
                  <p className="mb-0 text-white-50">
                  RW Ryan Flynn is a member of Phoenix Lodge No. 105 in Tilton, NH and is a current District Deputy 
                  Grand Education Officer for the Grand Lodge of New Hampshire. He is well known as a Masonic 
                  artist and lecturer who travels around the country using the arts as a teaching tool for deeper 
                  masonic themes and concepts. His artworks have been sold around the world and have been featured 
                  in multiple Masonic publications. He lives in Merrimack, NH with his wife and two daughters.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={benWallace} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Ben Wallace</h4>
                  <p className="mb-0 text-white-50">
                  Brother Benjamin Wallace, a Past Master of Blackmer Lodge No. 127, and Past Master of Wilkerson 
                  College Lodge No. 760, and Past Master and Charter Member of North Carolina’s first Traditional 
                  Observance Lodge, Sophia Lodge No. 767. He is also a friend of the Unknown Philosopher. Brother 
                  Ben is also Co-Author of “A Path to Providence - The Creation of the Middle Chamber Program” 
                  which is soon to be released.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={justin} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Dr. Justin Sledge</h4>
                  <p className="mb-0 text-white-50">
                  Dr. James Justin Sledge was born and raised in a proud working-class Mississippi family.  A 
                  first-generation college student, Dr. Sledge earned his undergraduate degree at Millsaps College 
                  then went for a DRS in religious studies (Western Esotericism and Related Currents) at the 
                  Universiteit van Amsterdam and a MA and PhD in philosophy at the University of Memphis. He is 
                  currently a part-time professor of philosophy and religion at several institutions in the 
                  Metro-Detroit area and a popular local educator.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={mitch} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Mitch Horowitz</h4>
                  <p className="mb-0 text-white-50">
                   Mitch Horowitz is a historian of alternative spirituality and one of today’s most literate voices
                   of esoterica, mysticism, and the occult. Mitch illuminates outsider history, explains its relevance 
                   to contemporary life, and reveals the longstanding quest to bring empowerment and agency to the 
                   human condition.
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
          <a href="https://www.facebook.com/MasonicCon/"><img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/v1608392741/maeGraphics/Other%20Cons/masonicConLogo_cfwwya_fmqsjt.webp"} alt="" /></a>
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
          <a href="https://www.masoniccon.com/"><img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/v1608392831/maeGraphics/Other%20Cons/spmlMasonicCon_xnefay_nj1rw1.webp"} alt="" /></a>
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
          <a href="https://masonicconchicago.com/"><img className="img-fluid" src={"https://res.cloudinary.com/dbglal441/image/upload/v1608392787/maeGraphics/Other%20Cons/mccLogo_kpsvbw_bd0f2i.webp"} alt="" /></a>
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
