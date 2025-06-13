import Link from "next/link";

const navList = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Shadcn/ui",
    link: "/shadcn",
  },
  {
    text: "Ant Design",
    link: "/antd",
  },
  {
    text: "Material UI",
    link: "/mui",
  },
];

export default function Nav() {
  return (
    <div className="flex justify-center gap-4 w-full p-4">
      {navList.map(({ text, link }) => (
        <Link
          key={link}
          href={link}
          className="py-2 px-4 rounded-3xl border border-zinc-200"
        >
          <div className="text-sm text-zinc-600">{text}</div>
        </Link>
      ))}
    </div>
  );
}
