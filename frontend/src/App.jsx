import React, { useState } from 'react';
import { Trophy, Coins } from 'lucide-react';
import SearchBar from './components/SearchBar.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import PixelClouds from './components/PixelClouds.jsx';
import { searchImages } from './services/imageService.js';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [score, setScore] = useState(0);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    try {
      const results = await searchImages(query);
      setImages(results);
      setScore(prev => prev + results.length);
    } catch (err) {
      setError('Quest Failed! Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pixel-bg min-h-screen">
      <PixelClouds />
      <div className="content-wrapper max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4 gap-4">
          <div className="score-display text-white">
            <Coins className="w-4 h-4 text-yellow-400 coin-animation" />
            <span>{score}</span>
          </div>
          <div className="level-badge text-gray-900 flex items-center justify-center">
            <Trophy className="w-3 h-3 inline mr-2" />
            LVL 1
          </div>

        </div>

        <div className="text-center mb-12">
          <div className="mb-8 relative">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 tracking-tight" style={{ lineHeight: '1.3' }}>
              PIXEL SEARCH
            </h1>
            <div className="quest-glow-container">
              <div className="text-3xl md:text-6xl font-bold text-yellow-400 mb-6 tracking-tight transition-all duration-300 quest-title inline-block" style={{ lineHeight: '1.3' }}>
                QUEST
              </div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xs md:text-sm text-green-300 max-w-md mx-auto" style={{ lineHeight: '1.8' }}>
              Search and collect images
            </p>
          </div>
        </div>

        <div className="mb-12">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-600 text-white text-center text-xs pixel-border-thin" style={{ lineHeight: '1.8' }}>
            {error}
          </div>
        )}

        {loading && (
          <div className="mt-12 flex justify-center">
            <div className="loading-pixels">
              <div className="loading-pixel"></div>
              <div className="loading-pixel"></div>
              <div className="loading-pixel"></div>
            </div>
          </div>
        )}

        {!loading && images.length > 0 && (
          <ImageGrid images={images} />
        )}

        {!loading && !error && images.length === 0 && (
          <div className="mt-12 text-center p-8 bg-gray-900 text-white pixel-border-thin">
            <p className="text-sm" style={{ lineHeight: '2' }}>
              Start your quest!
            </p>
            <p className="text-xs text-gray-400 mt-4" style={{ lineHeight: '2' }}>
              Enter a search term above
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
