import React from 'react'
import OptionComponent from './OptionComponent'
import { Divider, List } from '@mui/material'

const OptionListComponent = ({options, open}) => {

  return (
    <>
        <List>
            { 
                options.map(option => <OptionComponent key={option.label} option={option} open={open} /> ) 
            }
        </List>
        <Divider />
    </>
  )
}

export default OptionListComponent