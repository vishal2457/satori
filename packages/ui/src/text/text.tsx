import React from 'react'
import type * as Stitches from '@stitches/react';
import { StyledText, TextVariantsProps } from './text.styles';


type textProps = {children :any} & TextVariantsProps & {className?: string, css?: Stitches.CSS}

export const Text = ({children, ...rest}: textProps) => {
  return (
    <StyledText {...rest} >
      {children}
    </StyledText>
  )
}