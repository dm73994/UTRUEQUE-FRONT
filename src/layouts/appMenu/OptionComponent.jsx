import { ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles } from '@mui/material'
import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const ButtonStyle = {
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
}
const IconStyle = {
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
}

const OptionComponent = ({option, open}) => {

    const {label, icon, path} = option;
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(path, {replace: true})
    }

    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={ButtonStyle} onClick={handleNavigation} >

                <ListItemIcon sx={IconStyle}>
                    {icon}
                </ListItemIcon>
                
                <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />

            </ListItemButton>
        </ListItem>
    )
}

export default OptionComponent