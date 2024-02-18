import { ReactElement } from "react";
import { Typography, Box } from "@mui/material";

function Logo(): ReactElement {
    return (
        <Box>
            <Typography variant="h5" align="center">
                SEPPO.digital
            </Typography>
        </Box>
    );
}

export default Logo;
