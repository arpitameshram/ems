import React, { useState } from "react";
import UserSidebar from "./UserSidebar";

export default function Caterings() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: 0,
          padding: 0,
          flexDirection: isSidebarVisible ? "row" : "column",
        }}
      >
        {isSidebarVisible && <UserSidebar />}
        <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
                style={{ width: "20%" }}
                onClick={handleToggleSidebar}
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
              <div>
                <h3 className="text-info">HOTELS & EVENTS</h3>
              </div>
              <div>
                <p>
                  Welcome{" "}
                  {/* {session.getAttribute('User_gender').equals('male') ? 'Mr.' : 'Miss.'}{' '} */}
                  {/* <span className="font-weight-bold text-info">{User_firstname} {User_lastname}</span> */}
                </p>
              </div>
            </div>
          </nav>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"
          />

          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-sm-12">
                <h4 class="text-uppercase">Hotels</h4>
              </div>
            </div>
          </div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://api.blessingsonthenet.com/uploads/hotels/3af9e841613bcabff7d605bc8aac566e-1688986894063-The%20Oberoi%20Hotel%20Mumbai_1.webp"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">The Oberoi</h5>
                      <p className="card-text">
                        We see an organisation which aims at leadership in the
                        hospitality industry by understanding its guests; and
                        designing and delivering products and services which
                        enable it to exceed....
                      </p>
                      <a
                        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_ys67xbKDAxXlCHsHHVjLAqQYABABGgJ0bQ&ase=2&gclid=Cj0KCQiA1rSsBhDHARIsANB4EJb9Vi8UBC9NIC9LDSm9vy4EpTeD7ZuvInk5vRKE5yxFhEsWpxVj0p0aAsHFEALw_wcB&ohost=www.google.com&cid=CAESVuD2zb960A1mVtSXWoc-ir-KQ-HTiS1MYUGSKtbLGvj6dQGPs7G54UAmzbY6V3GKNcqlgIfySFszDr8T3EQMjjEsLyPU1q_WhSEe3MG4_KWg2WfbDgDI&sig=AOD64_1kfJSsNaBKs9pH4Vu_tJL-fJDw-g&q&nis=4&adurl&ved=2ahUKEwiesMK7xbKDAxUtc_UHHXIyAv8Q0Qx6BAgKEAM"
                        class="btn btn-primary"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://media.radissonhotels.net/image/radisson-hotel-mumbai-goregaon/exterior/16256-114082-f63669352_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=603"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Radisson Blue</h5>
                      <p className="card-text">
                        Designed to make you feel at ease, each of our 206
                        spacious rooms and suites includes free Wi-Fi and
                        complimentary turndown service....
                      </p>
                      <a
                        href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-mumbai-airport?facilitatorId=RHGSEM&cid=a%3Aps+b%3Aggl+c%3Aapac+i%3Abrand+e%3Ardb+d%3Aind+r%3Abrt+f%3Aen-US+g%3Aho+h%3AINMHBOMAIR+v%3Acf&gad_source=1&gclid=Cj0KCQiA1rSsBhDHARIsANB4EJbIN1YmxLqtOHzohqwAXBzOFHqSqfgzsxRUSBpoTOK-mZY6rGsifQYaAiHqEALw_wcB&gclsrc=aw.ds"
                        class="btn btn-primary"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/465549681.jpg?k=8c903ab7bf0fd906a3fe7b456463805c4026db2dab6706341a83d385160f0f9b&o=&hp=1"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">JW Mariott</h5>
                      <p className="card-text">
                        Nestled along Juhu Beach, JW Marriott Mumbai Juhu is a
                        five-star haven where luxury reigns supreme. Upscale
                        comfort awaits in stylishly appointed hotel rooms and
                        suites showcasing featherbed mattresses chic décor,
                        high....
                      </p>
                      <a
                        href="https://www.marriott.com/en-us/hotels/bomjw-jw-marriott-mumbai-juhu/overview/"
                        class="btn btn-primary"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/13800549.jpg?k=2239f273986987fa71ef3c94ab6f127feb2b859ab63f057980c074689c62c04c&o=&hp=1"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">TAJ LANDS END</h5>
                      <p className="card-text">
                        With a view overlooking the Arabian Sea and the Bandra
                        Worli Sea Link, Taj Lands End, Mumbai is a luxury
                        hotel...
                      </p>
                      <a
                        href="https://www.tajhotels.com/en-in/taj/taj-lands-end-mumbai/"
                        class="btn btn-primary"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://content3.jdmagicbox.com/comp/mumbai/i8/022pxx22.xx22.110825114013.z1i8/catalogue/grand-hyatt-mumbai-santacruz-east-mumbai-hotels-ylarjdrwl0.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">GRAND HYATT</h5>
                      <p className="card-text">
                        Enjoy a stunning view of the hotel gardens and the
                        cityscape from your spacious balcony at this
                        76-square-metre apartment, featuring a....
                      </p>
                      <a
                        href="https://www.hyatt.com/grand-hyatt/mumgh-grand-hyatt-mumbai/rooms"
                        class="btn btn-primary"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://gos3.ibcdn.com/87402574c37f11eb84af0242ac110002.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">ITC MARATHA</h5>
                      <p className="card-text">
                        Inspired by the Maratha dynasty, located conveniently
                        close to both the international and domestic airports
                        and in close proximity to the business districts of
                        north and central...
                      </p>
                      <a
                        href="https://www.itchotels.com/in/en/itcmaratha-mumbai?utm_source=google&utm_medium=cpc&utm_campaign=HQ-DTL|HTL|Mumbai|ITCMaratha|Search|Conversions|PANIndia|always-on|Owned|LC|GGL|Exact|NA|Business|BOMLC|Brand&utm_content=search&gad_source=1&gclid=Cj0KCQiA1rSsBhDHARIsANB4EJbdO4wSwqi_o-HEEsdDiBlLuJj9Ykm8NmHQ2SQNGMN0QBuzZI1DCb4aAqbfEALw_wcB"
                        class="btn btn-primary"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-sm-12">
                <h4 class="text-uppercase">Events</h4>
              </div>
            </div>
          </div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://www.postable.com/blog/wp-content/uploads/2019/04/surprise_bday2.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Birthday Party</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://d397bfy4gvgcdm.cloudfront.net/116608-RAGartistry-8243-4.jpeg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Wedding</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://funny-business.com/wp-content/uploads/2017/01/how_to_get_college_students_to_your_campus_event_banner.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">College Event</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12">
                  <div
                    className="card"
                    style={{ width: "18 rem", height: "95%" }}
                  >
                    <img
                      src="https://images.prismic.io/memoriesdesigner/bec7c8eb-3c4d-436e-aacc-d5b0cb62f44d_MD1_2177.jpg?auto=compress,format&rect=0,0,6048,4022&w=1000&h=665"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Engagement</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
