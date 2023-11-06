import { Button, Card, CardContent, Divider, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import { BarChart } from './BarChart';
import { CloudUploadRounded } from '@mui/icons-material';

export const Chart2 = () => {
    const [data, setdata] = useState([
        { year: 9, sales: 8949000 },
        { year: 10, sales: 10979000 },
        { year: 11, sales: 9303000 },
        { year: 12, sales: 8185000 },
        { year: 13, sales: 8213000 },
        { year: 14, sales: 8518000 },
    ]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (<Card sx={{ minHeight: '340px' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', flexDirection: 'row' }}>
            <Typography fontWeight={'700'} sx={{
                textAlign: 'start',
                fontFamily: "'Poppins', sans-serif"
            }}>
                Invoices owned to you
            </Typography>
            <Button variant="contained" aria-describedby={id} onClick={handleClick} sx={{
                boxShadow: 'none', background: '#8ec4ed5c',
                color: '#67bd67', textTransform: 'capitalize', fontWeight: '700', borderRadius: '6px',
                fontFamily: "'Poppins', sans-serif",
                '&:hover': {
                    background: '#8ec4ed5c',
                    boxShadow: 'none'
                }
            }}>
                New Sales Invoices
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Button variant='outlined' endIcon={<CloudUploadRounded />} sx={{
                    textTransform: 'capitalize', color: '#555', borderColor: '#eee',
                    borderWidth: '2px', padding: '4px 12px', borderRadius: '6px',
                    fontFamily: "'Poppins', sans-serif",
                    '&:hover': {
                        borderWidth: '2px',
                        borderColor: '#444',
                        background: '#eee'
                    }
                }} >
                    Upload
                    <input type='file' style={{
                        clip: 'rect(0 0 0 0)',
                        clipPath: 'inset(50%)',
                        height: 1,
                        overflow: 'hidden',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        whiteSpace: 'nowrap',
                        width: 1,
                    }} />
                </Button>
            </Popover>
        </CardContent>
        <Divider></Divider>
        <BarChart parentData={data} />
    </Card>);
};
