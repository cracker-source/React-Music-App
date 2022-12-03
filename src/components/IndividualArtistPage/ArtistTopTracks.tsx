import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Fragment, memo, useState } from "react";
import RightArrowForSwiderIcon from "../../assets/icons/RightArrowForSwiderIcon";

interface ArtistTopTracksProps {
    artistInfo: IndividualArtistData | undefined;
}
const ArtistTopTracks = ({ artistInfo }: ArtistTopTracksProps) => {

    const [swiperInstance, setSwiperInstance] = useState<any>();

    const numberWithCommas = (x: number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-3xl">Top Tracks</h4>
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
                    {artistInfo?.discography?.topTracks?.items.map(
                        (item: Item9) => {
                            return (
                                <SwiperSlide>
                                    <div className="text-white bg-gray-800 rounded-md p-3">
                                        <img
                                            className="rounded-md object-cover"
                                            src={item?.track?.album?.coverArt?.sources[0]?.url}
                                            alt={item?.track?.name}
                                        />
                                        <p className="font-semibold text-md truncate mt-2">
                                            {item?.track?.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p className="text-sm truncate">
                                                {item?.track?.artists?.items[0]?.profile?.name}
                                            </p>
                                            {/* <div className="w-[5px] h-[5px] bg-gray-300 rounded-full" /> */}
                                            {/* <p className="text-sm">
                                                {item?.releases?.items[0]?.tracks?.totalCount} tracks
                                            </p> */}
                                        </div>
                                        <p className="mt-2 text-sm truncate">
                                            {numberWithCommas(+item?.track?.playcount)}
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

export default memo(ArtistTopTracks)