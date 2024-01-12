import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOutThunk } from "reduxConfig/auth/operations";


const ModalLogout = ({ closeModal }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logOutThunk());
    };


    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      };
    
      useEffect(() => {
        const handleEscape = e => {
          if (e.key === 'Escape') {
            closeModal();
          }
        };
    
        document.addEventListener('keydown', handleEscape);
        return () => {
          document.removeEventListener('keydown', handleEscape);
        };
      }, [closeModal]);
    
  return (
    <div onClick={onBackdropClick}>
        {/* <svg>
            <use/>
        </svg> */}
        <h3>Money Guard</h3>
        <p>Are you sure you want to log out?</p>
        <button onClick={handleLogout}>logout</button>
      <button
        onClick={() => {
          closeModal(false);
        }}
      >
        cancel
      </button>
    </div>
  )
}

export default ModalLogout

