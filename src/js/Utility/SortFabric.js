import userApi from "../api/api";
import { setPizzas, setTotalPizzasCount } from "../redux/contentReducer";

class SortFabric {
  static createSort({ type, currentPage, filterCategory, dispatch }) {
    switch (type) {
      case "popularity":
        return new Rating(currentPage, filterCategory, dispatch);
      case "alphabet":
        return new Alphabet(currentPage, filterCategory, dispatch);
      case "price":
        return new Price(currentPage, filterCategory, dispatch);
    }
  }
}

class Rating {
  constructor(currentPage, filterCategory, dispatch) {
    userApi
      .getCountPage({ sortBy: "rating", filterCategory })
      .then((response) => {
        let totalPizzasCount = response.data.length;
        dispatch(setTotalPizzasCount({ totalPizzasCount }));
      });

    userApi.sortByRating({ currentPage, filterCategory }).then((response) => {
      const pizzas = response.data;
      dispatch(setPizzas({ pizzas }));
    });
  }
}

class Alphabet {
  constructor(currentPage, filterCategory, dispatch) {
    userApi
      .getCountPage({ sortBy: "title", filterCategory })
      .then((response) => {
        let totalPizzasCount = response.data.length;
        dispatch(setTotalPizzasCount({ totalPizzasCount }));
      });

    userApi.sortByAlphabet({ currentPage, filterCategory }).then((response) => {
      const pizzas = response.data;
      dispatch(setPizzas({ pizzas }));
    });
  }
}

class Price {
  constructor(currentPage, filterCategory, dispatch) {
    userApi
      .getCountPage({ sortBy: "price", filterCategory })
      .then((response) => {
        let totalPizzasCount = response.data.length;
        dispatch(setTotalPizzasCount({ totalPizzasCount }));
      });

    userApi.sortByPrice({ currentPage, filterCategory }).then((response) => {
      const pizzas = response.data;
      dispatch(setPizzas({ pizzas }));
    });
  }
}

export default SortFabric;
