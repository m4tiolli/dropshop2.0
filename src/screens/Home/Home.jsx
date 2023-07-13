import Header from "../../components/Header/Header"
import image1 from '../../assets/1.gif'
import image2 from '../../assets/2.gif'
import './Home.css'


function Home() {
    const images = [image1, image2];
    return (
        <div id="containerhome">
            <Header />
            <div className="carousel">
                <div className="carousel-container">
                    <div className="carousel-slide">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home