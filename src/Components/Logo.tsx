import React from "react";
import { Typography, Box } from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";

function Logo() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            alignItems="center"
        >
            <AnchorIcon />
            <Typography variant="h5" align="center">
                SEPPO.digital
            </Typography>
        </Box>
    );
}

export default Logo;
