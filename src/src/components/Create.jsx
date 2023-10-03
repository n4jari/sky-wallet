import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewAccount } from '../features/accountsSlice'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import { customAlphabet } from 'nanoid'

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

const nanoId = customAlphabet("0123456789", 16)

const Create = () => {
    const [id, setId] = useState("")
    const [fullname, setFullname] = useState("")
    const [password, setPassword] = useState("")
    const [request, setRequest] = useState("idle")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCreate = async (e) => {
        e.preventDefault()
        if (request === "idle") {
            setRequest("pending")
            await dispatch(addNewAccount({
                id,
                fullname,
                password,
                idCard: nanoId(),
                balance: 100000,
                history: []
            }))
            navigate('/login')
            setRequest("idle")
        }
    }
    const isDisable = [id, password, fullname].every(Boolean)
    return (
        <Form onSubmit={e => handleCreate(e)} >
            <Typography variant="h6" align="center">ساخت حساب</Typography>

            <TextField
                type='text'
                variant='outlined'
                name='fullname'
                label="نام ونام خانوادگی"
                value={fullname}
                onChange={e => setFullname(e.target.value)}
                margin='normal'
                fullWidth
                size='small'
            />
            <TextField
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
            <Button disabled={!isDisable} variant='contained' type='submit' sx={{ my: 2 }} fullWidth>ساخت</Button>
        </Form>
    )
}

export default Create