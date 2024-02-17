import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Project } from "../data/data";

// import ImgKza from "../assets/images/karagoz-m.jpeg";
// import ImgLumi from "../assets/images/lumiline-m.jpeg";
// import ImgAvia from "../assets/images/aviaparts-m.jpeg";
// import ImgSeppo from "../assets/images/seppo-m.jpeg";

interface projectProps {
    project: Project;
}

export default function MediaCard({ project }: projectProps) {
    return (
        <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardMedia
                sx={{
                    flexGrow: 1,
                    aspectRatio: "16/9",
                    objectPosition: "50% 0%",
                    borderRadius: "0.5rem 0.5rem 0 0",
                }}
                image={`public/images/${project.image}`}
                title="website image"
            />
            <CardContent
                sx={
                    {
                        // flexGrow: 1,
                    }
                }
            >
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button
                    size="small"
                    LinkComponent="a"
                    href={project.code}
                    target="_blank"
                    aria-label="code url"
                >
                    Code
                </Button> */}
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
