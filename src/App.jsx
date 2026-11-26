import { useState } from 'react'
import './App.css'
import sampleSongs from './features/songs/data/sampleSongs.js'
import SongList from './features/songs/components/SongList.jsx'
import SongDetails from './features/songs/components/SongDetails.jsx'

function App() {
  const [searchText, setSearchText] = useState('')
  const [selectedSong, setSelectedSong] = useState(null)

  const normalizedSearch = searchText.trim().toLowerCase()

  const matchingSongs = sampleSongs.filter((song) => {
    return (
      song.title.toLowerCase().includes(normalizedSearch) ||
      song.artist.toLowerCase().includes(normalizedSearch)
    )
  })
  return (
    <main>
      <header>

        <nav aria-label="Main navigation" className="navbar">
          <span className="navbar__brand">HAMRO DHUN </span>
          <button type="button" onClick={() => setSelectedSong(null)}>
            Songs
          </button>

        </nav>
        <p>Find songs and explore their chords</p>
      </header>
      {
        selectedSong ? (
          <SongDetails
            selectedSong={selectedSong}
          />
        ) : (
          <SongList
            searchText={searchText}
            onSearchChange={setSearchText}
            matchingSongs={matchingSongs}
            onSelectSong={setSelectedSong}
          />
        )
      }
    </main>
  )
}

export default App