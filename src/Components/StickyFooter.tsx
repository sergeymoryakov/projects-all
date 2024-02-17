import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: "#002060",
                color: "#fff",
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1">SEPPO.digital</Typography>
                <Typography variant="body2">
                    © 2024 Helsinki, Finland
                </Typography>
            </Container>
        </Box>
    );
}
