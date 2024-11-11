import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-HookContainer mx-auto ${className}`}>{children}</div>
  )
}

export default Container
