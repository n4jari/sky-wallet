import { styled } from '@mui/system'
import { Box, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { WHITE2 } from '../../assets/colors'
import { DeveloperBoardOutlined } from '@mui/icons-material'
import { PatternFormat } from 'react-number-format';
import { useSelector } from 'react-redux';

const CardBank = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 5px",
    borderRadius: "20px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.2)",
    backgroundColor: "#111",
    color: WHITE2,
    height: "240px",
    border: "1px solid #f1f1f1",
    width: "100%",
    [theme.breakpoints.down('sm')]: {
        height: "200px"
    }

}))

const flexStyled = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const Card = () => {
    const { fullname, idCard } = useSelector(state => state.accounts.currentAccount)

    return (
        <CardBank>
            <CardHeader title={
                <Box sx={flexStyled}>
                    <Typography>اسکای والت</Typography>
                    <DeveloperBoardOutlined sx={{ fontSize: "2rem" }} />
                </Box>
            } />
            <CardContent>
                <Typography
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.3rem" },
                        textAlign: "center",
                        backgroundColor: WHITE2,
                        color: "#111",
                        borderRadius: "4px",
                        padding: "2px 0"
                    }}
                >
                    <PatternFormat value={idCard} format="#### #### #### ####" displayType='text' />
                </Typography>
            </CardContent>

            <CardActions disableSpacing >
                <Typography textAlign="center" margin="auto">
                    {fullname}
                </Typography>
            </CardActions>
        </CardBank >
    )
}

export default Card