import React from 'react'
import { InputStyled, Label, Wrapper } from './input.styles'

export const Input = (props:any) => {
  return (
    <Wrapper>
        <Label>{props.label}</Label>
    <InputStyled {...props} />
    </Wrapper>
  )
}
