import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { COLOR_BACKGROUND, COLOR_FONT } from "../data/variables";

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                mt: "auto",
                backgroundColor: COLOR_BACKGROUND,
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
