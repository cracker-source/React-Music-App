import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { memo, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";

interface RelatedArtistsProps {
    artistInfo: IndividualArtistData | undefined
}

const RelatedArtists = ({ artistInfo }: RelatedArtistsProps): JSX.Element => {

    const [swiperInstance, setSwiperInstance] = useState<any>();

    return (
        <div className="mt-5 p-10 px-40 bg-gradient-to-tr from-[#e0c3fc] to-[#6a11cb] rounded-md">
            <div className="flex items-center mb-10 gap-5 justify-center w-full">
                <button
                    className="rotate-180"
                    onClick={() => swiperInstance.slidePrev()}>
                    <RightArrowForSwiderIcon />
                </button>
                <h2 className="text-white font-semibold text-2xl text-center">Related Artists</h2>
                <button onClick={() => swiperInstance.slideNext()}>
                    <RightArrowForSwiderIcon />
                </button>
            </div>
            <Swiper
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper: any) => setSwiperInstance(swiper)}
                effect={"cards"}
                grabCursor={true}

                modules={[EffectCards]}
            >
                {artistInfo?.relatedContent?.relatedArtists?.items.map(
                    (item: Item14) => {
                        return (
                            <SwiperSlide>
                                <div className="bg-gray-800 p-3 rounded-md">
                                    <img
                                        className="rounded-md object-cover w-full h-[240px]"
                                        src={item?.visuals?.avatarImage?.sources[0]?.url}
                                        alt={item?.profile?.name}
                                    />
                                    <p className="text-white text-lg font-semibold mt-1 truncate">{item?.profile?.name}</p>
                                </div>
                            </SwiperSlide>
                        );
                    }
                )}
            </Swiper>
        </div>
    )
}

export default memo(RelatedArtists)