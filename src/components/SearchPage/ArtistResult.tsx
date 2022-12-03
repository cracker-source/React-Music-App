import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Fragment, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";
import { Link } from "react-router-dom";

interface TopResultsProps {
    topResultsData: SearchReslutArtists2 | undefined
}

const ArtistResult = ({ topResultsData }: TopResultsProps) => {
    const [swiperInstance, setSwiperInstance] = useState<any>();
    return (
        <Fragment>
            <section className="flex items-center justify-between">
                <h4 className="font-semibold text-3xl">Artists</h4>
                <div>
                    <button
                        className="rotate-180 mr-5"
                        onClick={() => swiperInstance.slidePrev()}>
                        <RightArrowForSwiderIcon />
                    </button>
                    <button onClick={() => swiperInstance.slideNext()}>
                        <RightArrowForSwiderIcon />
                    </button>
                </div>
            </section>

            <section className="mt-5">
                <Swiper
                    breakpoints={{
                        360: {
                            width: 360,
                            slidesPerView: 1.3,
                        },
                    }}
                    spaceBetween={20}
                    slidesPerView={5}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    modules={[Navigation]}
                    className="mySwiper">
                    {topResultsData?.items?.map(
                        (item: Item3) => {
                            return (
                                <SwiperSlide key={item?.data?.uri.split(":")[2]}>
                                    <Link to={`/artist/${item?.data?.uri.split(":")[2]}`}>
                                        <div className="text-white bg-gray-800 rounded-md p-3">
                                            <img
                                                className="rounded-md object-cover h-[200px] w-full"
                                                src={item?.data?.visuals?.avatarImage?.sources[0].url}
                                                alt={item?.data?.profile?.name}
                                            />
                                            <p className="font-semibold text-md truncate mt-2">
                                                {item?.data?.profile?.name}
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <p className="text-sm truncate capitalize">
                                                    {item?.data?.uri.toString().split(':')[1]}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
            </section>
        </Fragment>
    )
}

export default ArtistResult