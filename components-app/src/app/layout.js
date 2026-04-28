
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <div className="m-40">
          {children}
        </div>
      </body>
    </html>
  );
}
