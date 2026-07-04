import { useState } from "react";
import EpisodeCard from "./EpisodeCard";
import styles from "./SeasonNavigation.module.css";

/**
 * Season navigation and episode browser.
 *
 * Lets the user switch between seasons via a dropdown and expand/collapse the
 * currently selected season to reveal its episode list. Showing one season at a
 * time keeps the page short instead of forcing the user to scroll through every
 * episode of every season at once.
 *
 * @param {Object} props
 * @param {import("../api/fetchShow").Season[]} props.seasons - The show's seasons.
 * @returns {JSX.Element}
 */
export default function SeasonNavigation({ seasons }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const season = seasons[selectedIndex];

  /**
   * Handles selecting a different season from the dropdown.
   * @param {React.ChangeEvent<HTMLSelectElement>} event
   */
  const handleSelect = (event) => {
    setSelectedIndex(Number(event.target.value));
    setExpanded(true);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.topBar}>
        <h2 className={styles.heading}>Current Season</h2>

        <label className={styles.selectLabel}>
          <span className={styles.visuallyHidden}>Select season</span>
          <select
            className={styles.select}
            value={selectedIndex}
            onChange={handleSelect}
          >
            {seasons.map((s, index) => (
              <option key={s.season ?? index} value={index}>
                Season {s.season ?? index + 1}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.seasonCard}>
        <button
          type="button"
          className={styles.seasonHeader}
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          <img
            className={styles.seasonImage}
            src={season.image}
            alt={season.title}
          />
          <div className={styles.seasonMeta}>
            <h3 className={styles.seasonTitle}>{season.title}</h3>
            <p className={styles.episodeCount}>
              {season.episodes.length} Episodes
            </p>
          </div>
          <span className={styles.chevron}>{expanded ? "▲" : "▼"}</span>
        </button>

        {expanded && (
          <ul className={styles.episodeList}>
            {season.episodes.map((episode, index) => (
              <EpisodeCard
                key={`${episode.episode}-${index}`}
                episode={episode}
                seasonImage={season.image}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
