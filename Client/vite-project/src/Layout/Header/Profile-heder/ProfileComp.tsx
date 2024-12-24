import React, { useContext } from 'react'
import { UserConntext } from '../../../Provider/UserProvider'
import Styles from './profileHeder.module.css'

const ProfileComp = () => {
    const userContext = useContext(UserConntext)
  return (
    <>
    <div className={Styles.div}>
          <img
          className={Styles.image}
           src="https://upload.wikimedia.org/wikipedia/he/f/fe/Generic_look_of_fantasy_films_1_-_made_with_DALL-E_3.png" alt=""
            />
            <span className={Styles.name}>welcame {userContext?.user?.username.toUpperCase()} !!!</span>
            </div>
    </>
  )
}

export default ProfileComp