import styled from 'styled-components'

const CounterStyle = styled.div`
  color: ${props => props.color || '#514c52'};
  font-size: ${props => props.size || '15px'};
  line-height: ${props => props.size || '15px'};
`
export default CounterStyle
