import { useState } from "react";
import { initialSongs } from "./songs";
import SongItem from "./components/SongItem";

export default function SongLibrary({ userRole }) {
  const isAdmin = userRole === "admin";
  const [songs, setSongs] = useState(initialSongs);
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);

  const filtered = songs
    .filter((s) => s.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (!sortField) return 0;
      return a[sortField].localeCompare(b[sortField]);
    });

  const grouped = filtered.reduce((groups, song) => {
    const key = song.album;
    if (!groups[key]) groups[key] = [];
    groups[key].push(song);
    return groups;
  }, {});

  const handleDelete = (id) => {
    setSongs(songs.filter((s) => s.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const artist = e.target.artist.value;
    const album = e.target.album.value;
    const newSong = { id: Date.now(), title, artist, album };
    setSongs([...songs, newSong]);
    e.target.reset();
    setIsAdding(false);
  };

  // Vibrant color palette for album headers
  const albumColors = [
    "from-purple-600 to-pink-500",
    "from-blue-500 to-cyan-400",
    "from-amber-500 to-orange-400",
    "from-emerald-500 to-teal-400",
    "from-indigo-500 to-violet-400",
    "from-rose-500 to-red-400",
    "from-lime-500 to-green-400",
  ];

  const getAlbumColor = (index) => {
    return albumColors[index % albumColors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/5 via-pink-900/5 to-blue-900/5 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              🎼 Music Paradise
            </h2>
            <p className="text-purple-300/80 font-medium">
              Discover your perfect soundtrack
            </p>
          </div>

          {isAdmin && (
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="flex items-center px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 group-hover:rotate-90 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              {isAdding ? "Cancel" : "Add Song"}
            </button>
          )}
        </div>

        {/* Search & Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              placeholder="Search songs, artists, albums..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-purple-300/30 rounded-xl bg-purple-900/20 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm text-white placeholder-purple-300/60"
            />
          </div>
          <select
            onChange={(e) => setSortField(e.target.value)}
            className="block w-full sm:w-48 px-4 py-3 border border-purple-300/30 rounded-xl bg-purple-900/20 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm text-white"
          >
            <option value="" className="bg-purple-900">
              Sort by
            </option>
            <option value="title" className="bg-purple-900">
              Title
            </option>
            <option value="artist" className="bg-purple-900">
              Artist
            </option>
            <option value="album" className="bg-purple-900">
              Album
            </option>
          </select>
        </div>

        {/* Add Song Form */}
        {isAdmin && isAdding && (
          <form
            onSubmit={handleAdd}
            className="mb-8 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-300/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              ✨ Add New Song
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Title
                </label>
                <input
                  name="title"
                  placeholder="Song title"
                  required
                  className="w-full px-4 py-2.5 border border-purple-300/30 rounded-lg bg-purple-900/30 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Artist
                </label>
                <input
                  name="artist"
                  placeholder="Artist name"
                  required
                  className="w-full px-4 py-2.5 border border-purple-300/30 rounded-lg bg-purple-900/30 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Album
                </label>
                <input
                  name="album"
                  placeholder="Album name"
                  required
                  className="w-full px-4 py-2.5 border border-purple-300/30 rounded-lg bg-purple-900/30 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-5 py-2.5 border border-purple-300/30 rounded-lg text-purple-100 hover:bg-purple-900/30 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
              >
                Add Song
              </button>
            </div>
          </form>
        )}

        {/* Albums & Songs */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([album, songs], index) => (
            <div
              key={album}
              className={`bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                activeAlbum === album ? "ring-2 ring-purple-400/50" : ""
              }`}
              onClick={() =>
                setActiveAlbum(activeAlbum === album ? null : album)
              }
            >
              <div
                className={`px-6 py-4 bg-gradient-to-r ${getAlbumColor(
                  index
                )} flex justify-between items-center cursor-pointer`}
              >
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {album}
                </h3>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold text-white">
                  {songs.length} {songs.length === 1 ? "song" : "songs"}
                </span>
              </div>
              <div className="divide-y divide-purple-800/30">
                {songs.map((song) => (
                  <SongItem
                    key={song.id}
                    song={song}
                    onDelete={handleDelete}
                    isAdmin={isAdmin}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl shadow-inner border border-dashed border-purple-400/30">
            <div className="mx-auto h-24 w-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              {filter ? "No matches found" : "Your library is empty"}
            </h3>
            <p className="mt-2 text-purple-300/80 max-w-md mx-auto">
              {filter
                ? "Try searching for something else"
                : isAdmin
                ? "Add your first song to get started"
                : "Check back later for new additions"}
            </p>
            {isAdmin && (
              <button
                onClick={() => setIsAdding(true)}
                className="mt-6 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:shadow-md transition-all"
              >
                Add Your First Song
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
