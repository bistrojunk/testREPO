import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";
import { CardDisplay, ImageLoad, UniversalHeader } from "../../components";
// import { images } from '../../images'; const { width, height } = Image.resolveAssetSource(myImage) // this doesn't work
import { Container } from "@material-ui/core";
import images from "../../../public/images";

function Main() {
    return (
        <div>
            {/* HeaderMain with sun icon, product name and two buttons */}
            <UniversalHeader ButtonLogin="Login" ButtonRegister="Register" />

            {/* Main Landing Page Image */}
            <Container>
                <section id="banner">
                    <div className="inner">
                        <div className="image center">
                            <img
                                src="images/pic06.banner3-large.jpg"
                                srcSet="images/pic06.banner3-small.jpg 480w, images/pic06.banner3-large.jpg 1080w"
                                alt="Four men and one woman of multiple cultures, under 20 years, smiling, running toward camera, in casual dress, background of blue skies and grassy suburbia"
                                placeholder="images/pic06.banner3.placeholder.jpg"
                                rel="preload"
                                dpr="auto"
                                responsive="true"
                                gravity="faces"
                                accessibility="colorblind"
                                quality="auto"
                                fetchformat="auto"
                                height="100%"
                                width="100%"
                                border-radius="6px"
                                display="block"
                            />
                        </div>
                    </div>
                </section>
            </Container>

            {/* Section One Text Header */}
            <section id="one" className="wrapper">
                <header className="major">
                    <nav className="navbar navbar-light bg-light">
                        <div className="flex-container">
                            <h3 style={{ color: "#985b9c" }}>Sunny Walks at your fingertips</h3>
                            <p>
                                Find the best time to take a daily walk, enjoy the sun outdoors and
                                pursue your happiness.
                            </p>
                        </div>
                        <span className="navbar-brand mb-0 h1"></span>
                    </nav>
                </header>

                {/* Card Display, only way I could get equal spacing between */}
                <div style={{ padding: 50 }}>
                    <CardDisplay />
                </div>

                {/* Section Divider - Text Header */}
                <section id="one" className="wrapper">
                    <header className="major">
                        <nav className="navbar navbar-light bg-light text-color: #966602">
                            <div className="flex-container">
                                <h3 style={{ color: "#985b9c" }}> Embrace the Power of the Sun </h3>
                                <p>
                                    Soak in the benefits of exposing your skin to a sensible amount
                                    of natural sunlight.
                                </p>
                            </div>
                            <span className="navbar-brand mb-0 h1"></span>
                        </nav>
                    </header>
                </section>

                {/* Three Text Points of Interest with links */}
                <div className="container">
                    <div className="row">
                        <div className="4u">
                            <section className="special box">
                                <i className="icon fa-area-chart major"></i>
                                <h3>Sunshine Enhances mood</h3>
                                <a
                                    href="https://www.webmd.com/balance/ss/slideshow-health-benefits-nature"
                                    className="image fit"
                                    style={{ color: "#985b9c" }}
                                >
                                    <p>Now that's sunshine on your shoulders!</p>
                                </a>
                            </section>
                        </div>
                        <div className="4u">
                            <section className="special box">
                                <i className="icon fa-refresh major"></i>
                                <h3>Reduces stress, improves sleep</h3>
                                <a
                                    href="https://www.webmd.com/balance/ss/slideshow-health-benefits-nature"
                                    className="image fit"
                                    style={{ color: "#985b9c" }}
                                >
                                    <p>Who knew?</p>
                                </a>
                            </section>
                        </div>
                        <div className="4u">
                            <section className="special box">
                                <i className="icon fa-cog major"></i>
                                <h3>Strengthens your immune system</h3>
                                <a
                                    href="https://www.webmd.com/food-recipes/features/vitamin-d-vital-role-in-your-health"
                                    className="image fit"
                                    margin-top="0"
                                    style={{ color: "#985b9c" }}
                                >
                                    <p>
                                        Check it out, vitamin D comes in handy in helping your body
                                        ward off coronavirus (COVID-19).
                                    </p>
                                </a>
                            </section>
                        </div>
                        <div className="4u">
                            <section className="special box">
                                <i className="icon fa-cog major"></i>
                                <h3>And it's FREE!</h3>
                                <p>Sunshine and the app too.</p>
                                {/* <a href="https://www.webmd.com/beauty/features/sun-safety-sunscreen-and-sun-protection#1" className="image fit"><p>Do remember to enjoy responsibly and don't forget your sun cream.</p></a> */}
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Two with Centered Image */}
            <section id="two" className="wrapper style2">
                <div className="container">
                    <div className="row">
                        <div className="6u">
                            <section className="special">
                                <div className="image fit">
                                    <ImageLoad
                                        src="images/pic10.cityfamily.jpg"
                                        alt="Woman and child of color, smiling sweetly at camera, woman wearing leather clothes kneeling with gender neutral child hugging her shoulders, backdrop of center city, brick street"
                                        placeholder="images/pic10.cityfamily.placeholder.jpg"
                                        responsive="true"
                                        gravity="faces"
                                        accessibility="colorblind"
                                    />
                                </div>
                                <h3>You are my sunshine</h3>
                                <p>
                                    Explore the endless outdoors together again, just because we
                                    can.
                                </p>
                                <ul className="actions"></ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Three with Centered Image */}
            <section id="three" className="wrapper style1">
                <div className="container">
                    <div className="row">
                        <div className="6u">
                            <section className="special">
                                <div className="image fit">
                                    <ImageLoad
                                        src="images/pic05.funwheelchair.jpg"
                                        alt="Person pushing another in wheelchair against architectual building and waterfront"
                                        placeholder="images/pic05.funwheelchair.placeholder.jpg"
                                        responsive="true"
                                        gravity="faces"
                                        accessibility="colorblind"
                                    />
                                </div>
                                <h3>Chasing the sun</h3>
                                <p>
                                    Whether on a solo journey or with others, with fur family or
                                    humans, the paths and modes are limitless.
                                </p>
                                <ul className="actions"></ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Four with one Image and two Points of Text */}
            <section id="three" className="wrapper style3">
                <div className="container">
                    <div className="row">
                        <div className="8u">
                            <section>
                                <div className="image fit">
                                    <ImageLoad
                                        src="images/pic02.jpg"
                                        alt="Woman of colour wearing backpack walking solo against industrial style city wall"
                                        placeholder="images/pic02.placeholder.jpg"
                                        responsive="true"
                                        gravity="faces"
                                        accessibility="colorblind"
                                    />
                                </div>
                                <h3>Sunshine everywhere</h3>
                                <p>
                                    Create and discover new routes. Your next adventure begins now.
                                </p>
                            </section>
                        </div>
                        <div className="4u">
                            <section>
                                <h3>Let the sun shine in and take on a new challenge</h3>
                                <p>
                                    After a year of the pandemic, where would you like to explore?
                                    Find a new destination and head out into the sun.
                                </p>
                                <ul className="actions"></ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer id="footer">
                <div className="container">
                    <div className="row double">
                        <ul className="copyright">
                            <p>
                                &copy; CodeBenders Sunny Walk. All rights reserved.
                                <br /> Can you spot the 11 song titles?
                            </p>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
