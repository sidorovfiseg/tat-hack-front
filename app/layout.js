import { Inter, Montserrat, Pacifico, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Header from "@/src/shared/ui/Header/Header";
import Footer from "@/src/widgets/Footer/ui/Footer";
import { createTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-pacifico",
});

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
  weight: "variable",
  variable: "--font-montserrat",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["cyrillic"],
  display: "swap",
  weight: "variable",
  variable: "--font-scp",
});

export const metadata = {
  title: "YoRAG",
  description: "Сервисы вопросно-ответной системы",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pacifico.variable} ${source_code_pro.variable} ${montserrat.variable}`}
    >
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
