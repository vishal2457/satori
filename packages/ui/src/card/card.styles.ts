import { styled, VariantProps } from "../theme/stitches.config";

export const CardStyled = styled('div', {
    borderRadius: "$sm",
    display: 'flex',
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    padding: "$8",
    border: "1px solid $colors$gray8",
    transition: "box-shadow .2s ease,border .2s ease",
      variants: {
        hover: {
            true: {
                '&:hover': {
                    border: "1px solid transparent",
                    normalShadow: '$gray8'
                   },
            }
        }
      },
      defaultVariants: {hover: true}
});


export type CardVariantProps = VariantProps<typeof CardStyled>;
