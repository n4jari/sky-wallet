import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleAccount, login } from '../features/accountsSlice'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'


const Form = styled('form')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    margin: "auto",
    width: "50%",
    [theme.breakpoints.down('lg')]: {
        width: "80%",
    },
    [theme.breakpoints.down('md')]: {
        width: "100%",
    },
}))

const Login = () => {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await dispatch(getSingleAccount(id))
            await dispatch(login({ password }))
            navigate("/")
        } catch (err) {
            console.error(err);
        }
    }

    const isDisable = [id, password].every(Boolean)
    return (
        <Form onSubmit={e => handleLogin(e)} >
            <Typography variant="h6" align="center">ورود به حساب</Typography>

            <TextField
                contentEditable={false}
                type='number'
                variant='outlined'
                name='id'
                label="کد ملی"
                value={id}
                onChange={e => setId(e.target.value)}
                margin='normal'
                fullWidth
                size='small'
            />
            <TextField
                type='password'
                variant='outlined'
                name='password'
                label="گذرواژه"
                value={password}
                onChange={e => setPassword(e.target.value)}
                margin='normal'
                fullWidth
                size='small'
            />
            <Button disabled={!isDisable} variant='contained' type='submit' sx={{ my: 2 }} fullWidth>ورود</Button>
        </Form>
    )
}

export default Login