import React from 'react';
import Banner from './Banner';
import FeaturedHabits from './FeaturedHabit';
import WhyBuildHabits from './WhyBuildHabits';
import ExtraSections from './ExtraSection';

const Home = () => {
    return (
        <div className='p-10 '>
            <Banner></Banner>
            <FeaturedHabits></FeaturedHabits>
            <WhyBuildHabits></WhyBuildHabits>
            <ExtraSections></ExtraSections>
            
        </div>
    );
};

export default Home;