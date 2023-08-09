import React from 'react'
import './About.css'
import aboutImage from '../../images/AI_gen_sam.jpg';

const About = () => {
    return (
        <div className="about">
            <img src={aboutImage} alt="me" className="about__image" />
            <div className="about__content">
                <h2 className="about__title">About the author</h2>
                <div className="about__description-container">
                    <p className="about__description">Sam Hudson loves React.js, CSS, battered old guitars and Tottenham Hostpur.</p>
                    <p className="about__description">When he's not with his family or watching football, he can probably be found in a dark corner of the library trying to fix bugs, hammering away at his Macbook and muttering under his breath.</p>
                </div>
            </div>
        </div>

    )
}

export default About