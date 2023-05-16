import Link from 'next/link'
import React from 'react'
import { GitHub, Instagram, LinkedIn } from '../Social/svg'

type Props = {}

const Social = (props: Props) => {
  return (
    <div><ul className="flex  gap-5 items-center justify-center pt-7 lg:hidden">
    <li >
      <Link href={'https://github.com/julietamag'} target="blank">
      <GitHub />
      </Link>
    </li>
    <li>
      <Link href={'https://www.linkedin.com/in/julieta-magnago/'} target="blank" >
      <LinkedIn />
      </Link>
    </li>
    <li>
      <Link href={'https://www.instagram.com/julimag__/'} target="blank">
      <Instagram />
      </Link>
    </li>
   
  </ul></div>
  )
}

export default Social