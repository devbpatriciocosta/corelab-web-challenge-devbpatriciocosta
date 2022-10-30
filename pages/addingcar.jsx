import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { joiResolver } from '@hookform/resolvers/joi'

import axios from 'axios'

import { newCarSchema } from '../modules/vehicles/vehicles.schema'

import { BsBackspace } from 'react-icons/bs'

import styled from 'styled-components'
import Input from '../src/components/input/Input'
import Body from '../src/components/layout/body/Body'
import SavingButton from '../src/components/button/SavingButton'
import Container from '../src/components/layout/container/Container'

const FormContainer = styled.div`
  padding: 150px;
  position: relative;
  margin-bottom: 10vh;
  background-color: ${(props) => props.theme.secondBackgroundColor};
  @media (max-width: 810px) {
    padding: 100px;
  }
  @media (max-width: 590px) {
    padding: 80px;
    padding-bottom: 100px;
  }
`

const StyledBackPage = styled.button`
  border: none;
  cursor: pointer;
  font-size: 44px;
  margin: 50px 750px 0px 0px;
  background-color: ${(props) => props.theme.background};
  @media (max-width: 810px) {
    margin: 50px 650px 0px 0px;
  }
  @media (max-width: 715px) {
    margin: 100px 350px 0px 0px;
  }
  @media (max-width: 405px) {
    margin: 100px 250px 0px 0px;
  }
`

const SavingButtonContainer = styled.div`
  right: 50px;
  bottom: 40px;
  position: absolute;
`

const Form = styled.form`
  gap: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 442px) {
    width: 250px;
  }
`

export default function AddingCar() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(newCarSchema),
    mode: 'all'
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/addnewcar`,
        data
      )
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  const handleClick = () => {
    router.push('/')
  }

  return (
    <>
      <Body>
        <Container>
          <StyledBackPage onClick={handleClick}>
            <BsBackspace />
          </StyledBackPage>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input
                label="Nome"
                placeholder="Dê um nome para o carro"
                name="carModel"
                control={control}
              />
              <Input
                label="Marca"
                placeholder="Digite a marca do carro"
                name="carBrand"
                control={control}
              />
              <Input
                label="Cor"
                placeholder="Digite a cor do carro"
                name="carColor"
                control={control}
              />
              <Input
                label="Descrição"
                placeholder="Novo ou usado (tempo de uso)"
                name="carDescription"
                control={control}
              />
              <Input label="Ano" placeholder="YYYY" name="carYear" control={control} />
              <Input label="Placa" placeholder="ABC1234" name="carPlate" control={control} />
              <Input
                label="Preço"
                placeholder="Digite o preço do carro"
                name="carPrice"
                control={control}
              />
              <SavingButtonContainer>
                <SavingButton type="submit" disabled={Object.keys(errors).length > 0 || !isValid}>
                  SALVAR
                </SavingButton>
              </SavingButtonContainer>
            </Form>
          </FormContainer>
        </Container>
      </Body>
    </>
  )
}
