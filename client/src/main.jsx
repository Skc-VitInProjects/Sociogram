import { createRoot } from 'react-dom/client';
import './index.css';


//importing routers , so that we can go from one page to another
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../context/AuthContext.jsx';
import ChatContainer from './components/ChatContainer.jsx';
import { ChatProvider } from '../context/ChatContext.jsx';


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
     <AuthProvider>
        <ChatProvider>
             <App />
        </ChatProvider>
        
    </AuthProvider>
    
  </BrowserRouter>,
);
