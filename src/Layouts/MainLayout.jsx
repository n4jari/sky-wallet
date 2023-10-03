import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { cacheRtl } from '../common/Theme'
import { useState } from 'react';
import { lightTheme, darkTheme } from './../common/Theme';
import { Box } from '@mui/material';
import { BLACK3, WHITE2 } from '../assets/colors';
import { mainContext } from './../context/mainContext';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../common/Header';

const MainLayout = ({ children }) => {
    const [mode, setMode] = useState("light")
    const [account, setAccount] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    return (
        <mainContext.Provider value={{
            mode,
            setMode,
            account,
            setAccount,
            isLogin,
            setIsLogin,
        }}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
                    <Box minHeight={"100vh"} bgcolor={mode === "light" ? WHITE2 : BLACK3}>
                        <Header />
                        <Sidebar>
                            {children}
                        </Sidebar>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </mainContext.Provider >
    )
}

export default MainLayout