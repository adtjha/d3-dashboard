import { AppBar, Box, TextField, Toolbar } from "@mui/material";
import { ArrowDropDown, Face, NotificationsRounded, SearchRounded } from "@mui/icons-material";

export const Navbar = () => {
    return (<AppBar position='fixed' sx={{
        background: "#fff",
        color: '#868686'
    }}>
        <Toolbar sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'center', padding: '0 1rem' }}>
                <TextField
                    variant="outlined"
                    size="small"
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 0,
                            background: '#ededed'
                        },
                        '& .MuiSvgIcon-root': {
                            zIndex: 1,
                            color: '#868686'
                        },
                        '& .MuiInputBase-root': {
                            padding: '0px 10px',
                            width: '160px',
                            borderRadius: '6px'
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <SearchRounded />
                        ),
                    }} />
                <NotificationsRounded />
                <Face />
                <ArrowDropDown />
            </Box>
        </Toolbar>
    </AppBar>);
};
