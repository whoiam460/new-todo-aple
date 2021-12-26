import TextStyled from './Text.style'

const Text = props => {
  const { children, variant, color, ...rest } = props

  return (
    <TextStyled {...rest} variant={variant} color={color}>
      {children}
    </TextStyled>
  )
}

export default Text
