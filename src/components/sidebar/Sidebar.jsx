import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Box,
    Divider,
    useMediaQuery
} from '@mui/material';
import SidebarHeader from './SidebarHeader';
import MuiDrawer from '@mui/material/Drawer';
import SidebarContent from './SidebarContent';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(false);

    const theme = useTheme()
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(() => {
        setOpen(prev => !prev)
    }, [isMdDown])

    const handleDrawer = () => setOpen(prev => !prev)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <SidebarHeader handleDrawer={handleDrawer} open={open} />
                <Divider />

                <SidebarContent open={open} />

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box >
    );
}
export default Sidebar