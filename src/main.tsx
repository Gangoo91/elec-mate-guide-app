
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
