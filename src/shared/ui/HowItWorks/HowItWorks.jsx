import {
  Box,
  Container,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

const steps = [
  {
    label: "Подключитесь к вашей базе ",
  },
  {
    label: "Выберите подходящие таблицы и поля ",
  },
  {
    label: "Подтвердите ваш выбор, чтобы начать обработку вашей базы",
  },
  {
    label: "После загрузки задайте вопрос и получите ответ",
  },
];

export default function HowItWorks() {
  return (
    <Container id="howItWorks" maxWidth="md">
      <Box className="pt-20">
        <Typography className="text-center font-montserrat text-5xl">
          Как это работает ?
        </Typography>
        <Stepper className="mt-5" orientation="vertical">
          {steps.map((step) => (
            <Step active key={step.label}>
              <StepLabel>
                <Typography className="font-montserrat text-2xl">
                  {step.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}
