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
import projects from "./data/data";

console.log("projects: ", projects);

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
                    <Container maxWidth="xl">
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
                                    xs: "1fr",
                                    sm: "1fr 1fr",
                                    md: "1fr 1fr 1fr",
                                    lg: "1fr 1fr 1fr 1fr",
                                    xl: "1fr 1fr 1fr 1fr 1fr",
                                },
                                gridGap: "0.5rem",
                            }}
                        >
                            {projects.map((project) => (
                                <Grid item key={project.id}>
                                    <MediaCard project={project} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </main>
        </Box>
    );
}

export default App;
