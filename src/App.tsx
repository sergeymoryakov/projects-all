import { Box, CssBaseline, Container, Grid, Typography } from "@mui/material";

import Header from "./Components/Header";
import MediaCard from "./Components/MediaCard";
import StickyFooter from "./Components/StickyFooter";
import { COLOR_BODY, SHADOW_LIGHT_BG } from "./data/variables";

import projects from "./data/data";

function App() {
    return (
        <Box
            sx={{
                minWidth: "250px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                background: COLOR_BODY,
            }}
        >
            <CssBaseline />
            <Header />
            <main>
                <div>
                    <Container
                        sx={{
                            mb: 2,
                        }}
                        maxWidth={false}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            my={2}
                            sx={{
                                textShadow: SHADOW_LIGHT_BG,
                            }}
                        >
                            Our Projects
                        </Typography>
                        <Grid
                            container
                            sx={{
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "1fr 1fr",
                                    md: "1fr 1fr 1fr",
                                    lg: "1fr 1fr 1fr 1fr",
                                    xl: "1fr 1fr 1fr 1fr 1fr",
                                },
                                gridGap: "1rem",
                            }}
                        >
                            {projects
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map(
                                    (project) =>
                                        project.display && (
                                            <Grid item key={project.id}>
                                                <MediaCard project={project} />
                                            </Grid>
                                        )
                                )}
                        </Grid>
                    </Container>
                </div>
            </main>
            <StickyFooter />
        </Box>
    );
}

export default App;
