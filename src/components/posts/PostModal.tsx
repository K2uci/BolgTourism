import { useQuery } from 'react-query';
import { getPost } from '../../lib/api';
import { Clock, Heart, Share2 } from 'lucide-react';

export default function PostModal({ postId, onClose, countLike }: { postId: number; onClose: () => void; countLike: number }) {
  const { data: post, isLoading } = useQuery(['post', postId], () => getPost(postId));

  if (isLoading) return null;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            // src={post.image}
            src='https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit =crop'
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
              {formatDate(post.createdat)}
            </span>
            <span className="flex items-center">
              <Heart size={16} className="mr-1" />
              {countLike} likes
            </span>
            <button className="flex items-center hover:text-primary" onClick={() => console.log(post)}>
              <Share2 size={16} className="mr-1" />
              Share
            </button>
          </div>

          <div className="prose max-w-none mb-8">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
}