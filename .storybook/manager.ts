import { addons } from 'storybook/manager-api';
import { blueprintLight } from './theme-blueprint';

// Default manager (chrome) theme = Blueprint light. storybook-dark-mode swaps to
// blueprintDark when the toggle flips (see parameters.darkMode in preview.tsx).
addons.setConfig({
  theme: blueprintLight,
  enableShortcuts: true,
  sidebar: { showRoots: true },
});
