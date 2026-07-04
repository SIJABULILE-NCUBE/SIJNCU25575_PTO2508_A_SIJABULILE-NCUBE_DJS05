import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PodcastProvider } from "./context/PodcastContext";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShowDetailPage from "./pages/ShowDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * Root component of the Podcast Explorer app.
 *
 * Responsibilities:
 * - Fetches the list of show previews once on mount.
 * - Wraps the routed pages in <PodcastProvider>. Because the provider sits
 *   ABOVE <Routes>, it never unmounts during client-side navigation, so the
 *   user's search term, genre filter, sort order, and page are preserved when
 *   they return to the homepage from a show detail page.
 *
 * @returns {JSX.Element}
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <PodcastProvider initialPodcasts={podcasts}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage loading={loading} error={error} />}
        />
        <Route path="/show/:id" element={<ShowDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PodcastProvider>
  );
}
