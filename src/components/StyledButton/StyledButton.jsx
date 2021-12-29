import { Button } from './styled'
import React from 'react'
const StyledButton = (props) => {
  const { text, primary, secondary, tertiary, children, ...restProps } = props
  return (
    <Button
      tertiary={tertiary}
      secondary={secondary}
      primary={primary}
      hasChildren={children && true}
      {...restProps}
      hasText={text}
    >
      {children && React.cloneElement(children, { primary, secondary, tertiary })}
      {text}
    </Button>
  )
}

export default StyledButton
