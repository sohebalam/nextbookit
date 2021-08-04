import { Button, Grid, Card } from "@material-ui/core"
import { Container } from "@material-ui/core"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import RoomItem from "../components/room/RoomItem"
import Pagination from "react-js-pagination"
import { clearErrors, getRooms } from "../redux/actions/roomActions"
import { useRouter } from "next/router"
import { wrapper } from "../redux/store"
import { useEffect } from "react"
import { toast } from "react-toastify"
import Link from "next/link"

const Home = () => {
  const allRooms = useSelector((state) => state.allRooms)
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } = allRooms

  const router = useRouter()
  let { location, page = 1 } = router.query
  page = Number(page)

  const dispatch = useDispatch()

  useEffect(() => {
    toast.error(error)
    dispatch(clearErrors())
  }, [])

  const handlePagination = (pageNumber) => {
    if (location) {
      let url = window.location.search

      url.includes("&page")
        ? (url = url.replace(/(page=)[^\&]+/, "$1" + pageNumber))
        : (url = url.concat(`&page=${pageNumber}`))

      router.push(url)
    } else {
      router.push(`/?page=${pageNumber}`)
      // window.location.href = `/?page=${pageNumber}`
    }
  }

  let count = roomsCount
  if (location) {
    count = filteredRoomsCount
  }

  return (
    <div>
      <Container>
        <h2 className="mb-3 ml-2 stays-heading">
          {location ? `Rooms in ${location}` : "All Rooms"}
        </h2>

        <Link href="/search">
          <a className="ml-2 back-to-search">
            {" "}
            <i className="fa fa-arrow-left"></i>Back to Search
          </a>
        </Link>
        <Grid
          container
          style={{ marginTop: "1rem" }}
          alignItems="flex-end"
          direction="row"
        >
          {rooms && rooms.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms &&
            rooms.map((room) => (
              <Grid item sm={3} key={room._id}>
                <Card style={{ height: "100%", padding: "0.75rem" }}>
                  <RoomItem key={room._id} room={room} />
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
      {resPerPage < count && (
        <div id="menu" className="center">
          <ul>
            <li>
              <Pagination
                activePage={page}
                itemsCountPerPage={resPerPage}
                totalItemsCount={roomsCount}
                onChange={handlePagination}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(
          req,
          query.page,
          query.location,
          query.guests,

          query?.category
        )
      )
    }
)

export default Home
