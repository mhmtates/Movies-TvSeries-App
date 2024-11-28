import { Container, Flex, Heading, Skeleton, Grid, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";

const MoviesPage = () => {

  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setIsLoading(true);
    fetchMovies(activePage,sortBy)
      .then((response) => {
        console.log(response)
        setMovies(response?.results)
        setActivePage(response?.page)
        setTotalPages(response?.total_pages);
      }).catch((error) => {
        console.log(error, "error")
      }).finally(() => {
        setIsLoading(false)
      })
  }, [activePage,sortBy])

  return (

    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my="10">
        <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
          Filmler
        </Heading>
        <Select w={"130px"} onChange={(e) => {
          setActivePage(1);
          setSortBy(e.target.value);
        }}>
          <option value="popularity.desc">Popüler</option>
          <option value="vote_average.desc&vote_count.gte=1000">En Yüksek Oranlı</option>
        </Select>

      </Flex>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={"4"}
      >
        {movies && movies?.map((item, i) =>
          isLoading ? (
            <Skeleton height={300} key={i} />
          ) : (
            <Cards key={item?.id} item={item} type={'movie'} />
          )
        )}
      </Grid>
      <Pagination activePage={activePage} totalPages={totalPages} setActivePage={setActivePage} />
    </Container>
  )
}

export default MoviesPage;