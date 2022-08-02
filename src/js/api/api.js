import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://62e3cb4fb54fc209b890fd38.mockapi.io/pizzas',

    }
)

const userApi = {
    sortByPrice(parameterSort,page = 1) {
        return instance.get(`?page=${page}&limit=6&sortBy=price&order=${parameterSort})`)
    },
    sortByRating(page = 1) {
        return instance.get(`?page=${page}&limit=6&sortBy=rating&order=desc`)
    },
    sortByAlphabet(page = 1) {
        return instance.get(`?page=${page}&limit=6&sortBy=title`)
    },
    getCountPage() {
        return instance.get(``)
    },
}

export default userApi;