import React from 'react';
import Banner from './Banner';
import FeaturedHabits from './FeaturedHabit';
import WhyBuildHabits from './WhyBuildHabits';
import ExtraSections from './ExtraSection';
import CategoriesSection from './CategoriesSection';
import HighlightSection from './HighlightSection';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import DemoSection from './DemoSection';

const Home = () => {
    return (
        <div className='p-10 mt-10 '>
            <Banner></Banner>
            <BlogSection/>
            <FeaturedHabits></FeaturedHabits>
            <WhyBuildHabits></WhyBuildHabits>
            <DemoSection/>
            <CategoriesSection/>
            <HighlightSection/>
            <TestimonialSection/>
            <FAQSection/>
            <ExtraSections></ExtraSections>
            <CTASection/>
            
            
        </div>
    );
};

export default Home;