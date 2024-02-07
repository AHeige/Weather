import React, { SetStateAction, useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide, { SlideProps } from '@mui/material/Slide'

interface Props {
  open: boolean
  setError: React.Dispatch<SetStateAction<boolean>>
  info: string
}

const SnackBar: React.FC<Props> = ({ open, setError, info }) => {
  const TransitionDown = (props: any) => {
    return <Slide {...props} direction='left' />
  }

  setTimeout(() => {
    setError(false)
  }, 5000)

  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} TransitionComponent={TransitionDown}>
      <Alert severity='error' sx={{ width: '100%' }}>
        {info}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
