import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { memo, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";

interface ArtistGalleryProps {
    artistInfo: IndividualArtistData | undefined
}

const ArtistGallery = ({ artistInfo }: ArtistGalleryProps): JSX.Element => {
    const [swiperInstance, setSwiperInstance] = useState<any>();
    return (
        <div className="mt-5 p-10 px-40 bg-gradient-to-tr from-[#e0c3fc] to-[#6a11cb] rounded-md">
            <div className="flex items-center mb-10 gap-5 justify-center">
                <button
                    className="rotate-180"
                    onClick={() => swiperInstance.slidePrev()}>
                    <RightArrowForSwiderIcon />
                </button>
                <h2 className="text-white font-semibold text-2xl text-center">Gallery</h2>
                <button onClick={() => swiperInstance.slideNext()}>
                    <RightArrowForSwiderIcon />
                </button>
            </div>
            <Swiper
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper: any) => setSwiperInstance(swiper)}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Navigation]}
            >
                {artistInfo?.visuals?.gallery?.items.map(
                    (item: Item4) => {
                        return (
                            <SwiperSlide>
                                <img
                                    className="rounded-md object-cover w-full h-[300px]"
                                    src={item?.sources[0]?.url}
                                    alt={artistInfo?.profile?.name}
                                />
                            </SwiperSlide>
                        );
                    }
                )}
            </Swiper>
        </div>
    )
}

export default memo(ArtistGallery)