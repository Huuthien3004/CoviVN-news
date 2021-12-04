import News from '../models/news.model.js'
import { data } from '../constants/categories.js'

const migrationsNews = async () => {
  try {
    await News.insertMany(data)
  } catch (err) {
    console.error(err.stack)
  }
}

export default migrationsNews