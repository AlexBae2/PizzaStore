import axios from "axios";

const instance = axios.create({
  baseURL: "https://62e3cb4fb54fc209b890fd38.mockapi.io/pizzas",
});

const userApi = {
  sortByPrice({ currentPage, filterCategory }) {
    return instance.get(``, {
      params: {
        page: currentPage,
        "types[]": filterCategory,
        limit: 6,
        sortBy: "price",
      },
    });
  },
  sortByRating({ currentPage, filterCategory }) {
    return instance.get(``, {
      params: {
        page: currentPage,
        "types[]": filterCategory,
        limit: 6,
        sortBy: "rating",
        order: "desc",
      },
    });
  },
  sortByAlphabet({ currentPage, filterCategory }) {
    return instance.get(``, {
      params: {
        page: currentPage,
        "types[]": filterCategory,
        limit: 6,
        sortBy: "title",
      },
    });
  },
  getCountPage({ sortBy, filterCategory }) {
    return instance.get(``, {
      params: {
        sortBy,
        "types[]": filterCategory,
      },
    });
  },
};

export default userApi;
