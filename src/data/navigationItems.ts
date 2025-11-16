import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  LayersIcon,
  LanguagesIcon,
  FunIcon,
  ContactIcon,
  ResumeIcon,
} from "../components/ui/icons";

export const navigationItems = [
  {
    id: "home",
    path: "/",
    label: "Home",
    icon: HomeIcon,
    description: "Welcome & overview",
  },
  {
    id: "aboutMe",
    path: "/about_me",
    label: "About Me",
    icon: UserIcon,
    description: "My journey & background",
  },
  {
    id: "projects",
    path: "/projects",
    label: "Projects",
    icon: BriefcaseIcon,
    description: "15+ years of work",
  },
  {
    id: "skills",
    path: "/skills",
    label: "Skills",
    icon: LayersIcon,
    description: "Technical expertise",
  },
  {
    id: "languages",
    path: "/languages",
    label: "Languages",
    icon: LanguagesIcon,
    description: "4 languages",
  },
  {
    id: "beyondCode",
    path: "/beyond_code",
    label: "Beyond Code",
    icon: FunIcon,
    description: "Personal interests",
  },
  {
    id: "contact",
    path: "/contact",
    label: "Contact",
    icon: ContactIcon,
    description: "Get in touch",
  },
  {
    id: "resume",
    path: "/resume",
    label: "Resume",
    icon: ResumeIcon,
    description: "Download CV",
  },
];
