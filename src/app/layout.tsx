import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import RootLayout from "@/components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "lAIs - Learn with AIs!",
    description: "Transform lengthy lectures into concise summaries, and more!",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={inter.className}>
                <MantineProvider>
                    <RootLayout>{children}</RootLayout>
                </MantineProvider>
            </body>
        </html>
    );
}
