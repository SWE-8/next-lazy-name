import { connect } from 'mongoose';

export const connectDB = async() => {
  try{
    await connect(process.env.DATABASE)
    console.log('connect Database success!')
  }catch(err){
    console.log(err)
    process.exit(1)
  }
}