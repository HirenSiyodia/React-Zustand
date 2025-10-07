import React from 'react'
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
      <ClipLoader
        color={"orange"}
        loading={true}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loader