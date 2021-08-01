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
        <Grid container style={{ marginTop: "1rem" }}>
          <Grid item sm={3}>
            <Card style={{ height: "100%", padding: "0.75rem" }}>
              {rooms && rooms.length === 0 ? (
                <div className="alert alert-danger mt-5 w-100">
                  <b>No Rooms.</b>
                </div>
              ) : (
                rooms &&
                rooms.map((room) => <RoomItem key={room._id} room={room} />)
              )}
            </Card>
          </Grid>
          {/* <Grid item sm={3}>
            <Card style={{ padding: "1rem" }}>
              <Image
                src="https://a0.muscache.com/im/pictures/2121b1e3-1d2b-4824-9268-eba1e593bc28.jpg?im_w=720"
                width={250}
                height={150}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <a href="">Picturesque 2-Story Farmhouse w/Private Hot Tub</a>
                </h5>

                <div className="ratings mt-auto mb-3">
                  <p className="card-text">
                    <b>$12</b> / night
                  </p>

                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="no_of_reviews">(5 Reviews)</span>
                </div>

                <Button className="btn btn-block view-btn">
                  <a href="#">View Details</a>
                </Button>
              </div>
            </Card>
          </Grid> */}
          {/* <Grid item sm={3}>
            <Card style={{ padding: "1rem" }}>
              <Image
                src="https://a0.muscache.com/im/pictures/4599de32-549f-4125-8c93-ef99ce5b4cb0.jpg?im_w=720"
                width={250}
                height={150}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <a href="">Downtown Portsmouth Private Getaway! Hot Tub</a>
                </h5>

                <div className="ratings mt-auto mb-3">
                  <p className="card-text">
                    <b>$12</b> / night
                  </p>

                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="no_of_reviews">(5 Reviews)</span>
                </div>

                <Button className="btn btn-block view-btn">
                  <a href="#">View Details</a>
                </Button>
              </div>
            </Card>
          </Grid> */}
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
