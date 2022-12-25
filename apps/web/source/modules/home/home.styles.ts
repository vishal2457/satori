import { styled } from "ui";

export const Pills = styled("span", {
  backgroundColor: "$blue3",
  borderRadius: "$md",
  px: "$6",
  py: "$3",
  borderColor: "$blue5",
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
  variants: {
    active: {
      true: {
        borderColor: "$blue8",
      },
    },
  },
  defaultVariants: {
    active: true,
  },
});

export const SearchInput = styled('input', {
  p: "$3",
  border: "1px solid $colors$gray8",
  borderRadius: "$sm",
  transition: "border .2s ease,border .2s ease",
  width: "15%",
  '&:focus': {
    outline: "none",
    border: "1px solid $colors$gray10",
   },
})

export const GridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  gap: "$10",
});

export const TagPill = styled("span", {
  borderRadius: "$md",
  px: "$4",
  py: "$2",
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
  variants: {
    type: {
      default: {
        backgroundColor: "$gray1",
        borderColor: "$gray6",
      },
      push: {
        backgroundColor: "$green1",
        borderColor: "$green7",
      },
      merge: {
        backgroundColor: "$indigo1",
        borderColor: "$indigo6",
      }
      
    }
  },
  defaultVariants: {
    type: 'default'
  }
});
