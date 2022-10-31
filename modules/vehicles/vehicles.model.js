import mongoose from 'mongoose'

const NewCarSchema = new mongoose.Schema({
  carModel: { type: String, required: true, uppercase: true, maxlength: 12 },
  carBrand: { type: String, required: true, maxlength: 16 },
  carColor: { type: String, required: true, maxlength: 16 },
  carDescription: { type: String, required: true, maxlength: 50 },
  carYear: { type: String, required: true, maxlength: 4, minlength: 4 },
  carPlate: { type: String, required: true, maxlength: 10 },
  carPrice: { type: String, required: true, maxlength: 16 },
  isLiked: { type: Boolean }
})

export default mongoose.models.NewCar || mongoose.model('NewCar', NewCarSchema)
