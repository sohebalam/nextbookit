import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { getSession } from "next-auth/client"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

import {
  clearErrors,
  getAllUsers,
  userDelete,
} from "../../redux/actions/userActions"

import { MDBDataTable } from "mdbreact"
import { DELETE_USER_RESET } from "../../redux/constants/userTypes"
import { CircularProgress } from "@material-ui/core"

const AllUsers = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const allUsers = useSelector((state) => state.allUsers)
  const { loading, error, users } = allUsers

  //   const deleteUser = useSelector((state) => state.deleteUser)
  //   const { error: deleteError, isDeleted } = deleteUser

  useEffect(() => {
    dispatch(getAllUsers())
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    // if (deleteError) {
    //   toast.error(deleteError)
    //   dispatch(clearErrors())
    // }
    // if (isDeleted) {
    //   router.push("/admin/users/users")
    //   dispatch({ type: DELETE_USER_RESET })
    // }
  }, [dispatch, error])

  const setUsers = () => {
    const data = {
      columns: [
        {
          label: "User ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    }
    users &&
      users.forEach((user) => {
        // console.log(user)
        data.rows.push({
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          actions: (
            <>
              <Link href={`/admin/users/${user._id}`}>
                <a className="btn btn-primary">
                  <i className="fa fa-pencil"></i>
                </a>
              </Link>
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteUserHandler(user._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </>
          ),
        })
      })
    return data
  }

  const deleteUserHandler = (id) => {
    dispatch(userDelete(id))
  }

  return (
    <div className="container container-fluid">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <h1 className="my-5">{`${users && users.length} Users`}</h1>
          <MDBDataTable data={setUsers()} className="px-3" bordered striped />
        </>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default AllUsers
