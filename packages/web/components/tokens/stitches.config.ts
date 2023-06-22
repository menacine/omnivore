import type * as Stitches from '@stitches/react'
import { createStitches, createTheme } from '@stitches/react'

export enum ThemeId {
  Light = 'Light',
  Dark = 'Dark',
  Sepia = 'Sepia',
  Apollo = 'Apollo',
  Black = 'Black',
}

export const { styled, css, theme, getCssText, globalCss, keyframes, config } =
  createStitches({
    utils: {
      bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      px: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mx: (value: Stitches.PropertyValue<'margin'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
    },
    theme: {
      fonts: {
        inter: 'Inter, sans-serif',
        display: '-apple-system, BlinkMacSystemFont, sans-serif',
      },
      fontSizes: {
        1: '0.75em',
        2: '0.875em',
        3: '1em',
        4: '1.25em',
        5: '1.5em',
        6: '2em',
      },
      space: {
        1: '0.25em',
        2: '0.5em',
        3: '1em',
        4: '2em',
        5: '4em',
        6: '8em',
      },
      sizes: {
        1: '0.25em',
        2: '0.5em',
        3: '1em',
        4: '2em',
        5: '4em',
        6: '8em',
      },
      radii: {
        1: '0.125em',
        2: '0.25em',
        3: '0.5em',
        round: '9999px',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      shadows: {
        panelShadow: '0px 4px 18px rgba(120, 123, 134, 0.12)',
        cardBoxShadow: '0px 16px 25px 16px rgba(32, 31, 29, 0.1)',
      },
      zIndices: {},
      transitions: {},

      colorScheme: {
        colorScheme: 'light',
      },

      colors: {
        grayBase: '#F8F8F8',
        grayBg: '#FFFFFF',
        grayBgActive: '#e6e6e6',
        grayBorder: '#F0F0F0',
        grayTextContrast: '#3A3939',
        graySolid: '#9C9B9A',
        utilityTextDefault: '#3B3938',
        utilityTextSubtle: 'rgba(255, 255, 255, 0.65)',
        textNonessential: 'rgba(10, 8, 6, 0.4)',

        grayBgSubtle: 'hsl(0 0% 97.3%)',
        grayBgHover: 'hsl(0 0% 93.0%)',
        grayLine: 'hsl(0 0% 88.7%)',
        grayBorderHover: 'hsl(0 0% 78.0%)',
        grayText: '#6A6968',

        // Semantic Colors
        highlightBackground: '255, 210, 52',
        recommendedHighlightBackground: '#E5FFE5',
        highlight: '#FFD234',
        highlightText: '#3D3D3D',
        error: '#FA5E4A',

        // Brand Colors
        omnivoreRed: '#FA5E4A;',
        omnivoreGray: '#3D3D3D',
        omnivoreYellow: 'rgb(255, 234, 159)',
        omnivoreLightGray: 'rgb(125, 125, 125)',
        omnivoreCtaYellow: 'rgb(255, 210, 52)',

        // Reader Colors
        readerBg: 'white',
        readerFont: '#3D3D3D',
        readerFontHighContrast: 'black',
        readerTableHeader: '#FFFFFF',
        readerMargin: 'white',

        // Avatar Fallback color
        avatarBg: '#FFEA9F',
        avatarFont: '#9C7C0A',

        labelButtonsBg: '#F5F5F4',

        textSubtle: '#605F5D',
        border: '#F0F0F0',

        //utility
        overlay: 'rgba(63, 62, 60, 0.2)',

        // New theme, special naming to keep things straight
        // once all switch over, we will rename
        thBackground: '#FFFFFF',
        thBackground2: '#F3F3F3',
        thBackground3: '#FFFFFF',
        thBackground4: '#EBEBEB',
        thBackground5: '#F5F5F5',
        thBackgroundActive: '#F9F9F9',
        thBackgroundContrast: '#FFFFFF',
        thLeftMenuBackground: '#FCFCFC',
        thLibraryBackground: '#F3F3F3',
        thLibrarySearchbox: '#FCFCFC',
        thLibraryMenuPrimary: '#3D3D3D',
        thLibraryMenuSecondary: '#3D3D3D',
        thLibraryMenuUnselected: '#898989',
        thLibrarySelectionColor: '#FFEA9F',

        thNotebookSubtle: '#6A6968',

        thTextContrast: '#1E1E1E',
        thTextContrast2: '#3D3D3D',

        thTextSubtle: '#1E1E1E',
        thTextSubtle2: '#6A6968',
        thTextSubtle3: '#ADADAD',

        thBorderColor: '#E1E1E1',
        thBorderSubtle: '#EEEEEE',

        thProgressFg: '#FFD234',

        thHighContrast: '#3D3D3D',
      },
    },
    media: {
      xsmDown: '(max-width: 375px)',
      smDown: '(max-width: 575px)',
      mdDown: '(max-width: 768px)',
      lgDown: '(max-width: 992px)',
      xlgDown: '(max-width: 1200px)',
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      xxl: '(min-width: 1500px)',
    },
  })

const darkThemeSpec = {
  colorScheme: {
    colorScheme: 'dark',
  },
  colors: {
    grayBase: '#252525',
    grayBg: '#3B3938',
    grayBgActive: '#4f4d4c',
    grayTextContrast: '#D8D7D7',
    grayBorder: '#323232',
    graySolid: '#9C9B9A',
    utilityTextDefault: '#CDCDCD',
    textNonessential: 'rgba(97, 97, 97, 1)',

    grayBgSubtle: 'hsl(0 0% 9.8%)',
    grayBgHover: 'hsl(0 0% 13.8%)',
    grayLine: 'hsl(0 0% 19.9%)',
    grayBorderHover: 'hsl(0 0% 31.2%)',
    grayText: '#CDCDCD',

    // Semantic Colors
    highlightBackground: '134, 109, 21',
    recommendedHighlightBackground: '#1F4315',
    highlight: '#FFD234',
    highlightText: 'white',
    error: '#FA5E4A',

    // Reader Colors
    readerBg: '#303030',
    readerFont: '#b9b9b9',
    readerFontHighContrast: 'white',
    readerTableHeader: '#FFFFFF',
    readerMargin: '#2A2A2A',

    avatarBg: '#7B5C3E',
    avatarFont: '#D9D9D9',

    textSubtle: '#AAAAAA',
    border: '#323232',

    //utility
    utilityTextSubtle: 'rgba(255, 255, 255, 0.65)',
    overlay: 'rgba(10, 8, 6, 0.65)',

    labelButtonsBg: '#5F5E58',

    // New theme, special naming to keep things straigh
    // once all switch over, we will rename
    // DARK
    colorScheme: 'dark',
    thBackground: '#2A2A2A',
    thBackground2: '#3D3D3D',
    thBackground3: '#242424',
    thBackground4: '#3D3D3D',
    thBackground5: '#3D3D3D',
    thBackgroundActive: '#2E2E2E',
    thBackgroundContrast: '#000000',
    thLeftMenuBackground: '#1D1D1D',
    thLibraryBackground: '#333333',
    thLibrarySearchbox: '#3D3D3D',
    thLibraryMenuPrimary: '#EBEBEB',
    thLibraryMenuSecondary: '#EBEBEB',
    thLibraryMenuUnselected: '#898989',
    thLibrarySelectionColor: '#3D3D3D',

    thNotebookSubtle: '#898989',

    thTextContrast: '#FFFFFF',
    thTextContrast2: '#EBEBEB',

    thTextSubtle: '#D9D9D9',
    thTextSubtle2: '#D9D9D9',
    thTextSubtle3: '#ADADAD',

    thBorderColor: '#4F4F4F',
    thBorderSubtle: '#6A6968',

    thProgressFg: '#FFD234',

    thHighContrast: '#D9D9D9',
  },
  shadows: {
    cardBoxShadow:
      '0px 0px 9px -2px rgba(5, 5, 5, 0.16), 0px 7px 12px rgba(0, 0, 0, 0.13)',
  },
}

// This is used by iOS
const blackThemeSpec = {
  colors: {
    readerBg: 'black',
  },
}

const sepiaThemeSpec = {
  colorScheme: {
    colorScheme: 'light',
  },
  colors: {
    readerBg: '#FBF0D9',
    readerFont: '#5F4B32',
    readerMargin: '#F3F3F3',
    readerFontHighContrast: '#0A0806',
    readerTableHeader: '#FFFFFF',
  },
}

const apolloThemeSpec = {
  colors: {
    readerBg: '#6A6968',
    readerFont: '#F3F3F3',
    readerMargin: '#474747',
    readerFontHighContrast: 'white',
    readerTableHeader: '#FFFFFF',
  },
}

export const darkTheme = createTheme(ThemeId.Dark, darkThemeSpec)
export const sepiaTheme = createTheme(ThemeId.Sepia, {
  ...darkThemeSpec,
  ...sepiaThemeSpec,
})
export const apolloTheme = createTheme(ThemeId.Apollo, {
  ...darkThemeSpec,
  colors: {
    ...darkThemeSpec.colors,
    ...apolloThemeSpec.colors,
  },
})
export const blackTheme = createTheme(ThemeId.Black, {
  ...darkThemeSpec,
  colors: {
    ...darkThemeSpec.colors,
    ...blackThemeSpec.colors,
  },
})

// Apply global styles in here
export const globalStyles = globalCss({
  body: {
    colorScheme: 'var(--colorScheme-colorScheme)',
    backgroundColor: '$thBackground',
  },
  // browser prefers this loaded here vs in the article styling css
  '.article-inner-css': {
    '::selection': {
      background: 'rgb($highlightBackground)',
    },
  },
})
