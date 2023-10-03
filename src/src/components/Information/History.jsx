import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import CustomNumeralNumericFormat from './../../common/PersianNumberFormat';
import { ExpandLessRounded, ExpandMoreRounded, ReplyRounded } from '@mui/icons-material';

export default function History() {
    const { history } = useSelector(state => state.accounts.currentAccount)

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            <TableCell>برچسب</TableCell>
                            <TableCell>مقدار</TableCell>
                            <TableCell>تاریخ و زمان</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(history).reverse().map((item, index) => (
                            <TableRow key={index} hover >
                                <TableCell sx={{
                                    color: item.label === "انتقال" ? "blue" : item.label === "برداشت" ? "red" : "green",
                                    display: "flex",
                                    alignItems: "center",
                                    flexFlow: 'wrap',
                                    gap:2
                                }}>
                                    {item.label === "واریز" ? <ExpandLessRounded /> :
                                        item.label === "برداشت" ? <ExpandMoreRounded /> :
                                            <ReplyRounded />
                                    }
                                    {item.label}
                                </TableCell>
                                <TableCell>
                                    <CustomNumeralNumericFormat value={item.amount} thousandSeparator="," suffix=" تومان" />
                                </TableCell>
                                <TableCell>{item.date}</TableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper >
    );
}