import styled from 'styled-components'

const IconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.iconBg || '#2a6bd8'};
  color: white;
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
`

export default IconStyled
