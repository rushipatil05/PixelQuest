import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH..."
          className="w-full px-6 py-4 pr-20 text-xs bg-gray-900 text-white placeholder-gray-500 focus:outline-none pixel-border text-yellow-400"
          style={{ lineHeight: '1.5' }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-yellow-400 text-gray-900 pixel-button"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
