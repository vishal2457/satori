import { styled, VariantProps } from '../theme/stitches.config';

export const ContainerComp = styled('div', {
    py: "$10",
    variants: {
        size: {
            sm: {
                mx: "$64"
            },
            md: {
                mx: "$48"
            },
            lg: {
                mx: "$10"
            }
        }
    },
    defaultVariants: {
        size: "md"
    }
})

export type ContainerVariantsProps = VariantProps<typeof ContainerComp>;
