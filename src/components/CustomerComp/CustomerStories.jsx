import React from 'react'
import NavbarComp from '../NavbarComp/NavbarComp'
import FooterComp from '../FooterComp/FooterComp'
import Ratio from 'react-bootstrap/Ratio';
import customerData from './CustomerData';

export default function CustomerStories() {

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
          arr.slice(index * size, index * size + size)
        );
      };
      const videosInRows = chunkArray(customerData, 3);
  return (
    <>
    <div>
        <NavbarComp/>
        <div className="container" style={{ maxWidth: '95%', width: '95%', margin: '20px auto' }}>
          <h3 style={{ textAlign: "left" }}>Customer Stories</h3>
          <hr />
          <div>
            {videosInRows.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
                {row.map((video) => (
                  <div key={video.id} style={{ width: "33.33%", padding: '0 10px' }}>
                    <Ratio aspectRatio="16x9">
                      <iframe src={video.src} title={`Video ${video.id}`}></iframe>
                    </Ratio>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <FooterComp/>
    </div>
    </>
  )
}
