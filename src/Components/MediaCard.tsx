import { ReactElement } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Project } from "../data/data";
// import { SHADOW_LIGHT_BG } from "../data/variables";

export default function MediaCard({
    project,
}: {
    project: Project;
}): ReactElement {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                // background: SHADOW_LIGHT_BG,
            }}
        >
            <CardMedia
                sx={{
                    aspectRatio: "16/9",
                    objectPosition: "50% 0%",
                    borderRadius: "0.5rem 0.5rem 0 0",
                }}
                image={`images/${project.image}`}
                title="website image"
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 1.5,
                    }}
                >
                    {project.description}
                </Typography>
                <Stack
                    direction="row"
                    sx={{
                        flexWrap: "wrap",
                        gap: 0.5,
                    }}
                >
                    {project.stack
                        .split("#")
                        .sort()
                        .map((tech, index) => (
                            <Chip
                                label={tech}
                                key={index}
                                size="small"
                                variant="outlined"
                            />
                        ))}
                </Stack>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    LinkComponent="a"
                    href={project.view}
                    target="_blank"
                    aria-label="view url"
                >
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
