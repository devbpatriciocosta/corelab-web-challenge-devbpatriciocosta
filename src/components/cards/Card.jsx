import { useState } from 'react'
import { useSWRConfig } from 'swr'

import axios from 'axios'

import styled from 'styled-components'
import CarCardsEdit from './CarCardsEdit'

import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { MdOutlineDeleteSweep } from 'react-icons/md'

const CardContainer = styled.div`
  width: 250px;
  height: 230px;
  padding: 10px;
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  box-shadow: 10px 10px 10px 5px rgba(51, 51, 51, 0.8);
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

const StyledCarName = styled.p`
  display: flex;
  margin: 30px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
`

const StyledCarPrice = styled.p`
  display: flex;
  font-size: 14px;
  justify-content: center;
`

const StyledCarDescription = styled.p`
  display: flex;
  font-size: 14px;
  justify-content: center;
`

const StyledCarYear = styled.p`
  display: flex;
  font-size: 14px;
  justify-content: center;
`

const StyledCardIcons = styled.div`
  gap: 7px;
  border: none;
  display: flex;
  color: black;
  font-size: 24px;
  max-width: 100px;
  margin-left: 130px;
  cursor: pointer;
  justify-content: flex-end;
`

const transformColor = (color) => {
  const colors = {
    branca: '#ebebeb',
    branco: '#ebebeb',
    vermelho: '#CD5555',
    vermelha: '#CD5555',
    rosa: '#FF69B4',
    rose: '#FFC1C1',
    verde: '#2E8B57',
    prata: '#929292b9',
    azul: '#00008B',
    preto: 'rgb(0, 0, 0, 0.90)',
    preta: 'rgb(0, 0, 0, 0.8)',
    amarelo: '#EEEE00',
    dourado: '#FFEC8B',
    dourada: '#CD9B1D',
    laranja: '#FFA54F',
    Laranja: '#FF7F00',
    cinza: '#4F4F4F',
    marrom: '	#4d392f',
    roxo: '#A020F0',
    roxa: '#9932CC'
  }
  return colors[color] || 'rgb(175, 175,175,0.25)'
}

export default function Card({
  name,
  price,
  description,
  year,
  brand,
  plate,
  vehicleColor,
  id,
  isLiked
}) {
  const { mutate } = useSWRConfig()
  const [editCar, setEditCar] = useState(false)

  const handleEdit = async () => {
    setEditCar(!editCar)
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/filtercar`)
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/addnewcar`,
        {
          data: {
            id
          }
        }
      )
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/filtercar`)
    } catch (err) {
      console.error(err)
    }
  }

  const handleLike = async () => {
    try {
      const { status } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/addnewcar`,
        {
          _id: id,
          carName: name,
          carPrice: price,
          carDescription: description,
          carYear: year,
          carBrand: brand,
          carPlate: plate,
          carColor: vehicleColor,
          isLiked: !isLiked
        }
      )
      if (status === 201) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/filtercar`)
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
    <>
      <CardContainer color={transformColor(vehicleColor)}>
        <StyledCardIcons>
          <FaRegEdit onClick={handleEdit} />
          <MdOutlineDeleteSweep onClick={handleDelete} />
          <AiOutlineLike onClick={handleLike} />
        </StyledCardIcons>
        {!editCar && (
          <>
            <StyledCarName>{name}</StyledCarName>
            <StyledCarPrice>PREÇO: R${price}</StyledCarPrice>
            <StyledCarDescription>DESCRIÇÃO: {description}</StyledCarDescription>
            <StyledCarYear>ANO: {year}</StyledCarYear>
          </>
        )}
        {editCar && (
          <CarCardsEdit
            id={id}
            name={name}
            price={price}
            description={description}
            year={year}
            brand={brand}
            vehicleColor={vehicleColor}
            plate={plate}
            onSave={handleEdit}
          />
        )}
      </CardContainer>
    </>
  )
}
