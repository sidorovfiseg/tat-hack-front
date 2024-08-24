"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { scrollToElement } from "../../lib/helpers/scrollToElement";

const pages = [
  { label: "Как это работает?", id: "howItWorks" },
  { label: "Попробовать", id: "generator" },
  { label: "Контакты", id: "contacts" },
];

export default function Header() {
  return (
    <AppBar position="static" className=" shadow-none bg-white border-b-2">
      <Container>
        <Toolbar disableGutters>
          <LayersRoundedIcon className="text-yellow-500 mr-2 " />
          <Typography className="font-pacifico text-yellow-500 text-2xl">
            YoRAG
          </Typography>

          <Box className="flex-grow flex justify-start mx-5 items-center">
            {pages.map(({ label, id }) => (
              <Button
                variant="text"
                className="font-montserrat text-lg"
                key={label}
                onClick={() => scrollToElement(id)}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box className="flex-grow-0 flex gap-2">
            <Button className="font-montserrat" variant="contained">
              Вход
            </Button>
            <Button className="font-montserrat" variant="contained">
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
