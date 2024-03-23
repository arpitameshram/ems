import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const videos = [
  'https://media.istockphoto.com/id/1430926947/video/bride-groom-hold-hands.mp4?s=mp4-640x640-is&k=20&c=wwTop_fEDEMrb8oz_KACAbs0ua_4Fdl4Nh5wgV-mHcs=',
  'https://media.istockphoto.com/id/1170656295/video/ive-never-been-more-certain-of-anything-in-my-life.mp4?s=mp4-640x640-is&k=20&c=BQgIMadxAB0pOv91WOjzOSlo2FkNsrgm632GO5XyO14=',
  'https://media.istockphoto.com/id/1370982760/video/close-up-of-beautiful-woman-celebrating-her-birthday-blowing-out-the-candles-on-cake-looking.mp4?s=mp4-640x640-is&k=20&c=-h6DCXi3DejstcZwb1tIMtyd0RMcI5tp8hc-AOl_aH8=',
  'https://media.istockphoto.com/id/1472658939/video/performance-of-a-pop-or-rock-group-music-band-on-stage-stage-neon-light-and-bright-strobe.mp4?s=mp4-640x640-is&k=20&c=r38GaKKQOiQnWspxCN-gTKjKcSyk-BaD2VlGcIobIIo=',
  'https://media.istockphoto.com/id/864509294/video/people-group-catering-buffet-food-indoor-in-the-restaurant.mp4?s=mp4-640x640-is&k=20&c=1CXF6qKkdtA_idH3KcNnqsPSQORTYyBjxdW79f2DCaQ=',
  'https://media.istockphoto.com/id/1359386602/video/man-photographer-takes-pictures-in-a-restaurant-party-at-wedding-event.mp4?s=mp4-640x640-is&k=20&c=S2W4IkdH8VF2J0Ih2D1ysbV5_igD5TG5WtBmxVISRyc=',
];

export default function CarouselComp() {
  return (
    <div className='container'>
      <section className="carousel" style={{ marginBottom: '30px', marginTop: "0px" }}>
        <Carousel>
          {videos.map((videoSrc, index) => (
            <Carousel.Item key={index} style={{ maxHeight: '550px', overflow: 'hidden' }}>
              <video
                className="d-block w-100"
                src={videoSrc}
                alt={`Slide ${index + 1}`}
                autoPlay
                loop
                muted
                style={{ objectFit: 'cover', width: '100%', maxHeight: '550px' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
