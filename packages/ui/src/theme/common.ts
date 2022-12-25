import {
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
     indigo,
     whiteA,
     indigoDark,
     orange,
     gray,
     blue,
  } from '@radix-ui/colors';
  import type * as Stitches from '@stitches/react';
  
export const defaultTokens = {
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontSizes: {
      tiny: '.5rem',
      xs: '0.70rem',
      base: '0.925rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.625,
      xl: 1.75
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    space: {
      0: '0rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '2.25rem',
      px: '1px',
      1: '0.1rem',
      2: '0.2rem',
      3: '0.3rem',
      4: '0.4rem',
      5: '0.5rem',
      6: '0.6rem',
      7: '0.7rem',
      8: '0.8rem',
      9: '0.9rem',
      10: '1rem',
      11: '1.25rem',
      12: '1.5rem',
      13: '1.75rem',
      14: '2rem',
      15: '2.25rem',
      16: '2.5rem',
      17: '2.75rem',
      18: '3rem',
      20: '3.25rem',
      24: '3.5rem',
      28: '3.75rem',
      32: '4rem',
      36: '4.25rem',
      40: '4.5rem',
      44: '4.75rem',
      48: '5rem',
      52: '5.25rem',
      56: '5.5rem',
      60: '5.75rem',
      64: '6rem',
      72: '6.25rem',
      80: '6.5rem',
      96: '6.75rem'
    },
    radii: {
      xs: '3px',
      sm: '5px',
      md: '7px',
      base: '14px',
      lg: '14px',
      xl: '18px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999'
    },
    borderWidth: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
    transitions: {
      default: 'all 150ms ease'
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px'
    },
    sizes: {
        headerHeight: '64px'
    }
  };

  export const defaultUtils = {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
      textAlign: value
    }),
    tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
      textTransform: value
    }),

    ts: (value: Stitches.PropertyValue<'textShadow'>) => ({
      textShadow: value
    }),
    to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
      textOverflow: value
    }),
    d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
    dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
      display: 'flex',
      alignItems: value,
      justifyContent: value
    }),
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
      alignSelf: value
    }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
      fontSize: value
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
      flexBasis: value
    }),
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),
    bf: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
      backdropFilter: value
    }),
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      background: value
    }),
    bgBlur: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      bf: 'saturate(180%) blur(10px)',
      bg: `${value}66`
    }),
    bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    bw: (value: Stitches.PropertyValue<'borderWidth'>) => ({
      borderWidth: value
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value
    }),
    normalShadow: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      boxShadow: `0 4px 14px 0 $colors${value}`
    }),
    normalShadowVar: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      boxShadow: `0 4px 14px 0 ${value}`
    }),
    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value
    }),
    ov: (value: Stitches.PropertyValue<'overflow'>) => ({ overflow: value }),
    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
      overflowX: value
    }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
      overflowY: value
    }),
    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value
    }),
    events: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
    h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
    mw: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value
    }),
    mh: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),
    minSize: (value: Stitches.PropertyValue<'width'>) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    sizeMin: (value: Stitches.PropertyValue<'width'>) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    maxSize: (value: Stitches.PropertyValue<'width'>) => ({
      maxWidth: value,
      maxHeight: value
    }),
    sizeMax: (value: Stitches.PropertyValue<'width'>) => ({
      maxWidth: value,
      maxHeight: value
    }),
    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    scale: (value: Stitches.PropertyValue<'scale'>) => ({
      transform: `scale(${value})`
    }),
    linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    tdl: (value: Stitches.PropertyValue<'textDecorationLine'>) => ({
      textDecorationLine: value
    }),
    textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&::selection': {
        WebkitTextFillColor: '$colors$text'
      }
    })
  };
  
  export const shadows = {
    xs: '-4px 0 4px rgb(0 0 0 / 5%);',
    sm: '0 5px 20px -5px rgba(0, 0, 0, 0.1)',
    md: '0 8px 30px rgba(0, 0, 0, 0.15)',
    lg: '0 30px 60px rgba(0, 0, 0, 0.15)',
    xl: '0 40px 80px rgba(0, 0, 0, 0.25)'
  }
  


  export const lightColors= {
    ...red,
    ...green,
    ...whiteA,
    ...indigo,
    ...orange,
    ...grayDark,
    ...gray,
    ...blue
  }

  export const darkColors= {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...indigoDark,
    ...blueDark,
  }