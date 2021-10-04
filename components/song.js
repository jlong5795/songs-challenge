import Image from 'next/image';

export default function Song({ song }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        {song.album_cover_art_url && (
          <Image
            src={song.album_cover_art_url}
            alt={`Cover art of ${song.track_album_name}`}
            className="card-img-top"
            width={640}
            height={640}
          />
        )}

        <div className="card-body">
          <p className="card-text">{song.track_name}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <small className="text-muted">{song.track_artist}</small>
            {song.danceability > .6 ? <span className="badge bg-success">Danceable!</span> : null}
          </div>
        </div>
        <span>
          {song?.playlist_genre ? (
            <div className="font-weight-light text-capitalize border-top">
              {song.playlist_genre}
            </div>
          ) : null}
          {song?.playlist_subgenre ? (
            <div className="font-weight-light text-capitalize border-top">
              {song.playlist_subgenre}
            </div>
          ) : null}
        </span>
      </div>
    </div>
  );
}
