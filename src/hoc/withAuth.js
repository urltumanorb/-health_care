// src/hoc/withAuth.js
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/login');
      }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
