import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const ProfilePhoto = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avant-garde.com.cy/sites/default/files/styles/facebook/public/imported_photos/1576683023_google.jpg?h=95cb58e7&itok=cj-2kICv"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F3985%252Fsundar_pichai.jpg%252F1200x630.jpg?signature=J99O4jtCfvMKK8hGNM32aeoT63k=&source=https:%2F%2Fblueprint-api-production.s3.amazonaws.com"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.76217b415bc0aa40217761c511ab92db?rik=44c3KiOWFC3zvw&pid=ImgRaw&r=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProfilePhoto