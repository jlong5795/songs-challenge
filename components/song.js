import Image from 'next/image';

export default function Song({ song }) {
  return (
    <div className="col">
      <div className="card">
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
          <small className="text-black-50">{song.track_artist}</small>
        </div>
      </div>
    </div>
  );
}
