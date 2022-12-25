import React from 'react'
import { CSS } from '../theme/stitches.config'
import { GroupBox, GroupVariantsProps } from './group.styles'


type groupProps = {children :any} & GroupVariantsProps & {className?: string, css?: CSS}

export const Group = ({children, className, ...rest}: groupProps) => {
  return (
    <GroupBox {...rest} className={className}>
        {children}
    </GroupBox>
  )
};