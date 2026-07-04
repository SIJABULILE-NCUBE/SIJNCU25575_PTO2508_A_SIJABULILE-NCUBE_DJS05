import { genres } from "../data";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import GenreFilter from "../components/GenreFilter";
import PodcastGrid from "../components/PodcastGrid";
import Pagination from "../components/Pagination";
import styles from "../App.module.css";

/**
 * Homepage / listing page.
 *
 * Renders the search, genre-filter and sort controls, the paginated grid of
 * show previews, and the pagination bar. Loading and error states for the
 * initial show-list fetch are received from <App> via props.
 *
 * All filter/search/sort/pagination state lives in <PodcastContext>, which is
 * mounted above the router in <App>, so it survives navigation to and from the
 * show detail page.
 *
 * @param {Object} props
 * @param {boolean} props.loading - Whether the show list is still being fetched.
 * @param {string|null} props.error - Error message if the fetch failed, else null.
 * @returns {JSX.Element}
 */
export default function HomePage({ loading, error }) {
  return (
    <main className={styles.main}>
      <section className={styles.controls}>
        <SearchBar />
        <GenreFilter genres={genres} />
        <SortSelect />
      </section>

      {loading && (
        <div className={styles.messageContainer}>
          <div className={styles.spinner}></div>
          <p>Loading podcasts...</p>
        </div>
      )}

      {error && (
        <div className={styles.messageContainer}>
          <div className={styles.error}>
            Error occurred while fetching podcasts: {error}
          </div>
        </div>
      )}

      {!loading && !error && (
        <>
          <PodcastGrid genres={genres} />
          <Pagination />
        </>
      )}
    </main>
  );
}
