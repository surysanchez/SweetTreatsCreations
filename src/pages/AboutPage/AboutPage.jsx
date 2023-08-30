import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";

export default function AboutPage(){
    return (
        <>
        <Container fluid >
        <h1>About us </h1>
        <Image className='about-photo' src="https://i.imgur.com/NvpemG9.jpg" alt="" fluid rounded />
        <br />
          <br />
       
          <p>
          
        Sweets Treats Creations is a small family owned- business . Focusing on crafting custom cakes and many others desserts , specializing in creating unique, modern / classic and tasty treats with colors that pop and compliment any decor.
        </p>
       
        <p>We can take clues from your inspiration by sharing it with us, or an overall theme to create your matching dessert that will be the centerpiece of your celebration...</p>
     
      <p>Enjoy our collection online . Contact us to place an order or with any questions and feedback . Curbside pickup available.</p>

      </Container>
        </>
    )
}