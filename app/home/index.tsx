import { Button } from '@/components'
import { useUsers } from '@/hooks'
import React from 'react'

const HomePage = () => {

  const {data, isLoading} = useUsers();

  console.log("users:", data, isLoading);
  

  return (
    <div>
        <h1>Home Page</h1>
        <Button label="Hello" />
    </div>
  )
}

export default HomePage