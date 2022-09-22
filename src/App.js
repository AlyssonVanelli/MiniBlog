import { RouterApp } from './routes';

import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <div className='App'>
      < AuthProvider>
        < RouterApp />
      </AuthProvider>
    </div>
  );
}

export default App;
