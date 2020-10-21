import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'

function Home(props) {
  return (
    <>
      <h1>Hello</h1>
      <a href="/todo">a link to todopage</a>
      <hr />
      <Link to="/todo">Link component to todopage</Link>
    </>
  )
}

export default Home
