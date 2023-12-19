import React from "react";
import Layout from "./../layout/Layout";
import Head from "../components/Head";

function AboutUs() {
    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Head title="About Us" />
                <div className="xl:py-20 py-10 px-4">
                    <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
                        <div>
                            <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                                Welcome to our Netflixo
                            </h3>
                            <div className="mt-3 text-sm leading-8 text-text text-justify">
                                <p>
                                    Welcome to Netflixo - the gathering place
                                    for thousands of diverse and rich
                                    entertainment works! Experience the
                                    diversity of the film and television world
                                    right at your fingertips. With Netflixo,
                                    you'll discover the most diverse movies,
                                    series, and TV shows from around the world.
                                    Relax and immerse yourself in the unlimited
                                    world of entertainment, anytime, anywhere.
                                    Rest assured, Netflixo will be the perfect
                                    companion for your moments of entertainment!
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="p-8 bg-dry rounded-lg">
                                    <span className="text-3xl block font-extrabold">
                                        100K +
                                    </span>
                                    <h4 className="text-lg font-semibold my-2">
                                        Listed Movies
                                    </h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        Discover cinematic gems in our curated
                                        movie list – a brief escape awaits.
                                    </p>
                                </div>
                                <div className="p-8 bg-dry rounded-lg">
                                    <span className="text-3xl block font-extrabold">
                                        85K +
                                    </span>
                                    <h4 className="text-lg font-semibold my-2">
                                        Lovely Users
                                    </h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        Dear Lovely Users, thank you for being
                                        part of our community. Your presence
                                        makes our platform truly special.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img
                                src="/images/about2.jpg"
                                alt="aboutus"
                                className="w-full xl:block hidden h-header rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUs;
