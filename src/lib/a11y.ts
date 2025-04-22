
/**
 * Accessibility utilities for improved keyboard navigation and screen reader support
 */

// Create descriptive IDs for ARIA attributes
export const createAriaId = (prefix: string, id?: string | number) => {
  return `${prefix}-${id || Math.random().toString(36).substring(2, 9)}`;
};

// Handle keyboard navigation for custom components
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  onEnter?: () => void,
  onSpace?: () => void,
  onArrow?: (direction: 'up' | 'down' | 'left' | 'right') => void
) => {
  switch (event.key) {
    case 'Enter':
      if (onEnter) {
        event.preventDefault();
        onEnter();
      }
      break;
    case ' ':
      if (onSpace) {
        event.preventDefault();
        onSpace();
      }
      break;
    case 'ArrowUp':
      if (onArrow) {
        event.preventDefault();
        onArrow('up');
      }
      break;
    case 'ArrowDown':
      if (onArrow) {
        event.preventDefault();
        onArrow('down');
      }
      break;
    case 'ArrowLeft':
      if (onArrow) {
        event.preventDefault();
        onArrow('left');
      }
      break;
    case 'ArrowRight':
      if (onArrow) {
        event.preventDefault();
        onArrow('right');
      }
      break;
  }
};

// Skip to content link functionality
export const setupSkipLink = () => {
  const skipLink = document.getElementById('skip-to-content');
  const mainContent = document.getElementById('main-content');
  
  if (skipLink && mainContent) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.tabIndex = -1;
      mainContent.focus();
    });
  }
};

// Announce messages to screen readers
export const announce = (message: string, assertive = false) => {
  // Find or create an aria-live region
  let liveRegion = document.getElementById('aria-live-announcer');
  
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-announcer';
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
    document.body.appendChild(liveRegion);
  }
  
  // Set the message
  liveRegion.textContent = message;
  
  // Clear after a delay
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 3000);
};

export const hiddenVisually = "absolute w-1 h-1 overflow-hidden clip-rect-0";
