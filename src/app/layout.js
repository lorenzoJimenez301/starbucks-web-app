import "./globals.css";

export const metadata = {
  title: "Starbucks - Coffee and More",
  description: "El mejor café del mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-w-sm font-helvetica bg-white">
        {children}
      </body>
    </html>
  );
}
