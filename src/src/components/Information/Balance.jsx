import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'
import { mainContext } from '../../context/mainContext'
import { useSelector } from 'react-redux'
import CustomNumeralNumericFormat from './../../common/PersianNumberFormat';
const Balance = () => {
    const { mode } = useContext(mainContext)
    const { balance } = useSelector(state => state.accounts.currentAccount)

    const CardBox = styled('div')(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center',
        borderRadius: "20px",
        boxShadow: "1px 5px 5px rgb(0,0,0,0.2)",
        height: "240px",
        backgroundColor: mode === "light" ? "#ffff" : "#111",
        [theme.breakpoints.down('sm')]: {
            height: "200px"
        }
    }))

    return (
        <CardBox>
            <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2rem" } }}>
                <CustomNumeralNumericFormat value={balance} thousandSeparator="," suffix=" تومان" />
            </Typography>
            <Typography>موجودی</Typography>
        </CardBox>
    )
}

export default Balance