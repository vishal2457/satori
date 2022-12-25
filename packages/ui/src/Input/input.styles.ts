import { Text } from "../text";
import { styled } from "../theme/stitches.config";


export const InputStyled = styled('input', {
    p: "$4",
    border: "1px solid $colors$gray8",
    borderRadius: '$xs',
    transition: "border .1s ease,border .1s ease",
    fontSize: "$sm",
    backgroundColor: 'transparent',
    '&:focus': {
      outline: "none",
      border: "1px solid $colors$gray10",
     },
});


export const Label = styled('p', {
    color: "$gray10",
    fontSize: '$base',
    mb: '$2',

})

export const Wrapper = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
})