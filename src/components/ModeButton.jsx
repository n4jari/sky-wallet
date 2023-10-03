import { useContext } from 'react'
import { mainContext } from '../context/mainContext'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'

const ModeButton = ({ open }) => {
    const { mode, setMode } = useContext(mainContext)
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark")
        } else {
            setMode("light")
        }
    }
    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => toggleMode()} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                    {mode !== "light" ? <LightMode /> : <DarkMode />}
                </ListItemIcon>
                <ListItemText primary={mode !== "light" ? "روشن" : "تیره"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    )
}


export default ModeButton