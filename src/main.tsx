
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Clear any cached content before rendering
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}

// Force clear cache on load to prevent stale content
if (typeof window !== 'undefined') {
  // Clear application cache
  if (window.caches) {
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          return caches.delete(key);
        })
      );
    });
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
