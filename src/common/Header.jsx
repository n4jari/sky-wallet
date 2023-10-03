import { Wallet } from "@mui/icons-material"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { styled } from '@mui/system'
import { BLACK3, WHITE1 } from "../assets/colors"
import { useContext } from "react"
import { mainContext } from "../context/mainContext"

const Header = () => {
  const { mode } = useContext(mainContext)

  const LogoBox = styled('div')({
    color: mode === "light" ? BLACK3 : WHITE1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  })

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: mode === "light" ? "#fff" : null }} >
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "center" }}>
        <LogoBox>
          <Wallet />
          <Typography variant="h6">اسکای والت</Typography>
        </LogoBox>
      </Toolbar>
    </AppBar >
  )
}

export default Header