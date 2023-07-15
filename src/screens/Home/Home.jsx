import './Home.css'
import Header from "../../components/Header/Header"
import image1 from '../../assets/1.gif'
import CarouselProducts from "../../components/CarouselProducts/CarouselProducts";
import Footer from '../../components/Footer/Footer';


function Home() {
    const products = [
        {
            name: 'Produto A',
            image: "https://raw.githubusercontent.com/m4tiolli/dropshop/main/images/card1.jpg",
            description: "Produto",
            price: 100
        },
        {
            name: 'Produto B',
            image: "https://raw.githubusercontent.com/m4tiolli/dropshop/main/images/card2.jpg",
            description: "Produto",
            price: 100
        },
        {
            name: 'Produto C',
            image: "https://raw.githubusercontent.com/m4tiolli/dropshop/main/images/card3.jpg",
            description: "Produto",
            price: 100
        },
        {
            name: 'Produto D',
            image: "https://raw.githubusercontent.com/m4tiolli/dropshop/main/images/card4.jpg",
            description: "Produto",
            price: 100
        }
    ]

    return (
        <div>
            <Header />
            <div className="carouselgif">
                <img src={image1} alt="Promoções" />
            </div>
            <div>
                <div>
                    <CarouselProducts products={products} />
                    <CarouselProducts products={products} />
                    <CarouselProducts products={products} />
                    <CarouselProducts products={products} />
                </div>
            </div>
            <div id='containerhome'>
                <Footer />
            </div>
        </div>
    )
}

export default Home