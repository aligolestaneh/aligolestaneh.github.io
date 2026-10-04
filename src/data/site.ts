export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status?: string;
  description: string;
  paper?: string;
  arxiv?: string;
  doi?: string;
  code?: string;
  video?: string;
  image?: string;
  imageAlt?: string;
  bibtex: string;
}

export interface NewsItem {
  date: string;
  title: string;
  text?: string;
  href?: string;
  linkLabel?: string;
}

export interface TimelineItem {
  title: string;
  period: string;
  organization: string;
  detail?: string;
}

export const site = {
  name: "Ali Golestaneh",
  publicationName: "Seyedali Golestaneh",
  role: "Robotics Ph.D. student and research assistant",
  affiliation: "Worcester Polytechnic Institute · ELPIS Lab",
  email: "sgolestaneh@wpi.edu",
  scholarLabel: "Google Scholar profile",
  githubLabel: "GitHub profile",
  url: "https://aligolestaneh.com",
  portrait: "https://elpislab.org/assets/img/people/Ali.jpg",
  portraitAlt: "Ali Golestaneh, Robotics Ph.D. student at Worcester Polytechnic Institute",
  introduction: "I study motion and kinodynamic planning for robot manipulation under uncertainty, including learning object dynamics and adapting plans as conditions change.",
  scholarUrl: "https://scholar.google.com/citations?user=OVpKMqwAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/aligolestaneh",
  githubUrl: "https://github.com/aligolestaneh",
  labUrl: "https://elpislab.org/",
  wpiUrl: "https://www.wpi.edu/"
};

export const education: TimelineItem[] = [
  {
    title: "Ph.D. in Robotics Engineering",
    organization: "Worcester Polytechnic Institute",
    period: "Aug 2024–present",
    detail: "ELPIS Lab · GPA 4.0/4.0 across the first 36 credits"
  },
  {
    title: "B.S. in Mechanical Engineering",
    organization: "Iran University of Science and Technology",
    period: "Sep 2018–Sep 2023",
    detail: "GPA 16.12/20 (3.34/4.0)"
  }
];

export const experience: TimelineItem[] = [
  {
    title: "Research Assistant",
    organization: "ELPIS Lab · Worcester Polytechnic Institute",
    period: "Aug 2024–present",
    detail: "Learning dynamics for manipulation and motion planning."
  },
  {
    title: "Research Assistant",
    organization: "Mechatronics Laboratory · IUST",
    period: "Sep 2021–Jul 2024",
    detail: "Simulation and construction of legged robots."
  },
  {
    title: "Mechanical Engineering Intern",
    organization: "Rahe Andisheh Company",
    period: "Jul–Sep 2020",
    detail: "Reverse engineering, mechanical design, component selection, and prototype testing."
  }
];

export const teachingExperience: TimelineItem[] = [
  {
    title: "Teaching Assistant · Motion Planning and Machine Learning for Robotics",
    organization: "Worcester Polytechnic Institute",
    period: "Aug 2025–May 2026"
  },
  {
    title: "Teaching Assistant · Mechanical Applications in Robotics; Sensing and Perception in Robotics",
    organization: "Worcester Polytechnic Institute",
    period: "Jan–May 2025"
  },
  {
    title: "Teaching Assistant · Fundamentals of Computer Programming",
    organization: "Iran University of Science and Technology",
    period: "Sep 2023–Feb 2024"
  },
  {
    title: "Teaching Assistant · Vectorial Dynamics and Dynamics of Machinery",
    organization: "Iran University of Science and Technology",
    period: "Sep 2022–Feb 2023"
  },
  {
    title: "Physics Teacher",
    organization: "NODET High School",
    period: "Sep 2021–May 2024"
  }
];

export const awards = [
  { title: "Best Student Paper Award · ICRA 2026", organization: "IEEE International Conference on Robotics and Automation (ICRA)", year: "2026", detail: "For ActivePusher." },
  { title: "Best Student Paper Award · HRF 2026", organization: "Hellenic Robotics Forum (HRF)", year: "2026" },
  { title: "Glenn Yee Travel Award", organization: "Robotics Engineering Graduate Student · WPI", year: "2026" },
  { title: "Top 10% among Mechanical Engineering students", organization: "Iran University of Science and Technology", year: "2022" },
  { title: "Top 0.75% in the National University Entrance Exam", organization: "Iran · 144,437 participants", year: "2018" },
  { title: "4th place · Soccer 2D Simulation", organization: "RoboCup Iran Open International Competitions", year: "2014" }
];

export const skills = [
  "C++", "Python", "MATLAB", "ROS", "Linux", "MuJoCo", "Genesis", "SolidWorks", "CATIA", "ADAMS", "Arduino", "LaTeX"
];

export const publications: Publication[] = [
  {
    id: "metapusher",
    title: "MetaPusher: Meta Learning and Planning for Nonprehensile Manipulation of Unseen Objects with Rapid Online Adaption",
    authors: ["Donghyung Lee", "Seyedali Golestaneh", "Jaskrit Singh", "Zhuoyun Zhong", "Athanasios Kapoutsis", "Constantinos Chamzas"],
    venue: "arXiv preprint",
    year: 2026,
    status: "Preprint",
    description: "Manipulating previously unseen objects is difficult because friction and mass distribution are hidden and cannot be recovered reliably from vision; models transferred across objects can therefore start with substantial error. MetaPusher uses cross-object meta-learning to initialize object dynamics, then updates that model from interaction while a push is underway. Its adaptive kinodynamic planner reuses and refines the search tree as dynamics change, allowing planning and learning to proceed together without a separate data-collection stage. Simulated and sim-to-real experiments on unseen objects compare the method with fine-tuning, active learning, MPPI, and reinforcement learning; the reported results show lower prediction error and up to 20% higher task success.",
    arxiv: "https://arxiv.org/abs/2609.21122",
    image: "/assets/papers/metapusher-fig1.webp",
    imageAlt: "MetaPusher method overview showing meta-training, deployment on a new object, prior knowledge, and online adaptation",
    bibtex: "@article{lee2026metapusher,\n  title={MetaPusher: Meta Learning and Planning for Nonprehensile Manipulation of Unseen Objects with Rapid Online Adaption},\n  author={Lee, Donghyung and Golestaneh, Seyedali and Singh, Jaskrit and Zhong, Zhuoyun and Kapoutsis, Athanasios and Chamzas, Constantinos},\n  journal={arXiv preprint arXiv:2609.21122},\n  year={2026}\n}"
  },
  {
    id: "aura",
    title: "AURA: Asymptotically Optimal Uncertainty-Robust Replanning Algorithm for Kinodynamic Systems",
    authors: ["Seyedali Golestaneh", "Zhuoyun Zhong", "Donghyung Lee", "Constantinos Chamzas"],
    venue: "IEEE Robotics and Automation Letters",
    year: 2026,
    status: "Accepted · Sep 2026",
    description: "Sampling-based kinodynamic planners support high-dimensional, underactuated, and nonholonomic robots, but are generally used offline. During execution, motion uncertainty can drive a robot away from its planned trajectory. AURA is an asymptotically optimal meta-planner that continues exploring the state space and refining a trajectory online while optimizing future control inputs to reduce tracking error. This couples replanning with execution instead of waiting for a deviation before planning again. Simulated and real-world evaluations across multiple systems report improved trajectory quality, tracking accuracy, and overall performance compared with the evaluated baselines.",
    paper: "https://elpislab.org/assets/pdf/golestaneh2026aura.pdf",
    arxiv: "https://arxiv.org/abs/2605.27699",
    code: "https://github.com/elpis-lab/AURA",
    image: "/assets/papers/aura-fig1.webp",
    imageAlt: "AURA illustration of a robot pushing an object, an execution deviation, and replanned paths",
    bibtex: "@article{golestaneh2026aura,\n  title={AURA: Asymptotically Optimal Uncertainty-Robust Replanning Algorithm for Kinodynamic Systems},\n  author={Golestaneh, Seyedali and Zhong, Zhuoyun and Lee, Donghyung and Chamzas, Constantinos},\n  journal={IEEE Robotics and Automation Letters},\n  year={2026}\n}"
  },
  {
    id: "kite",
    title: "Terminal Matters: Kinodynamic Planning with a Terminal Cost and Learned Uncertainty in Belief State-Cost Space",
    authors: ["Zhuoyun Zhong", "Seyedali Golestaneh", "Constantinos Chamzas"],
    venue: "arXiv preprint",
    year: 2026,
    status: "Preprint · KiTe",
    description: "Adds terminal-state objectives and learned uncertainty to kinodynamic planning, including belief-space goal preferences.",
    arxiv: "https://arxiv.org/abs/2605.09046",
    code: "https://github.com/elpis-lab/KiTe",
    image: "/assets/papers/kite-fig1.webp",
    imageAlt: "Terminal Matters (KiTe) examples of planar pushing and car parking",
    bibtex: "@article{zhong2026terminal,\n  title={Terminal Matters: Kinodynamic Planning with a Terminal Cost and Learned Uncertainty in Belief State-Cost Space},\n  author={Zhong, Zhuoyun and Golestaneh, Seyedali and Chamzas, Constantinos},\n  journal={arXiv preprint arXiv:2605.09046},\n  year={2026}\n}"
  },
  {
    id: "activepusher",
    title: "ActivePusher: Active Learning and Planning with Residual Physics for Nonprehensile Manipulation",
    authors: ["Zhuoyun Zhong", "Seyedali Golestaneh", "Constantinos Chamzas"],
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2026,
    status: "ICRA 2026 Best Student Paper Award",
    description: "Nonprehensile skills such as pushing and rolling can support versatile manipulation, but learning their dynamics from scratch is costly and random interaction can waste trials. ActivePusher combines a residual-physics dynamics model with uncertainty-aware active learning to select informative skill parameters for data collection. It then connects the learned model to kinodynamic planners, using uncertainty to bias control sampling toward reliable actions over long-horizon plans. Simulation and real-robot experiments evaluate learning efficiency and manipulation performance; compared with the evaluated baselines, the method uses interaction data more effectively and achieves higher planning success.",
    arxiv: "https://arxiv.org/abs/2506.04646",
    code: "https://github.com/elpis-lab/ActivePusher",
    video: "https://www.youtube.com/watch?v=lxvyy61g0CY",
    image: "/assets/papers/activepusher-fig1.webp",
    imageAlt: "ActivePusher overview of active learning and planning for nonprehensile manipulation",
    bibtex: "@inproceedings{zhong2026activepusher,\n  title={ActivePusher: Active Learning and Planning with Residual Physics for Nonprehensile Manipulation},\n  author={Zhong, Zhuoyun and Golestaneh, Seyedali and Chamzas, Constantinos},\n  booktitle={2026 IEEE International Conference on Robotics and Automation (ICRA)},\n  year={2026}\n}"
  },
  {
    id: "phase-estimation",
    title: "Robust and Efficient Phase Estimation in Legged Robots via Signal Imaging and Deep Neural Networks",
    authors: ["Kamyab Yazdipaz", "Nooshin Kohli", "Seyed Ali Golestaneh", "Mohammad Shahbazi"],
    venue: "IEEE Access, vol. 13, pp. 49018–49029",
    year: 2025,
    status: "Journal article",
    description: "Uses signal-image representations and neural networks to estimate leg phase from proprioceptive measurements.",
    doi: "https://doi.org/10.1109/ACCESS.2025.3549165",
    bibtex: "@article{yazdipaz2025phase,\n  title={Robust and Efficient Phase Estimation in Legged Robots via Signal Imaging and Deep Neural Networks},\n  author={Yazdipaz, Kamyab and Kohli, Nooshin and Golestaneh, Seyed Ali and Shahbazi, Mohammad},\n  journal={IEEE Access},\n  volume={13},\n  pages={49018--49029},\n  year={2025},\n  doi={10.1109/ACCESS.2025.3549165}\n}"
  }
];

export const news: NewsItem[] = [
  { date: "September 2026", title: "AURA accepted to IEEE Robotics and Automation Letters", text: "The work studies uncertainty-robust replanning for kinodynamic systems.", href: "https://arxiv.org/abs/2605.27699", linkLabel: "Paper" },
  { date: "September 2026", title: "MetaPusher preprint posted to arXiv", text: "Online adaptation and planning for manipulation of unseen objects.", href: "https://arxiv.org/abs/2609.21122", linkLabel: "Preprint" },
  { date: "2026", title: "ActivePusher receives the ICRA 2026 Best Student Paper Award", text: "The paper combines active learning, residual physics, and planning for nonprehensile manipulation.", href: "https://arxiv.org/abs/2506.04646", linkLabel: "Paper" },
  { date: "2026", title: "Received the HRF 2026 Best Student Paper Award at the Hellenic Robotics Forum" },
  { date: "2026", title: "Received the Glenn Yee Travel Award", text: "Robotics Engineering Graduate Student travel award at WPI." },
  { date: "May 2026", title: "Terminal Matters preprint posted to arXiv", text: "Kinodynamic planning with terminal costs and learned uncertainty.", href: "https://arxiv.org/abs/2605.09046", linkLabel: "Preprint" }
];
