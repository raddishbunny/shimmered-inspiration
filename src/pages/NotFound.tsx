
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '@/components';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="glass p-8 rounded-xl text-center max-w-md">
        <FadeIn>
          <h1 className="font-gothic text-5xl mb-6">404</h1>
          <h2 className="font-serif text-2xl mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            You'll be redirected to the home page in a few seconds.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="button-primary"
          >
            Return Home
          </button>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotFound;
