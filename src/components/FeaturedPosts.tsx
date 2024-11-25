import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MessageCircle, LucideHeart } from 'lucide-react';
import { PostTypes } from '../types/PostTypes';
import { useAuthStore } from '../lib/store';
import { DataUserTypes } from '../types/StatusUserTypes';
import { Toaster, toast } from 'react-hot-toast';
import PostModal from './posts/PostModal';

interface DataLike {
  id: number,
  createdat: string,
  postid: number,
  userid: number
}

export default function FeaturedPosts() {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [postLoad, setPostLoad] = useState<PostTypes[]>();
  const [myLikes, setMyLikes] = useState<DataLike[]>([]);
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate();
  const user = useAuthStore<DataUserTypes>((state) => state.user);

  useEffect(() => {
    fetch('http://localhost:3000/post/loadAllPost')
      .then(res => res.json())
      .then(data => setPostLoad(data));

    if (user) {
      fetch(`http://localhost:3000/like/likeFor/${user.id}`)
        .then(res => res.json())
        .then(data => setMyLikes(data));
    }
  }, [refresh]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const navigateComments = (post: PostTypes): void => {
    fetch(`http://localhost:3000/comment/loadAllCommentById/${post.id}`)
      .then(res => res.json())
      .then(params => {
        navigate('/comment', { state: { params: params, postid: post.id } });
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }

  const islike = (post: PostTypes): boolean => {
    return myLikes.some(e => e.postid === post.id);
  }

  const likeOrDislike = (post: PostTypes) => {
    if (user) {
      const url = islike(post) ?
        `http://localhost:3000/like/deleteLike/${post.id}/${user.id}` :
        `http://localhost:3000/like/createLike/${post.id}/${user.id}`;
      fetch(url).then(() => setRefresh(!refresh));
    } else {
      toast.error('Need loggin', { duration: 1500 });
    }
  }

  const handlePost = (postId: number) => {
    setSelectedPostId(selectedPostId === postId ? null : postId); // Toggle the modal
  }

  return (
    <section className="py-16 bg-gray-50">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postLoad ? postLoad.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48" onClick={() => handlePost(post.id)}>
                <img
                  src='https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit =crop'
                  // src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {selectedPostId === post.id ? <PostModal postId={post.id} onClose={() => handlePost(post.id)} countLike={post.likecount as number} /> : null}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {formatDate(post.createdat)}
                    </span>
                    <span className="flex items-center" onClick={() => navigateComments(post)}>
                      <MessageCircle size={16} className="mr-1" />
                      {post.commentcount}
                    </span>
                    <span className="flex items-center" onClick={() => likeOrDislike(post)}>
                      <LucideHeart size={16} className="mr-1" color={islike(post) ? 'red' : 'grey'} />
                      {post.likecount}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )) : null}
        </div>
      </div>
    </section>
  );
}