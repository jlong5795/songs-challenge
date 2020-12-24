import { useState } from 'react';

export default function Header({ initialSearch, performSearch }) {
  const [search, setSearch] = useState(initialSearch);

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
                onChange={e => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
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
