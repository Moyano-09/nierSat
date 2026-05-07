/*
  Root development runner.

  Why this file exists:
  - gives you one JavaScript entry point for the current repo
  - serves the frontend while you prepare the Vue migration
  - avoids having multiple files named "server.js"

  Run with:
  npm run dev
*/

const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const frontendDir = path.join(rootDir, "frontend");
const port = 5500;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

/*
  Current role:
  serve the static frontend canvas.

  Future role:
  once Vue is installed, this file can be removed and replaced with the
  framework's own dev server command.
*/
const server = http.createServer((request, response) => {
  const requestedPath = request.url === "/" ? "/index.html" : request.url;
  const safePath = requestedPath.split("?")[0];
  const filePath = path.join(frontendDir, safePath);
  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("File not found.");
        return;
      }

      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Server error.");
      return;
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`Frontend canvas available at http://localhost:${port}`);
  console.log("Backend is planned for C# and is not started from Node.");
});
