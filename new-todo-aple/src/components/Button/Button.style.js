import styled, { css } from 'styled-components'

const TextWrapper = styled.div`
  margin-left: 5px;
`

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0px;
  border-radius: ${props =>
    props.shape === 'circle' ? '50%' : '6px'}; // --border-radius-default

  &:hover {
    background-color: ${props => (props.isHover === 'true' ? '#ebebeb' : null)};
  }
  &:active {
    background: ${props => (props.isActive === 'true' ? '#ccc' : null)};
  }

  ${props => {
    switch (props.variant) {
      case 'sm':
        return css`
          font-size: 24px;
          color: ${props => props.color || '#0684ff'};
          font-weight: bold;
        `
      case 'md':
        return css`
          font-size: 22px;
          color: ${props => props.color || '#585958'};
        `
      default:
        return css`
          font-size: 16px;
          color: ${props => props.color || '#68696a'};
          font-weight: bold;
        `
    }
  }}
`

export { ButtonStyled, TextWrapper }
