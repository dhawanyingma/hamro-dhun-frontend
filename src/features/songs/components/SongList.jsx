function SongList({ searchText, onSearchChange, matchingSongs, onSelectSong }){
return (
<section>
    <label htmlFor="song-search">Search songs or artists</label>
    <input
        id="song-search"
        type="search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
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
                        onClick={() => onSelectSong(song)}
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
export default SongList