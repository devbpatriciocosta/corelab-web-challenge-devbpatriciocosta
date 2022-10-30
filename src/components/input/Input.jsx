import { useController } from 'react-hook-form'

import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 100px;
  box-sizing: border-box;
  border: 1px solid rgba(239, 239, 239, 0.6);
  background-color: ${(props) => props.theme.background};
  ${(props) => props.error && `border: 1px solid ${props.theme.error};`}
  &:focus {
    outline: none;
  }
`

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 12px;
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório',
  'string.max': 'Preencha o campo com YYYY',
  'string.min': 'Preencha o campo com YYYY'
}

// eslint-disable-next-line react/display-name
const Input = ({ label, name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...props} error={error} value={value} onChange={onChange} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
}

export default Input
