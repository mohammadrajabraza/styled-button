import { Button } from './styled'
const StyledButton = (props) => {
  const { text } = props
  return (
    <Button {...props}>{text}</Button>
  )
}

export default StyledButton
