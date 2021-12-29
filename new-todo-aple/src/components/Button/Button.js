import { ButtonStyled, TextWrapper } from './Button.style'

const Button = props => {
  const {
    flagStatus,
    isHover,
    isActive,
    children,
    shape,
    icon,
    variant,
    ...rest
  } = props

  return (
    <ButtonStyled
      {...rest}
      flagStatus={flagStatus}
      variant={variant}
      isHover={isHover}
      isActive={isActive}
      shape={shape}>
      {icon && children ? (
        <>
          {icon} <TextWrapper>{children}</TextWrapper>
        </>
      ) : icon ? (
        icon
      ) : children ? (
        children
      ) : null}
    </ButtonStyled>
  )
}
// rewrite logick vunestu na verh
export default Button
