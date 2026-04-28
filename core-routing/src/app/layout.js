
export default function RootLayout(props) {
  return (
    <html
      lang="en"
    >
      <body>
        <div id="rootLayout">
          {props.children}
        </div>
      </body>
    </html>
  );
}
