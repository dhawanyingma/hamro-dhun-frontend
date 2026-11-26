import { useState } from 'react'
import './App.css'

const sampleSongs = [
  {
    id: 1,
    title: 'Kehi Mitho',
    artist: 'Narayan Gopal',
    lyrics: 'kehi mitho baat gara\nraat tesai dhalkindai cha',
    chords: 'C G Am F',
  },
  {
    id: 2,
    title: 'Halkhabar',
    artist: 'Vten',
    lyrics: 'kehi pani gardina ma\nettikai basi rachu',
    chords: 'Am F C G',
  },
  {
    id: 3,
    title: 'Khali',
    artist: 'Bikki Gurung',
    lyrics: 'Bholi ko kaslai kaha chara theka\ntesaile aajai yehi chedma sajau sangam\ntasbir khichera haseko timi',
    chords: 'G D Em C',
  },
]

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
          <section className="song-details">

            <h2 className="song-details_title">{selectedSong.title}</h2>
            <p className="song-details_artist">{selectedSong.artist}</p>

            <h3 className="song-details_section-title">Lyrics</h3>
            <p className="song-lyrics">{selectedSong.lyrics}</p>

            <h3 className="song-details_section-title">Chords</h3>
            <p className="song-details_chords">{selectedSong.chords}</p>
          </section>
        ) : (
          <section>
            <label htmlFor="song-search">Search songs or artists</label>
            <input
              id="song-search"
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Type a song or artist name"
            />

            <h2>Songs</h2>
            {matchingSongs.length > 0 ? (
              <ul className="song-list">
                {matchingSongs.map((song) => (
                  <li className="song-list-item" key={song.id}>
                    <div className="song-list-info">
                      <h3>{song.title}</h3>
                      <p>{song.artist}</p>
                    </div>
                    <button 
                      className="song-list-button" 
                      type="button" 
                      onClick={() => setSelectedSong(song)}
                    >
                      View Details
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No matching songs found.</p>
            )
            }
          </section>

        )
      }

    </main>

  )
}

export default App