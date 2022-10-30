import styled from 'styled-components'

import { useRouter } from 'next/router'

import { SlMagnifier } from 'react-icons/sl'
import { BsFilterSquare } from 'react-icons/bs'

const IconImageContainer = styled.div`
  padding: 132px 0 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 740px;
  height: 60px;
  left: 228px;
  top: 132px;
  background-color: ${(props) => props.theme.secondary};
  padding: 10px 50px;
  padding-left: 80px;
  border-radius: 100px;
  border: none;
  font-size: 30px;
  color: #000000;
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

const StyledIconPosition = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  font-size: 30px;
`

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.background};
  cursor: pointer;
  border: none;
  font-size: 44px;
  display: flex;
  margin-left: 10px;
`

const SearchInput = ({ ...props }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/carfilter')
  }

  return (
    <>
      <IconImageContainer>
        <ContainerInput>
          <StyledInput type="text" placeholder="Buscar" {...props}></StyledInput>
          <StyledIconPosition>
            <SlMagnifier />
          </StyledIconPosition>
        </ContainerInput>
        <StyledButton onClick={handleClick}>
          <BsFilterSquare />
        </StyledButton>
      </IconImageContainer>
    </>
  )
}

export default SearchInput
