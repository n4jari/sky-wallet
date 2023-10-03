import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { findTargetAccount, selectById, updateAccount, } from './../features/accountsSlice';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CustomNumeralNumericFormat from "../common/PersianNumberFormat";
import FakeAccount from "./FakeAccount";

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
const Transfer = () => {
    const [price, setPrice] = useState("")
    const [target, setTarget] = useState("")

    const account = useSelector(state => state.accounts.currentAccount)
    const targetAccount = useSelector(state => findTargetAccount(state, target))
    const isLogin = useSelector(state => state.accounts.isLogin)
    const fakeAccount = useSelector(state => selectById(state, 1))

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleTransfer = async (e) => {
        e.preventDefault()
        if (price > 0) {
            if (price < account.balance) {
                try {
                    await dispatch(updateAccount({
                        ...targetAccount,
                        balance: targetAccount.balance + Number(price),
                    }))
                    await dispatch(updateAccount({
                        ...account,
                        balance: account.balance - Number(price),
                        history: [
                            ...account.history,
                            {
                                label: "انتقال",
                                date: new Date().toLocaleString('fa-IR'),
                                amount: price
                            }]
                    }))

                    toast(`انتقال با موفقیت انجام شد`, { type: "success" })
                    navigate('/')
                } catch (err) {
                    toast(`مشکلی وجود دارد لطفا مجددا اقدام فرمایید.`, { type: "error" })
                    console.log(err);
                }
            } else {
                toast("موجودی کافی نیست.", { type: "warning" })
            }
        } else {
            toast("مبلغ را به درستی وارد کنید.", { type: "warning" })
        }
    }

    const isDisable = [isLogin, target, price].every(Boolean)

    return (
        <>
            <Form onSubmit={e => handleTransfer(e)}>
                <Typography variant="h6" align="center">انتقال به حساب</Typography>
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
                <TextField
                    type="number"
                    size="small"
                    fullWidth
                    margin="normal"
                    label="شماره حساب مقصد"
                    name="target"
                    value={target}
                    onChange={e => setTarget(e.target.value)}
                />
                <Button variant='contained' type='submit' disabled={!isDisable} sx={{ my: 2 }} fullWidth>انتقال</Button>
            </Form>
            {fakeAccount ? <FakeAccount account={fakeAccount} /> : null}
        </>
    )
}

export default Transfer