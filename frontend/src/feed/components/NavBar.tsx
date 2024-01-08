import { NotificationImportant, Notifications, Search } from "@mui/icons-material"
import { AppBar, Typography, styled, alpha, InputBase, TextField, Button } from "@mui/material"

const NavBar = () => {
    const SearchWrapper = styled('div')(({theme}) => ({
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "50px",
        padding: theme.spacing(1.0),
        position: "relative"
    }))

    const SearchIconWrapper = styled('div')(({theme}) => ({
        display: "flex",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        width: "10%",
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    }))

    return (
        <AppBar
            sx={{
                backgroundColor: "white",
                height: "60px",
                position: "relative",
                top: "0",
                left: "0",
                right: "0",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <div className="flex flex-1">
                    <Typography variant="h4" component='h2' sx={{color: "black"}}>
                        spark
                    </Typography>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <SearchWrapper>
                        <SearchIconWrapper>
                            <Search />
                        </SearchIconWrapper>
                        <TextField 
                            sx={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                left: "10%",
                                bottom: "0"
                            }}
                            placeholder="Search..."/>
                    </SearchWrapper>
                </div>

                <div className="flex flex-1">
                    <Button startIcon={<Notifications />}>
                        
                    </Button>
                </div>
        </AppBar>
    )
}

export default NavBar