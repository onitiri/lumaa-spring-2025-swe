import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Auth from './components/Auth';
// import Tasks from './components/Tasks';
import Tasks from './components/Tasks';

const App: React.FC = () => {
  const { token } = useAuth();

  return (
    <div>
      {token ? <Tasks /> : <Auth />}
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
