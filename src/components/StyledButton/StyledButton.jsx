import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styled'

const StyledButton = (props) => {
  const { text, color, size, children, ...restProps } = props
  return (
    <Button
      color={color}
      size={size}
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

StyledButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['regular', 'small', 'large'])
}
