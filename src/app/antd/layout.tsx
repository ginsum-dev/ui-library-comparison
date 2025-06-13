import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function AntDLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
