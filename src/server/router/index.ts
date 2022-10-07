// src/server/router/index.ts
import { createRouter } from "./context";
import { guestbookRouter } from "./guestbook";
import superjson from "superjson";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("guestbook.", guestbookRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
