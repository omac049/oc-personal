'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

interface SearchButtonProps {
  className?: string;
  showLabel?: boolean;
}

export default function SearchButton({ className = '', showLabel = false }: SearchButtonProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <>
      <button
        onClick={openSearch}
        className={`search-button ${className}`}
        aria-label="Open search"
        title="Search site (Press Ctrl+K)"
      >
        <FontAwesomeIcon icon={faSearch} />
        {showLabel && <span className="ml-2">Search</span>}
      </button>

      <Search isOpen={isSearchOpen} onClose={closeSearch} />

      {/* Keyboard shortcut listener */}
      <SearchKeyboardShortcut onOpen={openSearch} />

      <style jsx>{`
        .search-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          color: currentColor;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          font-size: inherit;
        }

        .search-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .search-button:focus {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}

// Keyboard shortcut component
function SearchKeyboardShortcut({ onOpen }: { onOpen: () => void }) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        onOpen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onOpen]);

  return null;
}
