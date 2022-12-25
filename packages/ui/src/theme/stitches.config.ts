import { darkColors, defaultTokens, defaultUtils, lightColors, shadows } from './common';
import { createStitches as cs, VariantProps as VP, CSS as CSS_STITCHES, createTheme  } from '@stitches/react';

const stitches = cs({
    theme: {
      ...defaultTokens,
      colors:lightColors,
      shadows: {
        ...shadows
      },
    },
    utils: defaultUtils,
    media: {
      bp0: '(min-width: 240px)',
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  });

  export const cssFocusVisible = stitches.css({
    variants: {
      isFocusVisible: {
        true: {
          outline: 'none',
          boxShadow:
            '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary !important'
        }
      }
    }
  });

  export const {theme, styled, keyframes} = stitches;
  export type VariantProps<T> = VP<T>;
  export type CSS = CSS_STITCHES;

  export const darkTheme = createTheme({ 
    colors:darkColors,
    shadows: {
      ...shadows
    },
});



