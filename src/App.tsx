import {
    AppBar,
    Box,
    CssBaseline,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import Logo from "./Components/Logo";
import MediaCard from "./Components/MediaCard";
import StickyFooter from "./Components/StickyFooter";

import projects from "./data/data";
import {
    COLOR_BACKGROUND,
    COLOR_FONT,
    URL_GITHUB_ACCOUNT,
} from "./data/variables";

console.log("projects: ", projects);

function App() {
    return (
        <Box
            sx={{
                minWidth: "250px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
            }}
        >
            <CssBaseline />
            <AppBar
                position="relative"
                sx={{ backgroundColor: COLOR_BACKGROUND }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Logo></Logo>
                    <IconButton
                        LinkComponent="a"
                        href={URL_GITHUB_ACCOUNT}
                        target="_blank"
                        aria-label="github url"
                        sx={{ color: COLOR_FONT }}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main className="test-name">
                <div className="test-div">
                    <Container
                        className="test-container"
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
                        >
                            Projects
                        </Typography>
                        <Grid
                            className="test-grid-container"
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
            <StickyFooter />
        </Box>
    );
}

export default App;
