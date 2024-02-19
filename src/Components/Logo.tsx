import { ReactElement } from "react";
import { Typography, Box } from "@mui/material";
// import { SHADOW_DARK_BG } from "../data/variables";

function Logo(): ReactElement {
    return (
        <Box>
            <Typography
                variant="h5"
                align="center"
                sx={
                    {
                        // textShadow: SHADOW_DARK_BG,
                    }
                }
            >
                SEPPO.digital
            </Typography>
        </Box>
    );
}

export default Logo;
