import styled, { css } from 'styled-components'

const TextStyled = styled.div`
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return css`
          font-size: 12px;
          line-height: 12px;
          font-weight: normal;
          font-family: 'San Francisco';
          color: ${props => props.color || '#848484'};
        `
      default:
        return css`
          font-size: 16px;
          line-height: 16px;
          font-weight: normal;
          font-family: 'San Francisco';
          color: ${props => props.color || '#696a6a'};
        `
    }
  }}
`

export default TextStyled
