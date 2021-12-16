import { Button } from './styled'
import React from 'react'
const StyledButton = (props) => {
  const { text, color, children, ...restProps } = props
  return (
    <Button
      color={color}
      hasChildren={children && true}
      {...restProps}
      hasText={text}
    >
      {children && React.cloneElement(children, { color })}
      {text}
    </Button>
  )
}

export default StyledButton
