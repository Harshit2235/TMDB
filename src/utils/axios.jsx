import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
   headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M3MWY1Y2FiNmIxZjE3NThkMmVlYTU1NmY5ZTFlYyIsIm5iZiI6MTc2NjYwNzk2NS45MTEsInN1YiI6IjY5NGM0YzVkODc0MTFmOTYyNzdhYjJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10MQSbg2_IrWGoWRi1HskfzYexcc-iHnYhJ2UgPrfno'
  }
});


export default instance;
