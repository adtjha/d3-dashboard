import { KeyboardArrowDownRounded } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { LineChart } from './LineChart';

const Button1 = ({ data, setdata }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setdata([...data.map((e) => {
            e.sales = ~~(Math.random() * 10000000);
            return e;
        })])
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<><Button variant='outlined' endIcon={<KeyboardArrowDownRounded />} sx={{
        textTransform: 'capitalize', color: '#555', borderColor: '#eee',
        borderWidth: '2px', padding: '4px 12px', borderRadius: '6px',
        fontFamily: "'Poppins', sans-serif",
        '&:hover': {
            borderWidth: '2px',
            borderColor: '#444',
            background: '#eee'
        }
    }}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} >
        Manage
    </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu></>)
}

const Button2 = ({ data, setdata }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setdata([...data.map((e) => {
            e.sales = ~~(Math.random() * 10000000);
            return e;
        })])
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        <Button variant='outlined' endIcon={<KeyboardArrowDownRounded />} sx={{
            textTransform: 'capitalize', color: '#555', borderColor: '#eee',
            borderWidth: '2px', padding: '4px 12px', borderRadius: '6px',
            fontFamily: "'Poppins', sans-serif",
            '&:hover': {
                borderWidth: '2px',
                borderColor: '#444',
                background: '#eee'
            }
        }}
            id="demo-positioned-button-2"
            aria-controls={open ? 'demo-positioned-menu-2' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >January</Button>
        <Menu
            id="demo-positioned-menu-2"
            aria-labelledby="demo-positioned-button-2"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <MenuItem onClick={handleClose}>Feburary</MenuItem>
            <MenuItem onClick={handleClose}>March</MenuItem>
            <MenuItem onClick={handleClose}>April</MenuItem>
        </Menu></>)
}

export const Chart1 = () => {
    const [data, setdata] = useState([
        { year: 9, sales: 8949000 },
        { year: 10, sales: 10979000 },
        { year: 11, sales: 9303000 },
        { year: 12, sales: 8185000 },
        { year: 13, sales: 8213000 },
        { year: 14, sales: 8518000 },
        { year: 15, sales: 8991000 },
        { year: 16, sales: 8620000 },
        { year: 17, sales: 8479000 },
        { year: 18, sales: 8217000 },
    ]);


    return (<Card sx={{ minHeight: '340px' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', flexDirection: 'row' }}>
            <Typography fontWeight={'700'} sx={{
                textAlign: 'start', width: 'fit-content',
                fontFamily: "'Poppins', sans-serif"
            }}>
                Checking Account
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', width: 'fit-content' }}>
                <Button1 data={data} setdata={setdata} />
                <Button2 data={data} setdata={setdata} />
            </Box>
        </CardContent>
        <Divider></Divider>
        <LineChart parentData={data} />
    </Card>);
};
