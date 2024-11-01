import { IconType } from "react-icons";
import {
  AiFillHtml5,
  AiOutlineAntDesign,
  AiFillGithub,
  AiFillGitlab,
} from "react-icons/ai";

import {
  BiLogoTypescript,
  BiLogoPython,
  BiLogoPostgresql,
} from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";

import { DiCss3, DiVisualstudio } from "react-icons/di";
import { FaReact, FaTrello, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";

import { PiFileSqlLight } from "react-icons/pi";
import {
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiApachehadoop,
  SiApachespark,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiPostman,
  SiMysql,
  SiApachecassandra,
  SiExpress,
  SiApachekafka,
  SiApacheairflow,
  SiDatabricks,
  SiNumpy,
  SiPowerbi,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export const ToolsAndTechs: Record<string, IconType | string> = {
  HTML: AiFillHtml5,
  CSS: DiCss3,
  JavaScript: IoLogoJavascript,
  TypeScript: BiLogoTypescript,
  Python: BiLogoPython,
  SQL: PiFileSqlLight,

  React: FaReact,
  "Next.JS": TbBrandNextjs,
  "Tailwind CSS": TbBrandTailwind,
  AntDesign: AiOutlineAntDesign,
  Bootstrap: BsBootstrap,
  "Node.JS": FaNodeJs,
  "Express.JS": SiExpress,

  MySQL: SiMysql,
  PostgreSQL: BiLogoPostgresql,
  MongoDB: SiMongodb,
  CassandraDB: SiApachecassandra,

  "Apache Hadoop": SiApachehadoop,
  "Apache Spark": SiApachespark,
  "Apache Kafka": SiApachekafka,
  "Apache Airflow": SiApacheairflow,
  Databricks: SiDatabricks,

  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Power BI": SiPowerbi,
  Matplotlib: "/assets/images/matplotlib.svg",
  Seaborn: "/assets/images/seaborn.svg",

  AWS: FaAws,
  Vercel: SiVercel,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,

  TensorFlow: SiTensorflow,
  "Scikit-learn": SiScikitlearn,

  Trello: FaTrello,
  Git: FaGitAlt,
  Github: AiFillGithub,
  Gitlab: AiFillGitlab,
  VSCode: DiVisualstudio,
  Postman: SiPostman,
};
