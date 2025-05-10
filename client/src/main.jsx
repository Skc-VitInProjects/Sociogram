import { createRoot } from 'react-dom/client';
import './index.css';


//importing routers , so that we can go from one page to another
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
