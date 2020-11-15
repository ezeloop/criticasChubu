import axios from 'axios'
import Review from '../../models/Review'

class ApiRestCritica {
    static traerCriticas() {
        const url = `http://localhost:8001/criticas/`
       

        return axios.get(url).then(response => {
              return response.data.map((review) => Review.fromJson(review))
           
            
        })
    }
    static postearCritica() {
        const url = `http://localhost:8001/criticas/`

        return axios.post(url).then(response => {

            
            console.log(response.data[0])

             
         })
    }
}

export default ApiRestCritica