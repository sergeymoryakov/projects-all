import { ReactElement } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { COLOR_BACKGROUND, COLOR_FONT } from "../data/variables";

export default function StickyFooter(): ReactElement {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                mt: "auto",
                background: COLOR_BACKGROUND,
                color: COLOR_FONT,
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
