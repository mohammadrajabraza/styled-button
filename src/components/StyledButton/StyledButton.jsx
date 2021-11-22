import { Button } from './styled'
const StyledButton = (props) => {
  const { text, children } = props
  return (
    <Button {...props} hasChildren={children && true}>
      {children}
      {text}
    </Button>
  )
}

export default StyledButton
