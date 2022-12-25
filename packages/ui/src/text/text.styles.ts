import { cssFocusVisible, styled, VariantProps } from "../theme/stitches.config";

export const StyledText = styled(
    'p', {
      my: 0,
      variants: {
        space: {
          xs: {
            letterSpacing: "$tighter"
          },
          sm: {
            letterSpacing: "$tight"
          },
          md: {
            letterSpacing: "$normal"
          },
          lg: {
            letterSpacing: "$wide"
          },
          xl: {
            letterSpacing: "$wider"
          },
          xxl: {
            letterSpacing: "$widest"
          }
        },
        size: {
          h1: {
            fontSize: '$xl',
            lineHeight: '$xl',
          },
          h2: {
            fontSize: '$lg',
            lineHeight: '$lg',
          },
          h3: {
            fontSize: '$md',
            lineHeight: '$md',
          },
          h4: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },
          h5: {
            fontSize: '$base',
            lineHeight: '$md',
          },
          h6: {
            fontSize: '$xs',
            lineHeight: '$md',
          },
        },
        color: { 
          default: {
            color: "$grayDark"
          },
          primary: {
            color: "$pText1"
          },
          white: {
            color: "#fff"
          }
        },
        weight: {
          hairline: {
            fontWeight: '$hairline'
          },
          thin: {
            fontWeight: '$thin'
          },
          light: {
            fontWeight: '$light'
          },
          normal: {
            fontWeight: '$normal'
          },
          medium: {
            fontWeight: '$medium'
          },
          semibold: {
            fontWeight: '$semibold'
          },
          bold: {
            fontWeight: '$bold'
          },
          extrabold: {
            fontWeight: '$extrabold'
          },
        },
        style: {
          normal: {
            fontStyle: 'normal'
          },
          italic: {
            fontStyle: 'italic'
          },
        },
        transform: {
          uppercase: {
            textTransform: 'uppercase'
          },
          lowercase: {
            textTransform: 'lowercase'
          },
          capitalize: {
            textTransform: 'capitalize'
          },
        },
        decoration: {
          overline: {
            textDecoration: 'overline'
          },
          linethrough: {
            textDecoration: 'line-through'
          },
          underline: {
            textDecoration: 'underline'
          },
        },
        shadow: {
          true: {
            ts: '$sm'
          }
        },
        link: {
          true: {
            cursor: 'pointer',
            color: "blue",
          }
        },
        mute: {
          true: {
            color: "$gray11"
          }
        }
      },
      defaultVariants: {
        color: 'default',
        weight: 'normal',
        style: 'normal',
        size: 'h5',
        space: "md"
      }
    },
    cssFocusVisible
  );
  
  export type TextVariantsProps = VariantProps<typeof StyledText>;
