import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

//Components
import CitySearch from '../components/CitySearch'
import WeatherCard from '../components/WeatherCard'
import Mountains from '../assets/mountains.svg'

//Material-UI
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import getImage from '../services/imageService'

//Services

const WeatherPage = () => {
  const [cityImage, setCityImage] = useState<string | (string | null)[] | null>(Mountains)

  const { search } = useLocation()
  const { citySearched } = queryString.parse(search)

  const [appBarHeight, setAppBarHeight] = useState<number>()
  const [city, setCity] = useState<string | (string | null)[] | null>(citySearched)

  const appBarRef: any = useRef()

  useEffect(() => {
    const appBarHeight = appBarRef.current.clientHeight

    setAppBarHeight(appBarHeight + 20)
  }, [appBarRef])

  useEffect(() => {
    if (city) {
      getImage(city).then((url) => {
        setCityImage(url)
      })
    }
  }, [city])

  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${cityImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <AppBar
        position='fixed'
        elevation={0}
        style={{
          color: '#000000',
          padding: '1em',
          justifyContent: 'center',
          opacity: '0.75',
        }}
        color='inherit'
        ref={appBarRef}
      >
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
          <Grid item xs={12} lg={1.8} style={{ maxWidth: '30em' }}>
            <CitySearch setCity={setCity} />
          </Grid>
        </Grid>
      </AppBar>

      <Grid
        container
        direction='row'
        justifyContent='center'
        //alignItems='center'
        style={{
          marginTop: appBarHeight,
          //backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*)`,
        }}
      >
        {city && <WeatherCard city={city} />}
      </Grid>
    </Grid>
  )
}

export default WeatherPage
