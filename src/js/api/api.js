import axios from "axios";

const instance = axios.create({
  baseURL: "https://62e3cb4fb54fc209b890fd38.mockapi.io/pizzas",
});

const userApi = {
  sortByPrice({ currentPage, filterCategory }) {
    debugger;
    return instance.get(
      `?page=${currentPage}&limit=6&sortBy=price&order=asc&types[]=${filterCategory}`
    );
  },
  sortByRating({ currentPage, filterCategory }) {
    return instance.get(
      `?page=${currentPage}&limit=6&sortBy=rating&order=desc&types[]=${filterCategory}`
    );
  },
  sortByAlphabet({ currentPage, filterCategory }) {
    return instance.get(
      `?page=${currentPage}&limit=6&sortBy=title&types[]=${filterCategory}`
    );
  },
  getCountPage({ sortBy, filterCategory }) {
    return instance.get(`?sortBy=${sortBy}&types[]=${filterCategory}`);
  },
};

export default userApi;
