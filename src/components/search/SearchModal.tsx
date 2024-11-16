import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useQuery } from 'react-query';
import { searchPosts } from '../../lib/api';
import PostCard from '../posts/PostCard';

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: searchResults, isLoading } = useQuery(
    ['search', searchQuery],
    () => searchPosts(searchQuery),
    {
      enabled: searchQuery.length > 2,
    }
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center mb-6">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-200 focus:border-primary focus:outline-none"
          />
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <p>Searching...</p>
          ) : searchResults?.length > 0 ? (
            searchResults.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : searchQuery.length > 2 ? (
            <p>No results found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}