import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'

const HomePage = () => {
  const [searchState, setSearchState] = useState('')

  const handleChange = (value: string) => {
    setSearchState(value)
  }

  return (
    <>
      <div>
        <Header searchState={searchState} onChange={handleChange} />
        <Main searchState={searchState} />
      </div>
    </>
  )
}

export default HomePage
