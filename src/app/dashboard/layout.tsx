import DashBoardLayout from "@/components/ui/dashboard-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Don Saúde",
  description: "Site Don Saúde, agende sua consulta de forma rápida e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>
            <DashBoardLayout>
                {children}
            </DashBoardLayout>
        </body>
    </html>
  );
}
