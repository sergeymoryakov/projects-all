import React from "react";
import {
    AppBar,
    Box,
    CssBaseline,
    Container,
    Grid,
    Toolbar,
    Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import Logo from "./Components/Logo";
import MediaCard from "./Components/MediaCard";

function App() {
    return (
        <Box sx={{ minWidth: "250px" }}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Logo></Logo>
                    <GitHubIcon />
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container
                        maxWidth="xl"
                        sx={
                            {
                                // border: "1px solid red",
                            }
                        }
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            my={2}
                            // sx={{ border: "1px solid red" }}
                        >
                            Projects
                        </Typography>
                        <Grid
                            container
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "auto",
                                    sm: "auto auto",
                                    md: "auto auto auto",
                                    lg: "auto auto auto auto",
                                    xl: "auto auto auto auto auto",
                                },
                                gridGap: "0.5rem",
                                // border: "1px solid red",
                            }}
                        >
                            <Grid item>
                                <MediaCard />
                            </Grid>
                            <Grid item>
                                <MediaCard />
                            </Grid>
                            <Grid item>
                                <MediaCard />
                            </Grid>
                            <Grid item>
                                <MediaCard />
                            </Grid>
                            <Grid item>
                                <MediaCard />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </Box>
    );
}

export default App;
