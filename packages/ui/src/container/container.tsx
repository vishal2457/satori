import React from 'react'
import { ContainerComp, ContainerVariantsProps } from './container.styles'

export const Container = (props: ContainerVariantsProps & {children: any}) => {
  return (
    <ContainerComp {...props} />
  )
}
