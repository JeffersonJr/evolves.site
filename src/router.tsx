import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { locationRewrite } from "./lib/i18n-urls";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    trailingSlash: "never",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    rewrite: locationRewrite,
  });

  return router;
};
