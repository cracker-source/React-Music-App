import { NavLink } from "react-router-dom"
import { musicFilterData } from "../utils/music-genre-data"

const GenreFilterOptions = () => {
    return (
        <div className="mt-5 rounded-md text-white text-center overflow-hidden flex items-center justify-between bg-gray-800">
            {musicFilterData.map((genre) => {
                return (
                    <NavLink className={({ isActive }) =>
                        isActive ? 'w-full  bg-[#2575fc] px-3 py-3 text-sm' : 'hover:bg-gray-700 text-sm w-full px-3 py-3'} key={genre.id} to={genre.path}>
                        {genre.name}
                    </NavLink>
                )
            })}
        </div>
    )
}



export default GenreFilterOptions