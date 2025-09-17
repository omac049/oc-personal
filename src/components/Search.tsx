'use client';

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInitialized = useRef(false);

  const initializeSearch = React.useCallback(() => {
    if (!window.algoliasearch || !window.instantsearch || searchInitialized.current) return;

    const { algoliasearch, instantsearch } = window;

    const searchClient = algoliasearch(
      'ZLQ21UNSR7',
      'c3a190e475e64ffda0f8bbd9a40e69c1'
    );

    const search = instantsearch({
      indexName: 'omar_corral_com_zlq21unsr7_pages',
      searchClient,
      future: { preserveSharedStateOnUnmount: true },
    });

    search.addWidgets([
      instantsearch.widgets.searchBox({
        container: '#search-searchbox',
        placeholder: 'Search Omar Corral\'s site...',
        showReset: true,
        showSubmit: true,
        cssClasses: {
          form: 'search-form',
          input: 'search-input',
          submit: 'search-submit',
          reset: 'search-reset'
        }
      }),
      instantsearch.widgets.hits({
        container: '#search-hits',
        templates: {
          item: (hit: any, { html, components }: any) => html`
            <article class="search-hit">
              <div class="search-hit-content">
                <h3 class="search-hit-title">
                  <a href="${hit.url}" class="search-hit-link" onclick="window.parent.closeSearch()">
                    ${components.Highlight({ hit, attribute: 'title' })}
                  </a>
                </h3>
                <p class="search-hit-description">
                  ${components.Highlight({ hit, attribute: 'description' })}
                </p>
                <span class="search-hit-url">${hit.url}</span>
              </div>
            </article>
          `,
          empty: `
            <div class="search-empty">
              <p>No results found for your search.</p>
              <p>Try searching for:</p>
              <ul>
                <li>SEO services</li>
                <li>Digital marketing</li>
                <li>Web development</li>
                <li>Omar Corral</li>
              </ul>
            </div>
          `
        },
        cssClasses: {
          list: 'search-hits-list',
          item: 'search-hits-item'
        }
      }),
      instantsearch.widgets.configure({
        hitsPerPage: 10,
      }),
      instantsearch.widgets.pagination({
        container: '#search-pagination',
        cssClasses: {
          list: 'search-pagination-list',
          item: 'search-pagination-item',
          link: 'search-pagination-link',
          selectedItem: 'search-pagination-item--selected'
        }
      }),
    ]);

    search.start();
    searchInitialized.current = true;

    // Global function to close search
    (window as any).closeSearch = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen && !searchInitialized.current) {
      // Dynamically load Algolia scripts
      const loadAlgolia = async () => {
        // Load CSS
        if (!document.querySelector('#algolia-css')) {
          const cssLink = document.createElement('link');
          cssLink.id = 'algolia-css';
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://cdn.jsdelivr.net/npm/instantsearch.css@8/themes/satellite-min.css';
          document.head.appendChild(cssLink);
        }

        // Load Algoliasearch
        if (!window.algoliasearch) {
          await new Promise((resolve) => {
            const script1 = document.createElement('script');
            script1.src = 'https://cdn.jsdelivr.net/npm/algoliasearch@4.10.5/dist/algoliasearch-lite.umd.js';
            script1.onload = resolve;
            document.head.appendChild(script1);
          });
        }

        // Load InstantSearch
        if (!window.instantsearch) {
          await new Promise((resolve) => {
            const script2 = document.createElement('script');
            script2.src = 'https://cdn.jsdelivr.net/npm/instantsearch.js@4.80.0';
            script2.onload = resolve;
            document.head.appendChild(script2);
          });
        }

        // Initialize search
        initializeSearch();
      };

      loadAlgolia();
    }
  }, [isOpen, initializeSearch]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Custom CSS for search styling */}
      <style jsx global>{`
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 10vh;
          animation: fadeIn 0.3s ease;
        }

        .search-modal {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow: hidden;
          animation: slideIn 0.3s ease;
        }

        .search-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .search-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .search-close {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          color: #6b7280;
          transition: all 0.2s;
        }

        .search-close:hover {
          background: #e5e7eb;
          color: #1f2937;
        }

        .search-content {
          padding: 1.5rem;
          max-height: 60vh;
          overflow-y: auto;
        }

        .search-form {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-hit {
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          margin-bottom: 0.75rem;
          transition: all 0.2s;
        }

        .search-hit:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .search-hit-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .search-hit-link {
          color: #3b82f6;
          text-decoration: none;
        }

        .search-hit-link:hover {
          text-decoration: underline;
        }

        .search-hit-description {
          margin: 0 0 0.5rem 0;
          color: #6b7280;
          line-height: 1.5;
        }

        .search-hit-url {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .search-empty {
          text-align: center;
          padding: 2rem;
          color: #6b7280;
        }

        .search-empty ul {
          text-align: left;
          display: inline-block;
          margin-top: 1rem;
        }

        .search-pagination-list {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          list-style: none;
          padding: 0;
        }

        .search-pagination-item {
          margin: 0;
        }

        .search-pagination-link {
          display: block;
          padding: 0.5rem 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          text-decoration: none;
          color: #374151;
          transition: all 0.2s;
        }

        .search-pagination-link:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        .search-pagination-item--selected .search-pagination-link {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .search-modal {
            margin: 1rem;
            width: calc(100% - 2rem);
          }
          
          .search-header,
          .search-content {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="search-overlay">
        <div className="search-modal" ref={searchRef}>
          <div className="search-header">
            <h2 className="search-title">
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Search Site
            </h2>
            <button
              className="search-close"
              onClick={onClose}
              aria-label="Close search"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          <div className="search-content">
            <div id="search-searchbox"></div>
            <div id="search-hits"></div>
            <div id="search-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}

// Type declarations for global Algolia objects
declare global {
  interface Window {
    algoliasearch: any;
    instantsearch: any;
  }
}
