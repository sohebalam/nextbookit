import React, { useState } from "react"
import { useRouter } from "next/router"
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core"
import { InputLabel } from "@material-ui/core"
import { wrapper } from "../redux/store"
import { getRooms } from "../redux/actions/roomActions"

const Search = () => {
  const [location, setLocation] = useState("")
  const [guests, setGuests] = useState("")
  const [category, setCategory] = useState("")

  const router = useRouter()

  const submitHandler = (e) => {
    e.preventDefault()

    if (location.trim()) {
      router.push(
        `/?location=${location}&guests=${guests}&category=${category}`
      )
    } else {
      router.push("/")
    }
  }

  return (
    <Container>
      <Grid container>
        <Container component="main" maxWidth="xs">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2 className="mb-3">Search Rooms</h2>
                <FormGroup>
                  <FormLabel htmlFor="location_field">Location</FormLabel>
                  <TextField
                    type="text"
                    className="form-control"
                    id="location_field"
                    placeholder="new york"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <InputLabel htmlFor="guest_field">No. of Guests</InputLabel>
                  <Select
                    className="form-control"
                    id="guest_field"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <InputLabel htmlFor="room_type_field">Room Type</InputLabel>
                  <Select
                    className="form-control"
                    id="room_type_field"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {["King", "Single", "Twins"].map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" className="btn btn-block py-2" fullWidth>
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Grid>
    </Container>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      )
    }
)

export default Search
