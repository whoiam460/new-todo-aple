import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
width:100%;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  position: absolute;
  padding-left: 8px;
  padding-top: 6px;
`

const InputStyled = styled.input`
  ${props => {
    switch (props.type) {
      case 'search':
        return css`
          width: 100%;
          background-color: #dadbdc;
          border-radius: 8px;
          border: 3px solid transparent;
          padding: 8px;
          padding-left: 30px;

          &:focus-visible {
            outline: none;
          }
          &:focus {
            border: 3px solid #77a0e2;
          }
        `
      case 'transparent':
        return css`
          width: 100%;
          border: none;
          outline: none;
        `
      default:
        return css`
          width: 75%;
          box-sizing: border-box;
          border-radius: 4px;
          border-color: transparent;
          &:focus {
            outline: none;
            border-style: solid;
            border-color: #1d63e9;
            border-radius: 4px;
          }
          &:focus-visible {
            outline: none;
          }
        `
    }
  }}
`

export { InputStyled, IconWrapper, InputWrapper }
