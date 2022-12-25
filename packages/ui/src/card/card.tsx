import React from 'react'
import { CSS } from '../theme/stitches.config'
import { CardStyled, CardVariantProps } from './card.styles';


type props = CardVariantProps & {children: any, css?: CSS}

export const Card = ({ children,...props}: props) => {
  return (
    <CardStyled {...props}>{children}</CardStyled>
  )
}
