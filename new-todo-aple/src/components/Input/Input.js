import { IconWrapper, InputStyled, InputWrapper } from './Input.style'

const Input = props => {
  const { icon, placeholder, type, ...rest } = props

  return (
    <InputWrapper  >
      <IconWrapper>{icon}</IconWrapper>
      <InputStyled {...rest} placeholder={placeholder} type={type} />
    </InputWrapper>
  )
}

export default Input
