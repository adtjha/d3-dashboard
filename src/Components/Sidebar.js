import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Logo from '../Assiduus_TM_Logo.png';
import { AccountBalanceWalletRounded, AttachMoneyRounded, Contacts, DashboardCustomizeRounded, DescriptionRounded, Person } from '@mui/icons-material';

export const Sidebar = () => {
    return (
        <Drawer
            variant='permanent'
            anchor='left'
        >
            <img src={Logo} alt='Logo' style={{ maxHeight: "40px", padding: "2rem" }} />
            <List>
                <ListItemButton sx={{
                    padding: "0.5rem 3rem",
                    color: "#000",
                    '&:hover, &:focus': {
                        background: '#47b747',
                        color: '#fff',
                        '& .MuiSvgIcon-root': {
                            color: '#fff',
                        },
                    }, '& .MuiSvgIcon-root': {
                        color: '#000',
                    },

                }}>
                    <ListItemIcon sx={{ marginRight: '-10px' }}>
                        <DashboardCustomizeRounded />
                    </ListItemIcon>
                    <Typography fontWeight={'500'} sx={{
                        textAlign: 'start', padding: '4px 0',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Dashboard
                    </Typography>
                </ListItemButton>
                <ListItemButton sx={{
                    "padding": "0.5rem 3rem",
                    color: "#000",
                    '&:hover, &:focus': {
                        background: '#47b747',
                        color: '#fff',
                        '& .MuiSvgIcon-root': {
                            color: '#fff',
                        },
                    }, '& .MuiSvgIcon-root': {
                        color: '#000',
                    },

                }}>
                    <ListItemIcon sx={{ marginRight: '-10px' }}>
                        <AccountBalanceWalletRounded />
                    </ListItemIcon>
                    {/* <ListItemText primary="Accounts" /> */}
                    <Typography fontWeight={'500'} sx={{
                        textAlign: 'start', padding: '4px 0',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Accounts
                    </Typography>
                </ListItemButton>
                <ListItemButton sx={{
                    "padding": "0.5rem 3rem",
                    color: "#000",
                    '&:hover, &:focus': {
                        background: '#47b747',
                        color: '#fff',
                        '& .MuiSvgIcon-root': {
                            color: '#fff',
                        },
                    }, '& .MuiSvgIcon-root': {
                        color: '#000',
                    },

                }}>
                    <ListItemIcon sx={{ marginRight: '-10px' }}>
                        <AttachMoneyRounded />
                    </ListItemIcon>
                    {/* <ListItemText primary="Payroll" /> */}
                    <Typography fontWeight={'500'} sx={{
                        textAlign: 'start', padding: '4px 0',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Payroll
                    </Typography>
                </ListItemButton>
                <ListItemButton sx={{
                    "padding": "0.5rem 3rem",
                    color: "#000",
                    '&:hover, &:focus': {
                        background: '#47b747',
                        color: '#fff',
                        '& .MuiSvgIcon-root': {
                            color: '#fff',
                        },
                    }, '& .MuiSvgIcon-root': {
                        color: '#000',
                    },

                }}>
                    <ListItemIcon sx={{ marginRight: '-10px' }}>
                        <DescriptionRounded />
                    </ListItemIcon>
                    {/* <ListItemText primary="Reports" /> */}
                    <Typography fontWeight={'500'} sx={{
                        textAlign: 'start', padding: '4px 0',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Reports
                    </Typography>
                </ListItemButton>
                <ListItemButton sx={{
                    "padding": "0.5rem 3rem",
                    color: "#000",
                    '&:hover, &:focus': {
                        background: '#47b747',
                        color: '#fff',
                        '& .MuiSvgIcon-root': {
                            color: '#fff',
                        },
                    }, '& .MuiSvgIcon-root': {
                        color: '#000',
                    },

                }}>
                    <ListItemIcon sx={{ marginRight: '-10px' }}>
                        <Person />
                    </ListItemIcon>
                    {/* <ListItemText primary="Advisor" /> */}
                    <Typography fontWeight={'500'} sx={{
                        textAlign: 'start', padding: '4px 0',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Advisor
                    </Typography>
                </ListItemButton>
                <ListItemButton sx={{
                    "padding": "0.5rem 3rem",
                    color: "#000",
                    '&:hover, &:focus': {
                        background: '#47b747',
                        color: '#fff',
                        '& .MuiSvgIcon-root': {
                            color: '#fff',
                        },
                    }, '& .MuiSvgIcon-root': {
                        color: '#000',
                    },

                }}>
                    <ListItemIcon sx={{ marginRight: '-10px' }}>
                        <Contacts />
                    </ListItemIcon>
                    <Typography fontWeight={'500'} sx={{
                        textAlign: 'start', padding: '4px 0',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Contacts
                    </Typography>
                </ListItemButton>
            </List>
        </Drawer>
    );
};
