import { NextApiRequest, NextApiResponse } from "next";

type PortoType = {
  data: {
    id: number;
    title: string;
    type: string;
    image: string;
    role: string;
    link: string;
  }[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PortoType>
) {
  const data = [
    {
      id: 1,
      title: "Rebello Website",
      type: "Website Development",
      image: "-",
      role: "Fullstack Developer",
      link: "#",
    },
    {
      id: 2,
      title: "PBB Tegal Panjang",
      type: "Website Development",
      image: "-",
      role: "Fullstack Developer",
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Apps Easy Laundry",
      type: "Mobile Development",
      image: "-",
      role: "Mobile Developer",
      link: "#",
    },
    {
      id: 4,
      title: "Siloka Admin Pajak Bumi Bangunan",
      type: "Website Development",
      image: "-",
      role: "Fullstack Developer",
      link: "#",
    },
    {
      id: 5,
      title: "Pamdes Admin Sindangsari",
      type: "Website Development",
      image: "-",
      role: "Fullstack Developer",
      link: "#",
    },
    {
      id: 6,
      title: "Multipilar Website Company",
      type: "Website Development",
      image: "-",
      role: "Fullstack Developer",
      link: "#",
    },
    {
      id: 7,
      title: "Pamdes Sindangsari Mobile Apps",
      type: "Mobile Development",
      image: "-",
      role: "Mobile developer",
      link: "#",
    },
    {
      id: 8,
      title: "Website BPR Purwakarta",
      type: "Website Development",
      image: "-",
      role: "Fullstack Developer",
      link: "#",
    },
    {
      id: 9,
      title: "Jalin.co.id",
      type: "Website Development",
      image: "-",
      role: "Product Development",
      link: "#",
    },
    {
      id: 10,
      title: "Indonesia Forum Website",
      type: "Website Development",
      image: "-",
      role: "Project Manager",
      link: "#",
    },
    {
      id: 11,
      title: "Digitrain Website LMS ",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
    {
      id: 12,
      title: "Japan Halal Website E-commerce",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
    {
      id: 13,
      title: "Sariraya Back Office Website",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
    {
      id: 14,
      title: "Kampung Todo Information System Website",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
    {
      id: 15,
      title: "Fiberzone.id",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
    {
      id: 16,
      title: "varnion.com",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
    {
      id: 17,
      title: "Varnion Website Builder",
      type: "Website Development",
      image: "-",
      role: "Fullstack developer",
      link: "#",
    },
  ];
  res.status(200).json({ data: data });
}
