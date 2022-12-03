import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import GenrePage from './pages/GenrePage';
import Homepage from './pages/Homepage';
import TopArtistsFullPage from './pages/TopArtistsFullPage';
import { RootState } from './store/store';
import WorldCharts from './pages/WorldChartsPage';
import TrendingMusicVideos from './pages/TrendingMusicVideosPage';
import SearchPage from './pages/SearchPage';
import Top50Page from './pages/Top50Page';
import IndividualArtistPage from './pages/IndividualArtistPage';

function App() {

  const { isActive } = useSelector((state: RootState) => state.musicPlayer)
  return (
    <Fragment>
      <Navbar />
      <div className="w-full h-full">
        <div className='pb-32'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/artist/:artist_id' element={<IndividualArtistPage />} />
            <Route path='/top-artists' element={<TopArtistsFullPage />} />
            <Route path='/explore/top-50' element={<Top50Page />} />
            <Route path='/genre/:genre_id' element={<GenrePage />} />
            <Route path='/explore/world-charts' element={<WorldCharts />} />
            <Route path='/explore/trending-music-videos' element={<TrendingMusicVideos />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </div>
      </div>
      {isActive && <MusicPlayer />}
    </Fragment>
  );
}

export default App;
