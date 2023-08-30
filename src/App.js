import './App.css';
import { ReusableComponent } from './components/shared/ReusableComponent';
import { AuthContextProvider } from './context/AuthContextProvider';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ReusableComponent>
          <AllRoutes />
        </ReusableComponent>
      </AuthContextProvider>
    </div>
  );
}

export default App;