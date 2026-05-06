import express from "express";
import cors from "cors";
import { spaceRouter } from "./routes/space.routes.js";

/*
  This is the backend entry point.
  Think of it as the "main door" to your server.

  Responsibilities here:
  - create the Express app
  - enable middleware
  - mount feature routes
  - start listening on a port
*/

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/*
  Health route:
  Useful when checking whether the server is alive before debugging anything else.
*/
app.get("/health", (_request, response) => {
  response.json({
    ok: true,
    service: "yorha-space-archive-backend"
  });
});

/*
  Feature routes:
  Group related endpoints under a path namespace.
  In a larger app you might have:
  - /api/space
  - /api/projects
  - /api/auth
*/
app.use("/api/space", spaceRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
