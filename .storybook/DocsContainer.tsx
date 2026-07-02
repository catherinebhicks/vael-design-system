import React, { useEffect } from 'react';
import { DocsContainer as BaseDocsContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { blueprintLight, blueprintDark } from './theme-blueprint';
import { blueprintCssVars } from '../vael/blueprint';

/**
 * Docs page wrapper — themes the docs chrome with the Blueprint manager theme and
 * sets `data-theme` + the site's CSS vars on the docs document so `vael-docs.css`
 * renders (and toggles) correctly, including on prose-only pages where no story
 * decorator runs to set them.
 */
export function DocsContainer({ children, context }: { children: React.ReactNode; context: any }) {
  const dark = useDarkMode();
  const mode: 'light' | 'dark' = dark ? 'dark' : 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', mode);
    Object.entries(blueprintCssVars(mode)).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [mode]);

  return (
    <BaseDocsContainer theme={dark ? blueprintDark : blueprintLight} context={context}>
      {children}
    </BaseDocsContainer>
  );
}

export default DocsContainer;
