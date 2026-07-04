import styles from "./EpisodeCard.module.css";

/**
 * Truncates a string to a maximum length, appending an ellipsis when cut.
 *
 * @param {string} text - The text to shorten.
 * @param {number} [max=140] - Maximum number of characters to keep.
 * @returns {string} The shortened text.
 */
function shorten(text, max = 140) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

/**
 * Renders a single episode row: its number, the owning season's image, the
 * episode title, and a shortened description so the list stays scannable.
 *
 * @param {Object} props
 * @param {Object} props.episode - The episode data object.
 * @param {string} props.episode.title - Episode title.
 * @param {string} props.episode.description - Full episode description.
 * @param {number} props.episode.episode - Episode number within the season.
 * @param {string} props.seasonImage - Cover image of the season the episode belongs to.
 * @returns {JSX.Element}
 */
export default function EpisodeCard({ episode, seasonImage }) {
  return (
    <li className={styles.episode}>
      <div className={styles.thumb}>
        <img src={seasonImage} alt="" />
        <span className={styles.number}>E{episode.episode}</span>
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>
          Episode {episode.episode}: {episode.title}
        </h4>
        <p className={styles.description}>{shorten(episode.description)}</p>
      </div>
    </li>
  );
}
