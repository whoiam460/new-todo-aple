import styled, { css } from 'styled-components'

const TitleStyled = styled.div`
  // bilder h1

  ${props => {
    switch (props.variant) {
      case 'h2':
        return css`
          font-size: 24px;
          line-height: 24px;
          font-weight: bold;
          color: ${props => props.color || '#037aff'};
        `
      case 'h3':
        return css`
          font-size: 16px;
          line-height: 16px;
          font-weight: bold;
          color: ${props => props.color || '#6a6b6b'};
        `
      case 'h4':
        return css`
          font-size: 12px;
          line-height: 12px;
          font-weight: normal;
          color: ${props => props.color || '#a7a8a9'};
        `
      default:
        return css`
          width:19px;
          font-size: 32px;
          line-height: 32px;
          font-weight: bold;
          color: ${props => props.color || '#037aff'};
        `
    }
  }}
`

export default TitleStyled
