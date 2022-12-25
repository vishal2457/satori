import { styled, VariantProps } from "../theme/stitches.config";

export const GroupBox = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 100,
  width: "100%",
  variants: {
    position: {
      left: {
        justifyContent: "flex-start",
      },
      right: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
      apart: {
        justifyContent: "space-between",
      },
    },
    space: {
        xs: {
            gap: "$2"
        },
        sm: {
            gap: "$4"
        },
        md: {
            gap: "$6"
        },
        lg: {
            gap: "$8"
        },
        xl: {
            gap: "$10"
        },
        xxl: {
            gap: "$12"
        },
        xxxl: {
            gap: "$15"
        },
    },
    verticle: {
      true: {
        flexDirection: "row",
      },
    },
   
    horizontal: {
      true: {
        flexDirection: "column",
      },
    },
    noWrap: {
      true: {
        flexWrap: "nowrap",
      },
      false: {
        flexWrap: "wrap",
      },
    },
  },
  defaultVariants: {
      position: "left",
      verticle: true,
      space: "md"
  }
});
export type GroupVariantsProps = VariantProps<typeof GroupBox>;
