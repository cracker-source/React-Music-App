import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Fragment, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";
import VideoCard from "../VideoCard";

interface VideoResultsProps {
    data: Content[] | undefined
}

const VideoResults = ({ data }: VideoResultsProps) => {
    const [swiperInstance, setSwiperInstance] = useState<any>();
    return (
        <Fragment>
            <section className="flex mt-6 items-center justify-between">
                <h4 className="font-semibold text-3xl">Videos</h4>
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
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    modules={[Navigation]}
                    className="mySwiper">
                    {data?.map(
                        (item: Content) => {
                            return (
                                <SwiperSlide key={item?.video?.videoId}>
                                    <VideoCard image={item?.video?.thumbnails[0]?.url} onClick={() => { }} video={item} />
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
            </section>
        </Fragment>
    )
}

export default VideoResults