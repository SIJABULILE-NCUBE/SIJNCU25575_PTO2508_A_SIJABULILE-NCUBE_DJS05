/**
 * @typedef {Object} Episode
 * @property {string} title - Episode title.
 * @property {string} description - Full episode description.
 * @property {number} episode - Episode number within its season.
 * @property {string} file - Audio file URL.
 */

/**
 * @typedef {Object} Season
 * @property {number} season - Season number.
 * @property {string} title - Season title.
 * @property {string} image - Season cover image URL.
 * @property {Episode[]} episodes - Episodes belonging to this season.
 */

/**
 * @typedef {Object} Show
 * @property {string} id - Unique show identifier.
 * @property {string} title - Show title.
 * @property {string} description - Show description.
 * @property {string} image - Large cover image URL.
 * @property {string[]} genres - Genre title strings (from the /id endpoint).
 * @property {string} updated - Last updated ISO date string.
 * @property {Season[]} seasons - Seasons embedded within the show.
 */

/**
 * Fetches a single show (with its seasons and episodes embedded) by ID from the
 * podcast API's `/id/<ID>` endpoint.
 *
 * @param {string} id - The show ID taken from the route parameter.
 * @param {AbortSignal} [signal] - Optional signal to cancel the request if the
 *   component unmounts before it resolves.
 * @returns {Promise<Show>} The show object.
 * @throws {Error} If the network response is not OK.
 */
export async function fetchShow(id, signal) {
  const res = await fetch(`https://podcast-api.netlify.app/id/${id}`, {
    signal,
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}
