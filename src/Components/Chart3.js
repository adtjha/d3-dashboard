import { Card, CardContent, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { StackedBarChart } from './StackedBarChart';

export const Chart3 = () => {
    const [data, setdata] = useState([
        { "year": 8, "sales": 7569664, "sales2": 3241170 },
        { "year": 9, "sales": 2504600, "sales2": 1097530 },
        { "year": 10, "sales": 2433163, "sales2": 713746 },
        { "year": 11, "sales": 765939, "sales2": 1571632 },
        { "year": 12, "sales": 4460047, "sales2": 448050 },
        { "year": 13, "sales": 5664478, "sales2": 2800880 }
    ]);

    return (<Card sx={{ minHeight: '340px' }}>
        <CardContent>
            <Typography fontWeight={'700'} sx={{
                textAlign: 'start',
                fontFamily: "'Poppins', sans-serif"
            }}>
                Total cash flow
            </Typography>
        </CardContent>
        <Divider></Divider>
        <StackedBarChart parentData={data} />
    </Card>);
};
