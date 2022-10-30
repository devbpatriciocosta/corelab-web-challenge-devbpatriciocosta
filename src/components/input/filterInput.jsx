import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  margin: 20px 0;
  padding: 15px 20px;
  border-radius: 100px;
  box-sizing: border-box;
  border: 1px solid rgba(239, 239, 239, 0.6);
  background-color: ${(props) => props.theme.background};
  ${(props) => props.error && `border: 1px solid ${props.theme.error};`}
  &:focus {
    outline: none;
  }
  @media (max-width: 850px) {
    width: auto;
  }
  @media (max-width: 630px) {
    width: 400px;
  }
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`

const ContainerInput = styled.div`
  position: relative;
`

const StyledLabel = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
`

const FilterInput = ({ label, ...props }) => {
  return (
    <>
      <ContainerInput>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type="text" placeholder="Buscar" {...props}></StyledInput>
      </ContainerInput>
    </>
  )
}

export default FilterInput
