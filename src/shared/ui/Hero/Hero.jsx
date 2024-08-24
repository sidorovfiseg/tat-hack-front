"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container maxWidth={false} className="relative">
      <video
        className="absolute top-0 left-0 w-full h-full dark:bg-[#0f1214b3] object-cover -z-10  opacity-10"
        autoPlay
        loop
        muted
        src="bg-1.mp4"
      />
      <Container maxWidth="md" className="pb-20">
        <Box className="flex flex-col gap-5 py-40 ">
          <Box className>
            <Typography className="font-scp text-5xl text-yellow-500">
              Объедините мощь <br />
              <span className="">генерации текста</span> и{" "}
              <span>интеллектуального поиска.</span>
            </Typography>
          </Box>

          <Typography className="font-montserrat text-2xl font-medium">
            Retrieval-Augmented Generation (RAG) – это передовая технология,
            которая предоставляет вам наиболее актуальные и точные данные для
            оптимизации ваших бизнес-процессов.
          </Typography>
        </Box>
        <Box className="flex flex-col justify-between gap-5">
          <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            className={`font-montserrat !rounded-3xl text-white p-5 bg-blue-500  ${
              expanded ? "!rounded-t-3xl " : ""
            }`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              className="text-2xl  !rounded-t-full "
            >
              <Toolbar>
                <StorageIcon className="mr-5" />
                Масштабируемость
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails className=" ">
              Наша платформа позволяет без усилий интегрировать ваши собственные
              базы данных, вне зависимости от их количества.
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={`font-montserrat !rounded-3xl text-white p-5 bg-green-500  ${
              expanded ? "!rounded-t-3xl  " : " "
            }`}
            sx={{
              "&::before": {
                content: "none", // Убираем псевдоэлемент
              },
            }}
          >
            <AccordionSummary
              className="text-2xl "
              expandIcon={<ExpandMoreIcon className="text-white" />}
            >
              <Toolbar>
                <SettingsIcon className="mr-5" /> Гибкая настройка
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails className="!border-t-0 !border-b-0">
              Используйте только необходимые для вас данные. Выбирайте таблицы,
              столбцы в вашей БД.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Container>
  );
}
