import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Card from "./Card"
import Balance from "./Balance"
import History from "./History"
import { useSelector } from "react-redux"
import { Typography } from "@mui/material"
const Information = () => {
    const isLogin = useSelector(state => state.accounts.isLogin)
    
    return (
        <Grid2 container spacing={4}>
            { isLogin ? (
                <>
                    <Grid2 xs={12} md={6}>
                        <Card />
                    </Grid2>
                    <Grid2 xs={12} md={6}>
                        <Balance />
                    </Grid2>
                    <Grid2 xs={12}>
                        <History />
                    </Grid2>
                </>
            ) : (
                <Typography variant="h6">ابتدا وارد حساب شوید</Typography>
            )}

        </Grid2>
    )
}

export default Information