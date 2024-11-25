import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '../../lib/store';
import { loginUser } from '../../lib/api';
import { Toaster, toast } from 'react-hot-toast';
import RegisterModal from './RegisterModal';
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
  const setAuth = useAuthStore((state) => state.setAuth);

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await loginUser(data.email, data.password);
      if (response) {
        setAuth(response.token, response.user);
        toast.success('Successfully logged in!', { duration: 2000 });
        onClose();
      } else {
        toast.error('Invalid credentials', { duration: 2000 });
      }
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Toaster />
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email')}
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              {...register('password')}
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div className="flex relative justify-end space-x-4">
            <button
              type="button"
              className="absolute left-0 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              Register
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}