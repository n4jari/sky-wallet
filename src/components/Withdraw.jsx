import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { updateAccount } from './../features/accountsSlice';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CustomNumeralNumericFormat from "../common/PersianNumberFormat";

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
const Withdraw = () => {
    const [price, setPrice] = useState("")
    const account = useSelector(state => state.accounts.currentAccount)
    const isLogin = useSelector(state => state.accounts.isLogin)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleWithdraw = async (e) => {
        e.preventDefault()
        if (price > 0) {
            if (price < account.balance) {
                try {
                    await dispatch(updateAccount({
                        ...account,
                        balance: account.balance - Number(price),
                        history: [
                            ...account.history,
                            {
                                label: "برداشت",
                                date: new Date().toLocaleString('fa-IR'),
                                amount: price
                            }]
                    }))
                    toast(`برداشت با موفقیت انجام شد`, { type: "success" })
                    navigate('/')
                } catch (err) {
                    toast(`مشکلی وجود دارد لطفا مجددا اقدام فرمایید.`, { type: "error" })
                    console.log(err);
                }
            }else{
            toast("موجودی کافی نیست.", { type: "warning" })
            }
        } else {
            toast("مبلغ را به درستی وارد کنید.", { type: "warning" })
        }
    }

    const isDisable = [isLogin, price].every(Boolean)

    return (
        <Form onSubmit={e => handleWithdraw(e)}>
            <Typography variant="h6" align="center">برداشت از حساب</Typography>
            <TextField
                type="number"
                size="small"
                fullWidth
                margin="normal"
                label="مبلغ به تومان"
                name="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
                helperText={<CustomNumeralNumericFormat value={price} thousandSeparator="," suffix=" تومان" />}
            />
            <Button variant='contained' type='submit' disabled={!isDisable} sx={{ my: 2 }} fullWidth>برداشت</Button>
        </Form>
    )
}

export default Withdraw