export const metadata = {
  title: "Just From My Heart",
  description: "Something honest I wanted to tell you"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}