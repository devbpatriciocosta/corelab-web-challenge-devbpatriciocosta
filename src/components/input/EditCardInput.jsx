import { useController } from 'react-hook-form'

import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 4px 10px;
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
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.error};
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório',
  'string.max': 'Preencha o campo com YYYY',
  'string.min': 'Preencha o campo com YYYY'
}

// eslint-disable-next-line react/display-name
const Input = ({ name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  return (
    <InputContainer>
      <StyledInput {...props} error={error} value={value} onChange={onChange} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
}

export default Input
