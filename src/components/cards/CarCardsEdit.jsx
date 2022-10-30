import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import axios from 'axios'

import { editCarSchema } from '../../../modules/vehicles/vehicles.schema'

import EditCardInput from '../input/EditCardInput'
import EditSavingButton from '../button/EditSavingButton'

export default function CarCardsEdit({ name, price, description, year, vehicleColor, onSave, id }) {
  const {
    control,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { isValid }
  } = useForm({
    resolver: joiResolver(editCarSchema),
    mode: 'all'
  })

  const handleForm = async ({
    carModel,
    carBrand,
    carColor,
    carPlate,
    carPrice,
    carDescription,
    carYear
  }) => {
    try {
      const { status } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/addnewcar`,
        {
          _id: id,
          carModel,
          carBrand,
          carColor,
          carPlate,
          carPrice,
          carDescription,
          carYear
        }
      )
      if (status === 201) {
        onSave()
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <EditCardInput
        label="Nome"
        placeholder="Dê um nome para o carro"
        name="carModel"
        control={control}
        defaultValue={name}
      />
      <EditCardInput
        label="Cor"
        placeholder="Digite a cor do carro"
        name="carColor"
        control={control}
        defaultValue={vehicleColor}
      />
      <EditCardInput
        label="Descrição"
        placeholder="Novo ou usado (tempo de uso)"
        name="carDescription"
        control={control}
        defaultValue={description}
      />
      <EditCardInput
        label="Ano"
        placeholder="YYYY"
        name="carYear"
        control={control}
        defaultValue={year}
      />
      <EditCardInput
        label="Preço"
        placeholder="Digite o preço do carro"
        name="carPrice"
        control={control}
        defaultValue={price}
      />
      <EditSavingButton type="submit">SALVAR</EditSavingButton>
    </form>
  )
}
