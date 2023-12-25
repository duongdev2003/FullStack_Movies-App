import React from "react";
import { FiUser } from "react-icons/fi";

function Promos() {
    return (
        <div className="my-20 py-10 md:px-20 px-8 bg-dry">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
                <div className="flex lg:gap-10 gap-6 flex-col">
                    <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
                        Download Your Movies Watch Offline.<br /> Enjoy On Your Mobile
                    </h1>
                    <p className="text-text text-sm xl:text-base leading-6 xl:leading-8 text-justify">
                        Experience the freedom of entertainment on your terms
                        with the ability to download your favorite movies and
                        enjoy them offline on your mobile device. Whether you're
                        on a road trip, traveling, or in a place with limited
                        connectivity, this feature allows you to curate your
                        movie list and have it readily available without the
                        need for an internet connection. Simply choose from a
                        wide selection of movies on your preferred streaming
                        platform, download them with a click, and embark on a
                        cinematic journey at your convenience. Download your
                        movies and immerse yourself in an offline viewing
                        experience anytime, anywhere – enhancing your
                        entertainment options to fit your mobile lifestyle.
                    </p>
                    <div className="flex gap-4 md:text-lg text-sm">
                        <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
                            HD 4K
                        </div>
                        <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
                            <FiUser /> 2K
                        </div>
                    </div>
                </div>
          <div>
            <img src="/images/mobile.png" alt="Mobile App" className="w-full object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Promos;
