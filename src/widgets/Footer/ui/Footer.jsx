import { Box, Container, Toolbar, Typography } from "@mui/material";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";

export default function Footer() {
  return (
    <Container maxWidth={"md"} className="border-t-2 ">
      <Toolbar>
        <Box className="flex flex-grow">
          <LayersRoundedIcon className="text-yellow-500 mr-2 " />
          <Typography className="font-pacifico text-yellow-500 text-2xl">
            YoRAG
          </Typography>
        </Box>
        <Typography className="font-montserrat font-medium">
          2024 - Команда{" "}
          <span className="underline">Needles in different directions</span>
        </Typography>
      </Toolbar>
    </Container>
  );
}
