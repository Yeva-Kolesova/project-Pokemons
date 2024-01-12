import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "reduxConfig/auth/operations";


const ModalLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logOutThunk())
    .then(() => {
        navigate('/')
    })
    .catch(error)
  }


  return (
    <div>
        {/* <svg>
            <use/>
        </svg> */}
        <h3>Money Guard</h3>
        <p>Are you sure you want to log out?</p>
        <button onClick={logOut}>logout</button>
        <button>cancel</button>
    </div>
  )
}

export default ModalLogout

