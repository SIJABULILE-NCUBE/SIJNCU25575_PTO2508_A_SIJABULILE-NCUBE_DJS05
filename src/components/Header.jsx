import { Link } from "react-router-dom";
import styles from "./Header.module.css";

/**
 * Top application header. The title links back to the homepage so users can
 * return to the listing from any show detail page.
 * @returns {JSX.Element}
 */
export default function Header() {
  return (
    <header className={styles.appHeader}>
      <Link to="/" className={styles.brand}>
        <h1>🎙️ Podcast App</h1>
      </Link>
    </header>
  );
}
