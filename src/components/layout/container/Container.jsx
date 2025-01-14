import styled from 'styled-components'

const StyledMainContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 896px;
  min-height: 120vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Container = ({ children }) => <StyledMainContainer>{children}</StyledMainContainer>

export default Container
