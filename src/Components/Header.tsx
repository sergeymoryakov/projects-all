import { ReactElement } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import Logo from "./Logo";
import {
    COLOR_BACKGROUND,
    COLOR_FONT,
    URL_GITHUB_ACCOUNT,
} from "../data/variables";

function Header(): ReactElement {
    return (
        <>
            <AppBar position="relative" sx={{ background: COLOR_BACKGROUND }}>
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
        </>
    );
}

export default Header;
