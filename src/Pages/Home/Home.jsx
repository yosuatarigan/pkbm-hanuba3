import React from 'react';
import CarouselWithText from '../../components/Carousel/CarouselWithText';
import WellcomeText from '../../components/Jumbotron/WellcomeText';
import CardNavs from '../../components/Card/CardNavs';
import Info from '../Info/Info';
import NoteKegiatan from '../Kegiatan/NoteKegiatan';
import Landingpage from '../../components/LandingImage/Landingimages';

const Home = () => {
    return (
        <div>
            <div>
                <CarouselWithText/>
            </div>
            <WellcomeText />
            <CardNavs  />
            <NoteKegiatan />
            <Info />
        </div>
    )
}

export default Home;