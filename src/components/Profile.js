import React from 'react'

function Profile({data}) {
  return (
    <div>
        <div className='container'>
            <img className='pfp' src={data.imgSrc} alt='profile pic'/>
            <h3>{data.fullName}</h3>
            <h4>{data.profession}</h4>
            <p>{data.bio}</p>
        </div>
    </div>
  )
}

export default Profile