import './Home.scss';
import Peep from '../../assets/hero-peep.jpg'

const Home = () => {
    return (
        <div className='hero-container'>
            <img src={Peep} alt="peep" className='peep-image' />

            <div className='hero-text-container'>
                <h1 className='peep-store'>peep</h1>
                <h1 className='peep-store pink-text'>store</h1>
                <div className='quote-container'>
                    <p className='quote'>"where hearts wear their sleeves</p>
                    <p className='quote quote-pink'>emotions paint the town<span className='quote'>"</span></p>
                </div>
            </div>
        </div>
    );
}

export default Home;