import ColStyled from './Col.style'

const Col = props => {
  const { children } = props

  return <ColStyled {...props}>{children}</ColStyled>
}

export default Col
