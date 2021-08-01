import { Button, Grid, Card } from "@material-ui/core"
import { Container } from "@material-ui/core"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import RoomItem from "../components/layout/RoomItem"

import { getRooms } from "../redux/actions/roomActions"

import { wrapper } from "../redux/store"

const Home = () => {
  const allRooms = useSelector((state) => state.allRooms)
  const { loading, error, rooms } = allRooms

  // const router = useRouter()

  const dispatch = useDispatch()

  // console.log(rooms)

  return (
    <div>
      <Container>
        <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

        <a href="#" className="ml-2 back-to-search">
          {" "}
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
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

          {/* {rooms && rooms.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
          {}  rooms && rooms.map((room) =>(
              <Grid item sm={3}>
                <Card style={{ height: "100%", padding: "0.75rem" }}>
                  <RoomItem key={room._id} room={room} />
                </Card>
              </Grid>
          )} */}
        </Grid>
      </Container>
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
