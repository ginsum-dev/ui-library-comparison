import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function MUILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
