import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/privateRoute';
import RedirectRoute from './pages/redirectRoute';
import GoogleAuth from './components/googleAuth';
import './App.css';

const LoginPage = lazy(() => import('./pages/auth'));
const Main = lazy(() => import('./pages/main'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Suspense>
                <LoginPage />
              </Suspense>
            </RedirectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <Suspense>
                <LoginPage />
              </Suspense>
            </RedirectRoute>
          }
        />
        <Route
          path="/google-user"
          element={
            <Suspense>
              <GoogleAuth />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Suspense>
                <NotFound />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="/main"
          element={
            <PrivateRoute>
              <Suspense>
                <Main />
              </Suspense>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
