import { Button } from './styled'
import React from 'react'
const StyledButton = (props) => {
  const { text, children } = props
  return (
    <Button {...props} hasChildren={children && true}>
      {children && React.cloneElement(children, { ...props })}
      {text}
    </Button>
  )
}

export default StyledButton
