import { Button } from '@mui/material'
import React from 'react'
import { BalanceHeader, BalanceDiv } from './styles'

const Balance = () => {
  return (
    <BalanceHeader>
      <BalanceDiv>
      <p>your balance</p>
        $1234.56
      </BalanceDiv>
        <Button variant='filled' sx={{height: '100%', backgroundColor: 'white', color: 'grey', fontSize: '30px', borderRadius: '10px' }}>+</Button>
    </BalanceHeader>
  )
}

export default Balance