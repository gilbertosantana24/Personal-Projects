import React, { useState } from 'react'

function MoodToggler() {

const [isHappy, setIsHappy] = useState(true);
const toggleHappy = () => setIsHappy(!isHappy);

  return (
    <div>
        <h3 onClick={toggleHappy}> {isHappy ? ":)" : ":("} </h3>
    </div>
  )
}

export default MoodToggler