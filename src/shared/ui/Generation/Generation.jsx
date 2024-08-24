"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../../config/backend/backend";
import LoadingButton from "@mui/lab/LoadingButton";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";

export default function Generation() {
  const [inputValue, setInputValue] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${backendUrl}/chat/`, {
        data: inputValue,
      });

      const answer = response.data.answer;
      setAnswer(answer);
    } catch (error) {
      setError("Упс, произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" id="generator">
      <Box className="pt-20">
        <Typography className="text-center font-montserrat text-4xl">
          Протестируйте работу сервиса на наших тестовых данных
        </Typography>
        <Typography className="mt-10 font-montserrat text-2xl text-left">
          Для тестирования системы предложено 2 датасета:
        </Typography>
        <Toolbar>
          <Button
            variant="text"
            className="font-montserrat mt-10 mr-10"
            href="/dataset.json"
            download="T-Bank.json"
            startIcon={<DownloadIcon />}
          >
            T-Bank.json
          </Button>
          <Button
            variant="text"
            className="font-montserrat mt-10"
            href="/dataset_patents.xlsx"
            download="patents.xlsx"
            startIcon={<DownloadIcon />}
          >
            patents.xlsx
          </Button>
        </Toolbar>
        <Box className="flex flex-col justify-between gap-5 mt-10">
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
                <AssignmentIcon className="mr-5" />
                Описание датасета с патентами
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails className="text-xl">
              Датасет содержит информацию по методам определения глубины
              электропогружного насоса
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={`font-montserrat !rounded-3xl text-white p-5 bg-yellow-400  ${
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
                <AccountBalanceIcon className="mr-5" /> Описание датасета
                Тинькофф
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails className="!border-t-0 !border-b-0 text-xl">
              Датасет содержит информацию о продуктах банка Тинькоф
            </AccordionDetails>
          </Accordion>
        </Box>
        <Toolbar disableGutters className="flex justify-between gap-5 mt-10">
          <TextField
            className="flex-grow !rounded-3xl"
            placeholder="Какие существуют эффективные методы определения глубины электропогружного насоса?"
            onChange={handleInputChange}
            value={inputValue}
            inputProps={{
              className: "font-montserrat text-xs font-semibold",
            }}
          />
          <LoadingButton
            className="font-montserrat"
            loading={loading}
            disabled={loading}
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSubmit}
          >
            {loading ? "Генерируем ответ" : "Задать вопрос"}
          </LoadingButton>
        </Toolbar>
        {answer !== "" ? <Typography>{answer}</Typography> : <></>}
      </Box>
    </Container>
  );
}
