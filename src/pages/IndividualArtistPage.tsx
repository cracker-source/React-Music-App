import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import useIndividualArtistDetails from "../hooks/useIndividualArtistDetails";
import PopularReleases from "../components/IndividualArtistPage/PopularReleases";
import ArtistBiography from "../components/IndividualArtistPage/ArtistBiography";
import ArtistIntro from "../components/IndividualArtistPage/ArtistIntro";
import SingleTracks from "../components/IndividualArtistPage/SingleTracks";
import ArtistAlbums from "../components/IndividualArtistPage/ArtistAlbums";
import ArtistTopTracks from "../components/IndividualArtistPage/ArtistTopTracks";
import ArtistGallery from "../components/IndividualArtistPage/ArtistGallery";
import RelatedArtists from "../components/IndividualArtistPage/RelatedArtists";

const IndividualArtistPage = (): JSX.Element => {
    const params = useParams();

    const { data, isLoading } = useIndividualArtistDetails(
        params?.artist_id ?? ""
    );

    const artistInfo = data?.data?.data?.artist;

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const openModalHandler = () => {
        document.body.style.overflow = "hidden";
        setModalOpen(true);
    };

    const closeModalHandler = () => {
        document.body.style.overflowY = "scroll";
        setModalOpen(false);
    };

    const bio = { __html: `${artistInfo?.profile?.biography?.text}` };

    if (isLoading) return <Loader />;

    return (
        <Fragment>
            {modalOpen && (
                <Modal onBackdropClose={closeModalHandler}>
                    <div className="w-full bg-white h-[400px] p-7 overflow-y-scroll">
                        <h3 className="text-2xl font-semibold">Biography</h3>
                        <p dangerouslySetInnerHTML={bio} className="mt-5  text-[14px]" />
                    </div>
                </Modal>
            )}
            <section className="relative">
                <ArtistIntro artistInfo={artistInfo} />
            </section>

            <div className="px-6">
                <ArtistBiography
                    openModalHandler={openModalHandler}
                    artistInfo={artistInfo}
                />
                <div className="mt-6 text-white">
                    <PopularReleases artistInfo={artistInfo} />
                </div>

                <div className="mt-6 text-white">
                    <SingleTracks artistInfo={artistInfo} />
                </div>
                <div className="mt-6 text-white">
                    <ArtistAlbums artistInfo={artistInfo} />
                </div>
                <div className="mt-6 text-white">
                    <ArtistTopTracks artistInfo={artistInfo} />
                </div>
                <div className="mt-6 text-white grid grid-cols-2 gap-3">
                    <ArtistGallery artistInfo={artistInfo} />
                    <RelatedArtists artistInfo={artistInfo} />
                </div>
            </div>
        </Fragment>
    );
};

export default IndividualArtistPage;
