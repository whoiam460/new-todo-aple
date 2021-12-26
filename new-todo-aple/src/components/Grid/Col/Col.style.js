import styled from 'styled-components'

const ColStyled = styled.div`
  /* box-sizing: border-box; */
  position: relative;
  -ms-flex-positive: 1;
  padding: 0 16px;
  flex-basis: ${props => (props.size / 12) * 100}%;
  max-width: 100%;

    @media (min-width: 576px) {
    flex-basis: ${(props) => {
      return props.xs ? `${(props.xs / 12) * 100}%` : null
    }};
  }
  @media (min-width: 768px) {
    flex-basis: ${(props) => {
      return props.sm ? `${(props.sm / 12) * 100}%` : null
    }};
  }
  @media (min-width: 992px) {
    flex-basis: ${(props) => {
      return props.md ? `${(props.md / 12) * 100}%` : null
    }};
  }
  @media (min-width: 1200px) {
    flex-basis: ${(props) => {
      return props.lg ? `${(props.lg / 12) * 100}%` : null
    }};
  }
  @media (min-width: 1400px) {
    flex-basis: ${(props) => {
      return props.xl ? `${(props.xl / 12) * 100}%` : null
    }};
  }
  @media (max-width: 576px) {
    flex-basis: ${(props) => {
      return props.xxl ? `${(props.xxl / 12) * 100}%` : null
    }};
  }
 
`

export default ColStyled
