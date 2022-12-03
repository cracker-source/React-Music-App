import { Fragment, memo } from 'react'
import VerifiedIcon from '../../assets/icons/VerifiedIcon'

interface ArtistIntroProps {
    artistInfo: IndividualArtistData | undefined
}

const ArtistIntro = ({ artistInfo }: ArtistIntroProps) => {
    return (
        <Fragment>
            <div className="mt-24 relative">
                <img
                    src={artistInfo?.visuals?.headerImage?.sources[0]?.url}
                    alt={artistInfo?.profile?.name}
                    className='w-full h-[350px] object-cover'
                />
            </div>
            <div className="absolute text-white inset-0 flex items-center gap-5 px-10 bg-[rgba(0,0,0,0.5)]">
                <div className="w-[250px] h-[250px]">
                    <img
                        className="w-full h-full object-cover"
                        src={artistInfo?.visuals?.avatarImage?.sources[0]?.url}
                        alt={artistInfo?.profile?.name}
                    />
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-5xl font-bold">{artistInfo?.profile?.name}  </h1>
                        {artistInfo?.profile?.verified && <VerifiedIcon />}
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default memo(ArtistIntro)