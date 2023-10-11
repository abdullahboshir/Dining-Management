import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes/publicRoutes';
import { privateRoutes } from './routes/privateRoutes';
import PrivateRoute from './authentication/PrivateRoute';
import Dinings from './pages/Dinings';
import AdminRoute from './authentication/AdminRoute';
import { ContextProvider } from './context/ContextProvider';
import Navbar from './components/shared/Navbar';

function App() {
 
  return (
      <div className="App">
        <ContextProvider>
          <Navbar/>
        <Routes>

          {
            publicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
          }

          <Route element={<PrivateRoute />}>\
            {
              privateRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
            }
          </Route>


          <Route
            path="/dinings"
            element={<AdminRoute element={<Dinings />} />}
          />

        </Routes>
    
        </ContextProvider>




      </div>

  );
}

export default App;