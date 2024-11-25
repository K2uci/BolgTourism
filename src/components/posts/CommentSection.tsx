import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';
import { createComment } from '../../lib/api';
import { useQueryClient } from 'react-query';
import { CommentTypes } from '../../types/CommentsTypes';
import { Toaster, toast } from 'react-hot-toast';

interface LocationState {
  params: CommentTypes[];
  postid: number
}

export default function CommentSection() {
  const navigation = useNavigate();
  const location = useLocation();
  const { params , postid } = location.state as LocationState || { params: [] };
  const { register, handleSubmit, reset } = useForm();
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  const onSubmit = async (data: any) => {
    try {
      await createComment(postid, user.id, data.content);
      queryClient.invalidateQueries(['post', postid]);
      reset();
      toast.success('Comment added successfully!', { duration: 3000 });
      setTimeout(() => {
        navigation('/');
      }, 3500);
    } catch (error) {
      toast.error('Failed to add comment');
    }
  };
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };
  return (
    <div className="space-y-6">
      <Toaster />
      <h3 className="text-xl font-semibold">Comments</h3>
      {user ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <textarea
            {...register('content', { required: true })}
            placeholder="Add a comment..."
            className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
            rows={3}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Post Comment
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Please login to comment</p>
      )}

      <div className="space-y-4">
        {params.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg" >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{comment.authorid}</span>
              <span className="text-sm text-gray-500">
                {formatDate(comment.createdat)}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}