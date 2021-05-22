import Axios from 'axios'

export const fetchData = () => {
    return Axios.get('https://intense-tor-76305.herokuapp.com/merchants')
    .then(response => response)
    .catch((error) => error.response)
}