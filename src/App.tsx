import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CommentSection from './components/posts/CommentSection';

const queryClient = new QueryClient();

function Main() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/comment" Component={CommentSection} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}


export default App;