import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Fragment, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";

interface TopResultsProps {
    data: SearchResultAlbums | undefined
}

const AlbumResult = ({ data }: TopResultsProps) => {
    const [swiperInstance, setSwiperInstance] = useState<any>();
    return (
        <Fragment>
            <section className="flex mt-6 items-center justify-between">
                <h4 className="font-semibold text-3xl">Albums</h4>
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
                    {data?.items?.map(
                        (item: Item2) => {
                            return (
                                <SwiperSlide key={item?.data?.uri.split(":")[2]}>
                                    <div className="text-white bg-gray-800 rounded-md p-3">
                                        <img
                                            className="rounded-md object-cover h-[200px] w-full"
                                            src={item?.data?.coverArt?.sources[0].url}
                                            alt={item?.data?.name}
                                        />
                                        <p className="font-semibold text-md truncate mt-2">
                                            {item?.data?.name}
                                        </p>
                                        <div className="mt-2">
                                            <p className="text-sm truncate capitalize">
                                                {item?.data?.artists?.items[0]?.profile?.name}
                                            </p>
                                            <p className="text-sm mt-2 truncate">
                                                {item?.data?.date?.year}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
            </section>
        </Fragment>
    )
}

export default AlbumResult