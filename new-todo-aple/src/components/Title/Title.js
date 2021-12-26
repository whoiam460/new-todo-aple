import TitleStyled from './Title.style'

const Title = props => {
  const { children, variant, color, ...rest } = props

  return (
    <TitleStyled {...rest} variant={variant} color={color}>
      {children}
    </TitleStyled>
  )
}

export default Title
