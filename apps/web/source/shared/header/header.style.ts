import Image from "next/image";
import { Button, styled } from "ui";



export const HeaderParent = styled('div', {
    borderBottomWidth: "thin",
    borderBottomStyle:"solid",
    borderBottomColor: "$gray7",
});

export const Logo = styled(Image, {
    borderRadius: "50%",
    backgroundColor: "white"
})

export const LogoText = styled('p', {
    fontSize: "$md",
    letterSpacing: '$widest',
    margin: '$0'
});


export const IconButton = styled(Button, {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: "$3",
   borderRadius: "$xs",
   backgroundColor:"$gray1",
   border: "1px solid $colors$gray7"
})