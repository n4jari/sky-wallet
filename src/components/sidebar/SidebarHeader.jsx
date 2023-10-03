import { ChevronRightRounded, MenuRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const SidebarHeader = ({ handleDrawer,open }) => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <DrawerHeader>
            {!open ? (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}
                    sx={{ margin: "auto" }}
                >
                    <MenuRounded />
                </IconButton>
            ) : (
                <IconButton onClick={handleDrawer}>
                    <ChevronRightRounded />
                </IconButton>
            )}

        </DrawerHeader>
    )
}

export default SidebarHeader