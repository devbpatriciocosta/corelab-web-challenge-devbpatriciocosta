import { useState } from 'react'
import { useRouter } from 'next/router'

import useSWR from 'swr'
import axios from 'axios'

import styled from 'styled-components'
import Card from '../src/components/cards/Card'
import Body from '../src/components/layout/body/Body'
import SearchInput from '../src/components/search/SearchInput'
import ButtonAdding from '../src/components/button/ButtonAdding'
import Container from '../src/components/layout/container/Container'

const SecondaryContainer = styled.div`
  width: auto;
  display: flex;
  margin-bottom: 2vh;
  flex-direction: column;
  box-sizing: border-box;
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

const MyFavorites = styled.div`
  margin-top: 30px;
`

const StyledTitleFavorites = styled.div`
  font-size: 18px;
`

const MyAnnounces = styled.div`
  margin-top: 30px;
`

const StyledTitleAnnounces = styled.div`
  font-size: 18px;
`

const AnnouncesPostContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-column-gap: 45px;
  grid-row-gap: 43px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 857px) {
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 689px) {
    grid-row-gap: 10px;
    grid-column-gap: 5px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 630px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

const fetcher = (url) => axios.get(url).then((res) => res.data)

function HomePage() {
  const [vehicle, setVehicle] = useState('')
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/filtercar`, fetcher)

  const router = useRouter()
  const handleClick = () => {
    router.push('/addingcar')
  }

  const search = (data) => {
    return data?.filter(
      (post) =>
        post.carModel?.toLowerCase().includes(vehicle) ||
        post.carModel?.toUpperCase().includes(vehicle) ||
        post.carBrand?.toLowerCase().includes(vehicle) ||
        post.carBrand?.toUpperCase().includes(vehicle) ||
        post.carColor?.toLowerCase().includes(vehicle) ||
        post.carColor?.toUpperCase().includes(vehicle) ||
        post.carYear?.toLowerCase().includes(vehicle) ||
        post.carYear?.toUpperCase().includes(vehicle) ||
        post.carPlate?.toLowerCase().includes(vehicle) ||
        post.carPlate?.toLowerCase().includes(vehicle) ||
        post.carPrice?.toLowerCase().includes(vehicle) ||
        post.carDescription?.toLowerCase().includes(vehicle)
    )
  }

  return (
    <>
      <Body>
        <Container>
          <SearchInput
            type="test"
            name="search"
            placeholder="Buscar"
            onChange={(event) => setVehicle(event.target.value.toUpperCase())}
          />
          <ButtonAdding type="submit" onClick={handleClick}>
            ADICIONAR
          </ButtonAdding>
          <SecondaryContainer>
            <MyFavorites>
              <StyledTitleFavorites>Favoritos</StyledTitleFavorites>
            </MyFavorites>
            <AnnouncesPostContainer>
              {search(data)
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
            <MyAnnounces>
              <StyledTitleAnnounces>Meus anúncios</StyledTitleAnnounces>
            </MyAnnounces>
            <AnnouncesPostContainer>
              {search(data)
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
          </SecondaryContainer>
        </Container>
      </Body>
    </>
  )
}

export default HomePage
