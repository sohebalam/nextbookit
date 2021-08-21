import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Head from "next/head"
import Layout from "../components/layout/Layout"
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 540,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  mt: {
    marginTop: 10,
  },
})
const Custom404Page = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Page not found | 404</title>
      </Head>
      <Box className={classes.root}>
        <h1 id="title_404">404!</h1>
        <Typography className={classes.mt}>This page does not exist</Typography>
        <Typography className={classes.mt}>
          <a href="/">Return to Home Page</a>
        </Typography>
      </Box>
    </>
  )
}

export default Custom404Page
