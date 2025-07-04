import image1 from '../../assets/101.jpg';
import image4 from '../../assets/104.jpg';
import image3 from '../../assets/103.jpg';
import "../../../public/css/Home.css"
function Store() {
    return (
        <div className="container-store">
            <p>★ OUR STORE ★</p>
            <h1>
                Enjoy Every Moment with Tasty <br />
                <span>Breakfast</span>, Wholesome <span>Veg Thali</span> & <span>Herbal Drinks</span>
            </h1>
            <p className="store-description">
                At Your Restaurant Name, we believe in celebrating every moment
                with food that’s pure, wholesome, and unforgettable. Whether you're
                starting your day with a tasty breakfast , indulging in hearty
                mains , or sipping on refreshing drinks  — every dish is
                prepared with love and 100% pure vegetarian ingredients.
            </p>

            <div className="store-image-group">
                <img className='store-img image1' src={image1} alt="Breakfast" />
                <img className='store-img image2' src={image4} alt="Thali" />
                <img className='store-img image3' src={image3} alt="Drinks" />
            </div>
        </div>
    );
}

export default Store;
