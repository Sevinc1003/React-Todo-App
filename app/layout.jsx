import "./globals.css";

export const metadata = {
  title: "Next.js Todo App",
  description: "Yaradıcı və sürətli Todo tətbiqi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}