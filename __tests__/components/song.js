import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Song from '../../components/song';

test('renders a song', () => {
  const { container } = render(
    <Song
      song={{
        album_cover_art_url:
          'https://i.scdn.co/image/ab67616d0000b273237665d08de01907e82a7d8a',
        track_album_name: 'Whenever You Need Somebody',
        track_name: 'Never Gonna Give You Up',
        track_artist: 'Rick Astley'
      }}
    />
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="col d-flex align-items-stretch"
      >
        <div
          class="card shadow-sm"
        >
          <div
            style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
          >
            <div
              style="box-sizing: border-box; display: block; max-width: 100%;"
            >
              <img
                alt=""
                aria-hidden="true"
                role="presentation"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjY0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                style="max-width: 100%; display: block;"
              />
            </div>
            <img
              alt="Cover art of Whenever You Need Somebody"
              class="card-img-top"
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              style="visibility: hidden; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
            />
          </div>
          <div
            class="card-body"
          >
            <p
              class="card-text"
            >
              Never Gonna Give You Up
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <small
                class="text-muted"
              >
                Rick Astley
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});
