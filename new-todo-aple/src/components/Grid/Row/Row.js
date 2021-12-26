import RowStyle from './Row.style'

const Row = (props) => {
  const {children} = props

  return <RowStyle {...props}>{children}</RowStyle>
}

export default Row
