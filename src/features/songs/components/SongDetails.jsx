function SongDetails({ selectedSong }) {
    return (
        <section className="song-details">

            <h2 className="song-details_title">{selectedSong.title}</h2>
            <p className="song-details_artist">{selectedSong.artist}</p>

            <h3 className="song-details_section-title">Lyrics</h3>
            <p className="song-lyrics">{selectedSong.lyrics}</p>

            <h3 className="song-details_section-title">Chords</h3>
            <p className="song-details_chords">{selectedSong.chords}</p>
        </section>
    )
}

export default SongDetails