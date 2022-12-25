import React from 'react'
import { ButtonVariantsProps, StyledButton } from './button.styles'

type ButtonProps = React.ButtonHTMLAttributes<unknown>& ButtonVariantsProps  & {loading?: boolean, children: any};

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} >{props.children}</StyledButton>
  )
}
