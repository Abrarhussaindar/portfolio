import Header from "@/components/Base/Header";
import "../globals.css";
import "./layout.css"; // Custom CSS for layout
import Footer from "@/components/Base/Footer";
import { ThemeProvider } from "@/components/Global/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}