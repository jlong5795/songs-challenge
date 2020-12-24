import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../components/header';

test('renders without an `initialSearch`', () => {
  const { container } = render(<Header />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <section
        class="py-5 text-center container"
      >
        <div
          class="row py-lg-5"
        >
          <div
            class="col-lg-6 col-md-8 mx-auto"
          >
            <h1
              class="fw-light"
            >
              Songs
            </h1>
            <p
              class="lead text-muted"
            >
              Songs are what move us
            </p>
            <form>
              <div
                class="input-group"
              >
                <input
                  class="form-control"
                  placeholder="Type a song name, e.g. Slow Dance"
                  type="text"
                  value=""
                />
                <button
                  class="btn btn-primary"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  `);
});

test('renders with a `initialSearch`', () => {
  const { getByDisplayValue } = render(<Header initialSearch="Rick Astley" />);
  expect(getByDisplayValue('Rick Astley')).toBeInTheDocument();
});
