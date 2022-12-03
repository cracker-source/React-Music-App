import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Fragment, memo, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";

interface SingleTrackProps {
    artistInfo: IndividualArtistData | undefined;
}

const SingleTracks = ({ artistInfo }: SingleTrackProps) => {
    const [swiperInstance, setSwiperInstance] = useState<any>();
    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-3xl">Single Tracks</h4>
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
            </div>
            <div className="mt-5">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper: any) => setSwiperInstance(swiper)}
                    modules={[Navigation]}
                    className="mySwiper">
                    {artistInfo?.discography?.singles?.items.map(
                        (item: Item7, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="text-white bg-gray-800 rounded-md p-3">
                                        <img
                                            className="rounded-md object-cover"
                                            src={item?.releases?.items[0]?.coverArt?.sources[0]?.url}
                                            alt={item?.releases?.items[0]?.name}
                                        />
                                        <p className="font-semibold text-md truncate mt-2">
                                            {item?.releases?.items[0]?.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p className="text-sm truncate">
                                                {item?.releases?.items[0]?.type}
                                            </p>
                                            <div className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                                            <p className="text-sm">
                                                {item?.releases?.items[0]?.tracks?.totalCount} tracks
                                            </p>
                                        </div>
                                        <p className="mt-2 text-sm">
                                            {item?.releases?.items[0]?.date?.year}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
            </div>
        </Fragment>
    )
}

export default SingleTracks