import { renderToString } from "react-dom/server";

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const message = "Hello World!";
    if (url.pathname === "/")
      return new Response(
        renderToString(
          <html>
            <body>
              <h1>{message}</h1>
            </body>
          </html>
        ),
        {
          headers: {
            "Content-Type": "text/html",
          },
        }
      );
    return new Response("404!", {
      headers: { "Content-Type": "text/html" },
    });
  },
});
