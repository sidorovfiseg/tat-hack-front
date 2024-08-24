import { Box, Button, Container, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

export default function Contacts() {
  return (
    <Container id="contacts" maxWidth={"lg"} className="mt-80 mb-80 ">
      <Box className="flex flex-col items-center gap-5">
        <Typography className="font-montserrat text-5xl">Контакты</Typography>
        <Typography className="font-montserrat text-2xl text-gray-500">
          Контактная информация
        </Typography>
      </Box>
      <Box className="flex justify-center items-center gap-5  my-5">
        <Link href="https://t.me/dump5" target="_blank">
          <Button
            startIcon={<SendIcon className="-rotate-[40deg] scale-105" />}
            variant="outlined"
            className="font-montserrat  text-sm p-4 rounded-lg items-center"
          >
            Телеграм
          </Button>
        </Link>

        <Button
          startIcon={<EmailIcon />}
          variant="outlined"
          className="text-sm font-montserrat p-4 rounded-lg"
        >
          novakakub@gmail.com
        </Button>
      </Box>
    </Container>
  );
}
