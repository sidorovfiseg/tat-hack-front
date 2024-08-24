import Contacts from "@/src/shared/ui/Contacts/Contacts";
import Generation from "@/src/shared/ui/Generation/Generation";
import Hero from "@/src/shared/ui/Hero/Hero";
import HowItWorks from "@/src/shared/ui/HowItWorks/HowItWorks";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Hero />
      <HowItWorks />
      <Generation />
      <Contacts />
    </Box>
  );
}
