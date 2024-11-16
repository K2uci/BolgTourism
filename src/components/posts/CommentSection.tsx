import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../lib/store';
import { createComment } from '../../lib/api';
import { useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

export default function CommentSection({ postId, comments }: { postId: string; comments: any[] }) {
  const { register, handleSubmit, reset } = useForm();
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  const onSubmit = async (data: any) => {
    try {
      await createComment(postId, data.content);
      queryClient.invalidateQueries(['post', postId]);
      reset();
      toast.success('Comment added successfully!');
    } catch (error) {
      toast.error('Failed to add comment');
    }
  };

  return (
    <div className="space-y-6">
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
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{comment.author.name}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}