import { Box, Typography } from "@mui/material"

const FakeAccount = ({ account }) => {
    return (
        <Box sx={{ textAlign: "center", my: "24px" }}>
            <Typography >
                <span>شماره حساب برای مقصد : </span>
                <span>{account.idCard}</span>
            </Typography>
            <Typography >
                <span>موجودی : </span>
                <span>{account.balance}</span>
            </Typography>
        </Box >
    )
}

export default FakeAccount