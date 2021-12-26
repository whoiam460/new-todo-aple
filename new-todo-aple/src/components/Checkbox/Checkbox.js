import  CheckboxStyled  from './Checkbox.style'

const Checkbox = props => {
  const { bgColor, size, onClick, className } = props

  return (
    <CheckboxStyled
      bgColor={bgColor}
      size={size}
      className={className}
      onClick={onClick}
    />
  )
}

export default Checkbox
