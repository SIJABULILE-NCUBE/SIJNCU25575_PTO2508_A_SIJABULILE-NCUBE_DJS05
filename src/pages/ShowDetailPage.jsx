import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchShow } from "../api/fetchShow";
import { formatDate } from "../utils/formatDate";
import SeasonNavigation from "../components/SeasonNavigation";
import styles from "./ShowDetailPage.module.css";

/**
 * Genre labels returned by the /id endpoint that are not real genres and
 * should be hidden from the UI.
 * @type {string[]}
 */
const HIDDEN_GENRES = ["All", "Featured"];

/**
 * Dynamic show detail page, rendered for the route "/show/:id".
 *
 * Reads the show ID from the URL, fetches the matching show from the API, and
 * gracefully handles loading, error and empty ("not found") states. On success
 * it displays the show's title, large image, description, genre tags and last
 * updated date, followed by the <SeasonNavigation> browser.
 *
 * @returns {JSX.Element}
 */
export default function ShowDetailPage() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // Reset state whenever the route id changes so stale data never flashes.
    setLoading(true);
    setError(null);
    setShow(null);

    fetchShow(id, controller.signal)
      .then((data) => setShow(data))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <main className={styles.stateContainer}>
        <div className={styles.spinner}></div>
        <p>Loading show...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.stateContainer}>
        <div className={styles.error}>
          Sorry, we couldn't load this show: {error}
        </div>
        <Link to="/" className={styles.backLink}>
          ← Back to shows
        </Link>
      </main>
    );
  }

  // Empty / not-found state.
  if (!show || !show.seasons) {
    return (
      <main className={styles.stateContainer}>
        <div className={styles.error}>Show not found.</div>
        <Link to="/" className={styles.backLink}>
          ← Back to shows
        </Link>
      </main>
    );
  }

  const visibleGenres = (show.genres || []).filter(
    (g) => !HIDDEN_GENRES.includes(g)
  );
  const totalEpisodes = show.seasons.reduce(
    (sum, season) => sum + season.episodes.length,
    0
  );

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.backLink}>
        ← Back to shows
      </Link>

      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src={show.image}
          alt={show.title}
        />

        <div className={styles.heroInfo}>
          <h1 className={styles.title}>{show.title}</h1>
          <p className={styles.description}>{show.description}</p>

          <div className={styles.meta}>
            <div>
              <span className={styles.metaLabel}>Genres</span>
              <div className={styles.tags}>
                {visibleGenres.length ? (
                  visibleGenres.map((g) => (
                    <span key={g} className={styles.tag}>
                      {g}
                    </span>
                  ))
                ) : (
                  <span className={styles.tag}>Uncategorised</span>
                )}
              </div>
            </div>

            <div>
              <span className={styles.metaLabel}>Last Updated</span>
              <p className={styles.metaValue}>{formatDate(show.updated)}</p>
            </div>

            <div>
              <span className={styles.metaLabel}>Total Seasons</span>
              <p className={styles.metaValue}>{show.seasons.length} Seasons</p>
            </div>

            <div>
              <span className={styles.metaLabel}>Total Episodes</span>
              <p className={styles.metaValue}>{totalEpisodes} Episodes</p>
            </div>
          </div>
        </div>
      </section>

      <SeasonNavigation seasons={show.seasons} />
    </main>
  );
}
