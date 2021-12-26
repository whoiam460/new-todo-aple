import CounterStyle from './Counter.style'

const Counter = props => {
  const { children, ...rest } = props

  return <CounterStyle {...rest}>{children}</CounterStyle>
}

export default Counter
