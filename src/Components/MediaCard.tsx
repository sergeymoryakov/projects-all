import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import ImgKza from "../assets/images/karagoz-m.jpeg";
import ImgLumi from "../assets/images/lumiline-m.jpeg";
// import ImgAvia from "../assets/images/aviaparts-m.jpeg";
// import ImgSeppo from "../assets/images/seppo-m.jpeg";

export default function MediaCard() {
    return (
        <Card>
            <CardMedia
                sx={{
                    aspectRatio: "16/9",
                    objectPosition: "top",
                    borderRadius: "0.5rem 0.5rem 0 0",
                }}
                image={ImgLumi}
                title="website image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Code</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}
