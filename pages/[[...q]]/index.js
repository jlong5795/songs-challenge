import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Songs from '../../components/songs';
import Header from '../../components/header';

export async function getServerSideProps({ params }) {
  let [pageOrInitialSearch, page] = params.q || [];

  if (page) {
    page = parseInt(page, 10);
  } else if (parseInt(pageOrInitialSearch, 10) > 0) {
    page = parseInt(pageOrInitialSearch, 10);
    pageOrInitialSearch = null;
  }

  return {
    props: {
      initialSearch: pageOrInitialSearch || null,
      page: page || 1
    }
  };
}

export default function App({ initialSearch, page }) {
  const [currentPage, setCurrentPage] = useState(page);
  const [results, setResults] = useState([]);
  const router = useRouter();

  const performSearch = newSearch => {
    const encodedSearch = encodeURIComponent(newSearch)
    router.replace({ pathname: `/${encodedSearch}` });
  };

  return (
    <main>
      <Header performSearch={performSearch} initialSearch={initialSearch} setResults={setResults} />

      <div className="py-5 bg-light">
        <div className="container">
          <Songs search={initialSearch} page={currentPage} setPage={setCurrentPage} results={results}/>
        </div>
      </div>
    </main>
  );
}
