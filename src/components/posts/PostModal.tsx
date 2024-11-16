import { useQuery } from 'react-query';
import { getPost } from '../../lib/api';
import CommentSection from './CommentSection';
import { Clock, Heart, Share2 } from 'lucide-react';

export default function PostModal({ postId, onClose }: { postId: string; onClose: () => void }) {
  const { data: post, isLoading } = useQuery(['post', postId], () => getPost(postId));

  if (isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2"
          >
            Close
          </button>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-6 space-x-4">
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Heart size={16} className="mr-1" />
              {post.likes.length} likes
            </span>
            <button className="flex items-center hover:text-primary">
              <Share2 size={16} className="mr-1" />
              Share
            </button>
          </div>

          <div className="prose max-w-none mb-8">
            {post.content}
          </div>

          <CommentSection postId={postId} comments={post.comments} />
        </div>
      </div>
    </div>
  );
}