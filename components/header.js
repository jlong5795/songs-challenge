import { useState, useEffect } from 'react';
import { MeiliSearch } from 'meilisearch';
import axios from 'axios';
import songs from '../songs.json';

export default function Header({ initialSearch, performSearch, setResults }) {
  const [search, setSearch] = useState(initialSearch);
  let timeout = null;

  (async () => {
    try {
      const client = new MeiliSearch({
        host: 'http://127.0.0.1:7700',
        apiKey: 'masterKey'
      });

      const index = client.index('songs');

      await index.addDocuments(songs);
    } catch (e) {
      console.log(e);
    }
  })();

  useEffect(() => {
    if (search?.length > 0) {
      const query = encodeURIComponent(search);
    axios
      .get(`http://127.0.0.1:7700/indexes/songs/search?q=${query}`)
      .then(response => setResults(response.data.hits))
      .catch(error => console.log(error));
    }
  }, [search]);

  const handleChanges = (e) => {
    e.preventDefault();
    clearTimeout(timeout)
    timeout = setTimeout(setSearch(e.target.value), 500)
  }

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Songs</h1>
          <p className="lead text-muted">Songs are what move us</p>
          <form
            onSubmit={e => {
              e.preventDefault();
              performSearch(search);
            }}>
            <div className="input-group">
              <input
                value={search || ''}
                onChange={handleChanges}
                type="text"
                className="form-control"
                placeholder="Type a song name, e.g. Slow Dance"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
