import styled from 'styled-components'

const StyledEditSavingButton = styled.button`
  border: 0;
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px;
  margin-left: 75px;
  padding: 5px 10px;
  border-radius: 100px;
  color: rgba(2, 2, 2, 0.7);
  background-color: ${(props) => props.theme.buttonColor};
  transition: 0.2s;
  :hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
  :disabled {
    background-color: grey;
  }
`

const EditSavingButton = ({ children, ...props }) => {
  return (
    <StyledEditSavingButton {...props}>
      <p>{children}</p>
    </StyledEditSavingButton>
  )
}

export default EditSavingButton
