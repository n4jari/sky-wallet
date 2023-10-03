import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ModeButton from '../ModeButton'
import { sidebarItems } from '../../data/sildebarItems'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { mainContext } from '../../context/mainContext'

const SidebarContent = ({ open }) => {
    const { mode } = useContext(mainContext)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const handleChange = (e, index) => setSelectedIndex(index)

    const LinkStyled = {
        textDecoration: "none",
        color: mode === "light" ? "#111" : "#fff"
    }

    return (
        <List >
            {sidebarItems.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                    <Link to={item.linkTo} style={LinkStyled}>
                        <ListItemButton selected={selectedIndex === index} onClick={(e) => handleChange(e, index)} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))
            }
            <ModeButton />
        </List >
    )
}

export default SidebarContent