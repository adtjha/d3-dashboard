import { Card, CardContent, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export const Chart4 = () => {
    const createData = (account, month, ytd) => {
        return { account, month, ytd };
    }

    const rows = [
        createData('Sales', 1194.58, 11418.29),
        createData('Advertising', 6879.02, 9271.36),
        createData('Inventory', 4692.26, 9768.09),
        createData('Entertainment', 0, 0),
        createData('Product', 4652.10, 2529.90),
    ];

    return (<Card sx={{ minHeight: '340px' }}>
        <CardContent>
            <Typography fontWeight={'700'} sx={{
                textAlign: 'start',
                fontFamily: "'Poppins', sans-serif"
            }}>
                Account Watchlist
            </Typography>
        </CardContent>
        <Divider></Divider>
        <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell sx={{
                        padding: '16px', border: 0, color: '#cecece',
                        fontFamily: "'Poppins', sans-serif"
                    }} align="left">Account</TableCell>
                    <TableCell sx={{
                        padding: '16px', border: 0, color: '#cecece',
                        fontFamily: "'Poppins', sans-serif"
                    }} align="right">This Month</TableCell>
                    <TableCell sx={{
                        padding: '16px', border: 0, color: '#cecece',
                        fontFamily: "'Poppins', sans-serif"
                    }} align="right">YTD</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.account}
                        sx={{ border: 0 }}
                    >
                        <TableCell sx={{
                            padding: '8px 16px', border: 0, fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif"
                        }} component="th" scope="row">
                            {row.account}
                        </TableCell>
                        <TableCell sx={{
                            padding: '8px 16px', border: 0, fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif"
                        }} align="right">{new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(row.month)}</TableCell>
                        <TableCell sx={{
                            padding: '8px 16px', border: 0, fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif"
                        }} align="right">{new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(row.ytd)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>);
};
