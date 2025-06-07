import { SignedOut } from '@clerk/nextjs'
import React from 'react'

const logout = () => {
  return (
    <div>
        <SignedOut/>
    </div>
  )
}

export default logout