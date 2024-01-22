import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import ThemeContext from "../ThemeContext";

const ThemeSwitcher = () => {
    const buttonRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const { themeMode, switchThemeMode } = useContext(ThemeContext);

    const handleOpen = () => {
        setOpenMenu(true);
    };

    const handleClose = () => {
        setOpenMenu(false);
    };

    const handleSwitchTheme = (mode) => {
        switchThemeMode(mode);
        handleClose();
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpen}
                startIcon={<PaletteIcon />}
                ref={buttonRef}
            >
                Switch Theme
            </Button>
            <Menu
                open={openMenu}
                anchorEl={buttonRef.current}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => handleSwitchTheme("light")}
                    selected={themeMode === "light"}
                >
                    Light
                </MenuItem>
                <MenuItem
                    onClick={() => handleSwitchTheme("dark")}
                    selected={themeMode === "dark"}
                >
                    Dark
                </MenuItem>
                <MenuItem
                    onClick={() => handleSwitchTheme("System")}
                    selected={themeMode === "System"}
                >
                    System
                </MenuItem>
            </Menu>
        </div>
    );
};

export default ThemeSwitcher;
