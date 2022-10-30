import styled from 'styled-components'

const StyledSavingButton = styled.button`
  border: 0;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 100px;
  color: rgba(2, 2, 2, 0.7);
  background-color: ${(props) => props.theme.buttonColor};
  transition: 0.4s;
  ${(props) => !props.disabled && 'cursor: pointer;'}
  :hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
  :disabled {
    background-color: grey;
  }
`

const SavingButton = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledSavingButton disabled={disabled || loading} {...props}>
      {loading && (
        <>
          <p>{children}</p>
        </>
      )}
      {!loading && children}
    </StyledSavingButton>
  )
}

export default SavingButton
