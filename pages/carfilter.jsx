import { useState } from 'react'
import { useRouter } from 'next/router'

import useSWR from 'swr'
import axios from 'axios'

import { BsBackspace } from 'react-icons/bs'

import styled from 'styled-components'
import Card from '../src/components/cards/Card'
import Body from '../src/components/layout/body/Body'
import FilterInput from '../src/components/input/filterInput'
import Container from '../src/components/layout/container/Container'

const FormContainer = styled.div`
  position: relative;
  padding: 100px;
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

const PriceForm = styled.div`
  gap: 20px;
  display: flex;
`

const TitlesContainer = styled.div`
  margin: 30px 0;
`

const StyledTitleFavorites = styled.div`
  font-size: 18px;
`

const StyledTitleAnnounces = styled.div`
  font-size: 18px;
`

const AnnouncesPostContainer = styled.div`
  display: grid;
  grid-row-gap: 43px;
  margin-bottom: 50px;
  grid-column-gap: 45px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 857px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
  @media (max-width: 689px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 5px;
  }
  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function CarFilter() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/filtercar`, fetcher)
  const [vehicle, setVehicle] = useState('')

  const router = useRouter()

  const filtering = (data) => {
    return data?.filter(
      (post) =>
        post.carModel?.toLowerCase().includes(vehicle) ||
        post.carBrand?.toLowerCase().includes(vehicle) ||
        post.carColor?.toLowerCase().includes(vehicle) ||
        post.carYear?.toLowerCase().includes(vehicle) ||
        post.carPrice?.toLowerCase().includes(vehicle)
    )
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
            <FilterInput
              label="Nome ou marca"
              placeholder="Digite o nome ou marca"
              onChange={(event) => setVehicle(event.target.value)}
            />
            <FilterInput
              label="Cor"
              name="search"
              placeholder="Cor"
              onChange={(event) => setVehicle(event.target.value)}
            />
            <FilterInput
              label="Ano"
              name="search"
              placeholder="Ano"
              onChange={(event) => setVehicle(event.target.value)}
            />
            <PriceForm>
              <FilterInput
                label="Preço mínimo"
                name="search"
                placeholder="Min."
                onChange={(event) => setVehicle(event.target.value)}
              />
              <FilterInput
                label="Preço máximo"
                name="search"
                placeholder="Máx."
                onChange={(event) => setVehicle(event.target.value)}
              />
            </PriceForm>
          </FormContainer>
          <TitlesContainer>
            <StyledTitleFavorites>Favoritos</StyledTitleFavorites>
          </TitlesContainer>
          <AnnouncesPostContainer>
            {filtering(data)
              ?.filter((p) => p.isLiked)
              .map((post) => (
                <Card
                  key={post._id}
                  name={post.carModel}
                  price={post.carPrice}
                  description={post.carDescription}
                  year={post.carYear}
                  brand={post.carBrand}
                  plate={post.carPlate}
                  id={post._id}
                  vehicleColor={post.carColor.toLowerCase()}
                  isLiked={post.isLiked}
                />
              ))}
          </AnnouncesPostContainer>
          <TitlesContainer>
            <StyledTitleAnnounces>Meus anúncios</StyledTitleAnnounces>
          </TitlesContainer>
          <AnnouncesPostContainer>
            {filtering(data)
              ?.filter((p) => !p.isLiked)
              .map((post) => (
                <Card
                  key={post._id}
                  name={post.carModel}
                  price={post.carPrice}
                  description={post.carDescription}
                  year={post.carYear}
                  brand={post.carBrand}
                  plate={post.carPlate}
                  id={post._id}
                  vehicleColor={post.carColor.toLowerCase()}
                  isLiked={post.isLiked}
                />
              ))}
          </AnnouncesPostContainer>
        </Container>
      </Body>
    </>
  )
}
