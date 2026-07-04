import { Link } from "react-router-dom";
import styles from "./ShowDetailPage.module.css";

/**
 * Fallback page rendered for any route that does not match ("*").
 * @returns {JSX.Element}
 */
export default function NotFoundPage() {
  return (
    <main className={styles.stateContainer}>
      <div className={styles.error}>Page not found.</div>
      <Link to="/" className={styles.backLink}>
        ← Back to shows
      </Link>
    </main>
  );
}
