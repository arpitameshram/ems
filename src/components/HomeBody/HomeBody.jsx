import React,{ useState } from 'react';

export default function HomeBody() {
  //const [isHovered, setIsHovered] = useState(false);

  const [isHallsHovered, setIsHallsHovered] = useState(false);
  const [isCateringHovered, setIsCateringHovered] = useState(false);
  const [isVendorsHovered, setIsVendorsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const handleMouseEnter = (setImageHover) => {
    setImageHover(true);
  };

  // Function to handle mouse leave for each image
  const handleMouseLeave = (setImageHover) => {
    setImageHover(false);
  };

  // const styles = {
  //   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  //   borderRadius: '5px',
  //   transform: isHovered ? 'scale(1.02)' : 'scale(1)',
  //   boxShadow: isHovered ? '0 0 15px #00B5B8' : 'none',
  // };

  return (
    <>
      <div>
        <section id="service-section" className="mt-5 mb-5 pr-3">
          <div className="container marketing text-center">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <img
                  className="rounded-circle"
                  src="https://2.bp.blogspot.com/-uDJeJFTy6e0/Wnqn8j3OOoI/AAAAAAAABTQ/vxh5_Uft6g0BPpjdYkOzMx4NTleHE55PQCLcBGAs/s1600/MS%2BMarriage-marriage-hall-chennai.jpg"
                  alt="Halls"
                  width="240"
                  height="240"
                  style={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    borderRadius: '5px',
                    transform: isHallsHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isHallsHovered ? '0 0 15px #00B5B8' : 'none',
                  }}
                  onMouseEnter={() => handleMouseEnter(setIsHallsHovered)}
                  onMouseLeave={() => handleMouseLeave(setIsHallsHovered)}
                />
                <h2>HALLS</h2>
                <p>Our hall rental services offer a selection of exceptional spaces...</p>
              </div>
              <div className="col-lg-4 mb-4">
                <img
                  className="rounded-circle"
                  src="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Catering"
                  width="240"
                  height="240"
                  style={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    borderRadius: '5px',
                    transform: isCateringHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isCateringHovered ? '0 0 15px #00B5B8' : 'none',
                  }}
                  onMouseEnter={() => handleMouseEnter(setIsCateringHovered)}
                  onMouseLeave={() => handleMouseLeave(setIsCateringHovered)}
                />
                <h2>CATERING</h2>
                <p> Our catering services are designed to elevate your guests' dining experience...</p>
              </div>
              <div className="col-lg-4 mb-4">
                <img
                  className="rounded-circle"
                  src="https://image.freepik.com/free-vector/various-street-food-vendor-flat-illustration_2482-381.jpg"
                  alt="Vendors"
                  width="240"
                  height="240"
                  style={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    borderRadius: '5px',
                    transform: isVendorsHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isVendorsHovered ? '0 0 15px #00B5B8' : 'none',
                  }}
                  onMouseEnter={() => handleMouseEnter(setIsVendorsHovered)}
                  onMouseLeave={() => handleMouseLeave(setIsVendorsHovered)}
                />
                <h2>VENDORS</h2>
                <p>Our vendor services bring together a curated selection of professionals and...</p>
              </div>
            </div>

            <hr className="featurette-divider" />
            {/* Featurette 1 */}
            <div className="row featurette">
              <div className="col-md-7">
                <div className="mt-1 text-center">
                  <h2 className="featurette-heading mt-2">
                    HALLS <p className="text-muted mt-2">It'll blow your mind.</p>
                  </h2>
                </div>
                <div className="mt-3">
                  <p className="lead">
                  At EventHub, we believe that the right venue sets the stage for a truly unforgettable event.
Our hall rental services offer a selection of exceptional spaces designed to cater to a variety of occasions.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  className="featurette-image img-fluid mx-auto"
                  src="https://i.pinimg.com/originals/32/17/96/321796c217c3fa93013944de4772e7f8.jpg"
                  alt="Halls Featurette"
                  style={{ height: '250px', width: '100%' }}
                />
              </div>
            </div>

            <hr className="featurette-divider" />
            {/* Featurette 2 */}
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <div className="mt-1 text-center">
                  <h2 className="featurette-heading mt-2">
                    CATERING <p className="text-muted mt-2">The best memories are made at dinner</p>
                  </h2>
                </div>
                <div className="mt-3">
                  <p className="lead">
                  At EventHub, we understand that exceptional catering is an integral part of any successful event.
Our catering services are designed to elevate your guests' dining experience, ensuring that every bite is a delight.
                  </p>
                </div>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="featurette-image img-fluid mx-auto"
                  src="https://arzfinefoods.com/wp-content/uploads/2018/11/Catering_Promo.jpg"
                  alt="Catering Featurette"
                  style={{ height: '250px', width: '100%' }}
                />
              </div>
            </div>

            <hr className="featurette-divider" />
            {/* Featurette 3 */}
            <div className="row featurette">
              <div className="col-md-7">
                <div className="mt-1 text-center">
                  <h2 className="featurette-heading mt-2">
                    VENDORS <p className="text-muted mt-2">An artist is not paid for his Labor but for his vision.</p>
                  </h2>
                </div>
                <div className="mt-3">
                  <p className="lead">
                  At EventHub, we understand that every detail matters when it comes to creating memorable events.
Our vendor services bring together a curated selection of professionals and businesses to meet all your event needs.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  className="featurette-image img-fluid mx-auto"
                  src="https://image.freepik.com/free-vector/various-street-food-vendor-flat-illustration_2482-381.jpg"
                  alt="Vendors Featurette"
                  style={{ height: '250px', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
