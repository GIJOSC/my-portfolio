import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/gesiel-neves/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/GIJOSC' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://gesiel-dsvendas.netlify.app/' target="_blank" rel="noreferrer"><SiNetlify/></a>
    </div>
  )
}

export default HeaderSocials