import IconStyled from './IconModule.style'

const IconModule = props => {
  const { icon, iconBg } = props

  return <IconStyled iconBg={iconBg}>{icon}</IconStyled>
}

export default IconModule
