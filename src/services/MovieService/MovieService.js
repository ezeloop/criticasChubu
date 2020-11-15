import axios from 'axios'
import Review from '../../models/Review'

const API_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URL_VERSION}`

const API_KEY = '8503eca65d9a6972f23f7a8109aa89c8'

class movieService {
    fetchReviews(movieTitle) {
        const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${movieTitle}`

        return axios.get(url).then(
            (response) => {
                return response.data.results.map((review) => Review.fromJson(review))
            }
        )
    }
}