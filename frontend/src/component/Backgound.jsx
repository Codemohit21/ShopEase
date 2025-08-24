import React from 'react'
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"
import back5 from "../assets/back5.jpg"
import back6 from "../assets/back6.jpg"
import back7 from "../assets/back7.jpg"

function Background({ heroCount }) {
  const backgrounds = [back2, back1, back3, back4, back5, back6, back7]

 
  const bg = backgrounds[heroCount] || backgrounds[0]

  return (
    <img
      src={bg}
      alt="Background"
      className="w-full h-full float-left overflow-auto object-cover"
    />
  )
}

export default Background
