import { memo } from "react";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import WikipediaIcon from "../../assets/icons/WikipediaIcon";

interface ArtistBiographyProps {
    artistInfo: IndividualArtistData | undefined;
    openModalHandler: () => void
}

const ArtistBiography = ({ artistInfo, openModalHandler }: ArtistBiographyProps) => {

    const bio = { __html: `${artistInfo?.profile?.biography?.text}` }
    return (
        <div className=" flex gap-7">
            <div className="text-white flex gap-6 mt-5 rounded-md items-center bg-gradient-to-tr from-[#764ba2] to-[#667eea] p-10">
                <div className="flex-3">
                    <div className="w-fit h-[200px] px-4 flex flex-col items-center justify-center bg-white rounded-md">
                        <p className="text-9xl font-bold text-[#764ba2] ">{artistInfo?.stats?.worldRank}</p>
                        <p className="text-[#764ba2] uppercase text-[12px] font-semibold">World rank</p>
                    </div>

                </div>
                <div className="flex-1">
                    <h1 className="font-bold text-4xl">Biography</h1>
                    <p dangerouslySetInnerHTML={bio} className="line-clamp-4 mt-5 text-[14px]" />
                    <button onClick={openModalHandler} className="p-2 text-sm border border-1 border-white rounded-md mt-5">View More</button>
                </div>
            </div>

            <div className="text-white w-fit flex gap-6 mt-5 rounded-md items-center bg-gradient-to-tr from-[#764ba2] to-[#667eea] p-10">
                <div className="flex-1 flex flex-col w-full gap-5 text-center">
                    <div>
                        <p className="text-xl font-semibold">{artistInfo?.stats?.followers.toLocaleString()}</p>
                        <p className="text-[12px] font-semibold">Followers</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">{artistInfo?.stats?.monthlyListeners.toLocaleString()}</p>
                        <p className="text-[12px] font-semibold">Monthly Listeners</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <a rel="noreferrer" target='_blank' href={artistInfo?.profile?.externalLinks?.items[0]?.url ?? ''}><FacebookIcon /></a>
                        <a rel="noreferrer" target='_blank' href={artistInfo?.profile?.externalLinks?.items[2]?.url ?? ''}><TwitterIcon /></a>
                        <a rel="noreferrer" target='_blank' href={artistInfo?.profile?.externalLinks?.items[1]?.url ?? ''}><InstagramIcon /></a>
                        <a rel="noreferrer" target='_blank' href={artistInfo?.profile?.externalLinks?.items[3]?.url ?? ''}><WikipediaIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ArtistBiography)