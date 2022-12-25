import { styled, VariantProps } from "../theme/stitches.config";

export const StyledButton = styled('button',     {
    // dflex: 'center',
    justifyContent: 'center',
    appearance: 'none',
    boxSizing: ' border-box',
    fontWeight: '$medium',
    us: 'none',
    lineHeight: '$sm',
    ta: 'center',
    whiteSpace: 'nowrap',
    transition: '$default',
    position: 'relative',
    // overflow: 'hidden',
    border: '1px solid $colors$gray8',
    borderRadius: "$xs",
    backgroundColor: "transparent",
    cursor: 'pointer',
    pe: 'auto',
    p: "$5",
    '&.actionBtn': {
      transition: "all 0.5s",
      maxWidth: "36px",
      height: '36px',
      overflow: "hidden",
      'svg': {
        fill: "white"
      }
    },
    '&.actionBtn:hover': {
      transition: "all 0.5s",
      maxWidth: "200px",
    },
    '&:hover': {
      opacity: 0.85,
      '.textIndent': {
        // transition: "all 0.5s",
        // width: "auto"
      },
    },
    '@motion': {
      transition: 'none'
    },
    '.textIndent': {
      paddingLeft: 10,
      // transition: "all 0.5s",
      // display: "inline-block",
      // width: "0"
    },
}

)

export type ButtonVariantsProps = VariantProps<typeof StyledButton>;
