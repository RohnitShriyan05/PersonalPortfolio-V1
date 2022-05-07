import './Home.css';
import AboutPg from './aboutpg/About';
import LandPg from './LandPg/Land';
import SelectedPg from './selectedwork/SelectedPg';
export default function HomePg(){
    return(
        <div className='wrapper scroll-smooth'>
            <LandPg/>
            <SelectedPg/>
            <AboutPg/>
        </div>
    );
}