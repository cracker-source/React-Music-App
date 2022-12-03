import LoaderIcon from '../assets/icons/LoaderIcon'

const Loader = () => {
    return (
        <div className='w-full h-[70vh] animate-pulse flex items-center justify-center'>
            <div>
                <LoaderIcon />
                <h1 className='text-white text-center mt-3 text-lg'>Loading....</h1>
            </div>

        </div>
    )
}

export default Loader