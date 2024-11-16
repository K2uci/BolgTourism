import React from 'react';
import { Clock, MessageCircle, Heart } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Hidden Beaches of Bali",
    excerpt: "Discover secluded paradises away from tourist crowds...",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    date: "Mar 10, 2024",
    comments: 24,
    likes: 156
  },
  {
    id: 2,
    title: "Ancient Temples of Cambodia",
    excerpt: "Exploring the mystical ruins of Angkor Wat...",
    image: "https://images.unsplash.com/photo-1508182314998-3bd49473002f?q=80&w=2940&auto=format&fit=crop",
    date: "Mar 8, 2024",
    comments: 18,
    likes: 142
  },
  {
    id: 3,
    title: "Safari Adventure in Tanzania",
    excerpt: "Up close with Africa's magnificent wildlife...",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2940&auto=format&fit=crop",
    date: "Mar 5, 2024",
    comments: 31,
    likes: 203
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle size={16} className="mr-1" />
                      {post.comments}
                    </span>
                    <span className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}