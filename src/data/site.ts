export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status?: string;
  awards?: string[];
  description: string;
  website?: string;
  paper?: string;
  ieee?: string;
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
  details?: string;
  href?: string;
  linkLabel?: string;
}

export interface TimelineItem {
  title: string;
  period: string;
  organization: string;
  detail?: string;
}

export const people: Record<string, string> = {
  "Constantinos Chamzas": "https://cchamzas.com/",
  "Zhuoyun Zhong": "https://zhuoyunzhong.github.io/"
};

const peoplePattern = new RegExp(`(${Object.keys(people).join("|")})`);

// Splits text into plain parts and the names in `people`, so names can be rendered as links.
export function linkPeople(text: string): { text: string; href?: string }[] {
  return text.split(peoplePattern).filter(Boolean).map((part) => ({ text: part, href: people[part] }));
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
  },
  {
    title: "High School Diploma in Mathematics and Physics",
    organization: "National Organization for Development of Exceptional Talents (NODET)",
    period: "Sep 2014–Jul 2018",
    detail: "GPA 19.01/20 (4.0/4.0)"
  }
];

export const research: TimelineItem[] = [
  {
    title: "Research Assistant",
    organization: "ELPIS Lab · Worcester Polytechnic Institute",
    period: "Aug 2024–present",
    detail: "Learning dynamics for manipulation and motion planning · Advisor: Prof. Constantinos Chamzas"
  },
  {
    title: "Research Assistant",
    organization: "Mechatronics Laboratory · Iran University of Science and Technology",
    period: "Sep 2021–Jul 2024",
    detail: "Simulation and construction of legged robots · Advisor: Prof. Mohammad Shahbazi"
  }
];
export const work: TimelineItem[] = [
  {
    title: "Teaching Assistant",
    organization: "Worcester Polytechnic Institute",
    period: "Aug 2025–May 2026",
    detail: "Motion Planning and Machine Learning for Robotics · Prof. Constantinos Chamzas"
  },
  {
    title: "Teaching Assistant",
    organization: "Worcester Polytechnic Institute",
    period: "Jan–May 2025",
    detail: "Mechanical Applications in Robotics and Sensing and Perception in Robotics · Prof. A. Rosendo and Prof. G. Lewin"
  },
  {
    title: "Teaching Assistant",
    organization: "Iran University of Science and Technology",
    period: "Sep 2023–Feb 2024",
    detail: "Fundamentals of Computer Programming · Prof. Mohammad Shahbazi"
  },
  {
    title: "Teaching Assistant",
    organization: "Iran University of Science and Technology",
    period: "Sep 2022–Feb 2023",
    detail: "Vectorial Dynamics and Dynamics of Machinery · Prof. S. Khanmirza and Prof. S. Asiaei"
  },
  {
    title: "High School Physics Teacher",
    organization: "National Organization for Development of Exceptional Talents (NODET)",
    period: "Sep 2021–May 2024"
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
  { title: "Best Student Paper Award · HRF 2026", organization: "Hellenic Robotics Forum (HRF)", year: "2026", detail: "For ActivePusher." },
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
    description: "Manipulating previously unseen objects remains challenging, as their dynamics depend on latent physical properties, such as friction and mass distribution, that cannot be inferred from perception alone. Prior experience across objects can provide an initial estimate of unseen object dynamics, but this estimate remains uncertain and can degrade further during sim-to-real transfer. Adapting the dynamics through interaction can progressively refine the estimation, however, updating the model may invalidate the planned trajectory. Successful and efficient manipulation therefore requires both rapid dynamics adaptation and a planning strategy that can incorporate this evolution. In this work, we introduce MetaPusher, a meta-learning and adaptive planning framework for nonprehensile manipulation of unseen objects without prior object-specific interactions. A meta-learned dynamics model rapidly adapts from interactions during task execution, while an adaptive kinodynamic planner updates long-horizon plans by reusing and refining its existing search tree. This coupling enables manipulation and adaptation without a separate data collection phase. We evaluate MetaPusher on unseen objects in simulation and in sim-to-real scenarios, comparing against fine-tuning and active learning methods, MPPI-based control, and a reinforcement learning policy. It achieves lower prediction error and improves task success rate by up to 20%.",
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
    website: "https://elpislab.org/projects/aura/",
    description: "Sampling-based motion planners offer a practical and scalable approach to kinodynamic motion planning, notably for high-dimensional, underactuated, or non-holonomic systems. However, these planners are typically used offline, requiring execution to begin only after the trajectory has been computed. In addition, the planned trajectory may not be accurately tracked in the presence of motion uncertainty, leading to deviations from the nominal solution. In this work, these limitations were addressed within a unified framework, AURA, an asymptotically-optimal meta-planner framework that improves both path quality and tracking performance during execution. In addition to the main execution thread, this framework comprises a replanning method that continuously explores the state space and refines the trajectory during execution, and an optimization process that refines future control inputs to reduce tracking error. Together, these components enable AURA to leverage asymptotically optimal planning online while improving execution accuracy under motion uncertainty. The proposed approach is evaluated in both simulation and real-world environments across multiple systems, demonstrating consistent improvements in trajectory quality, tracking accuracy, and overall performance compared with baselines.",
    paper: "https://elpislab.org/assets/pdf/golestaneh2026aura.pdf",
    ieee: "https://ieeexplore.ieee.org/document/11743858",
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
    website: "https://elpislab.org/projects/kite/",
    description: "In many real-world robotic tasks, robots must generate dynamically feasible motions that reliably reach desired goals even under uncertainty. Yet existing sampling-based kinodynamic planners typically optimize accumulated trajectory costs and treat goal reaching as a feasibility check, rather than explicitly optimizing terminal-state quality, such as goal preference or goal-reaching reliability. In this work, we introduce a terminal-cost formulation for kinodynamic planning that allows terminal-state quality to be optimized alongside accumulated trajectory cost. We prove that AO-RRT, an asymptotically optimal kinodynamic planner, preserves its asymptotic optimality under this augmented objective. We further extend the formulation to belief space and prove that minimizing the Wasserstein distance between the terminal belief and the goal improves a lower bound on the probability of reaching the goal region. The resulting planner, KiTe, uses this terminal-cost objective to encode goal preferences and improve reliability under uncertainty. To support systems without analytical uncertainty models, we learn dynamics and process uncertainty directly from data and integrate the learned belief dynamics into planning. Experiments on Flappy Bird, Car Parking, and Planar Pushing show that KiTe consistently improves goal-reaching success under uncertainty. Real-world Planar Pushing experiments further demonstrate that KiTe can plan effectively with learned dynamics and uncertainty. Source code is available at https://github.com/elpis-lab/KiTe.",
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
    awards: ["ICRA 2026 Best Student Paper Award", "HRF 2026 Best Student Paper Award"],
    website: "https://elpislab.org/projects/activepusher/",
    description: "Planning with learned dynamics models offers a promising approach toward versatile real-world manipulation, particularly in nonprehensile settings such as pushing or rolling, where accurate analytical models are difficult to obtain. However, collecting training data for learning-based methods can be costly and inefficient, as it often relies on randomly sampled interactions that are not necessarily the most informative. Furthermore, learned models tend to exhibit high uncertainty in underexplored regions of the skill space, undermining the reliability of long-horizon planning. To address these challenges, we propose ActivePusher, a novel framework that combines residual-physics modeling with uncertainty-based active learning, to focus data acquisition on the most informative skill parameters. Additionally, ActivePusher seamlessly integrates with model-based kinodynamic planners, leveraging uncertainty estimates to bias control sampling toward more reliable actions. We evaluate our approach in both simulation and real-world environments, and demonstrate that it consistently improves data efficiency and achieves higher planning success rates in comparison to baseline methods. The source code is available at https://github.com/elpis-lab/ActivePusher.",
    ieee: "https://ieeexplore.ieee.org/document/11696785",
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
    description: "Accurate phase estimation in legged robots, determining whether legs are swinging or in ground contact, is crucial for stability and performance, especially on uneven terrain and with dynamic obstacles. This paper presents a novel approach to phase estimation using signal imaging and lightweight deep neural networks. Time-series data from an inertial measurement unit (IMU) and joint encoders are fused into phase images in real-time using Stacked Channels Image (SCI) and Recurrence Plot (RP) encoding methods. These phase images are then processed for phase classification, eliminating the need for force measurement sensors, which are prone to noise and failure. Extensive experiments on a 3-DoF hopping robot leg, with contact sensor data as ground truth, show that EfficientNet-B0 deep model achieves 98.97% accuracy with RP imaging and an optimized inference time of 2 milliseconds. Comparative validation on an independent dataset from the MIT Mini Cheetah traversing eight terrains demonstrates our model’s generalizability. The EfficientNet-RP-Mode1 configuration achieves 96.51% accuracy, outperforming traditional model-based methods and matching or surpassing other deep learning-based approaches, despite requiring fewer sensor inputs. This research highlights the efficiency, robustness, and adaptability of the proposed method, offering a reliable solution for phase estimation in diverse robotic platforms and environments.",
    doi: "https://doi.org/10.1109/ACCESS.2025.3549165",
    bibtex: "@article{yazdipaz2025phase,\n  title={Robust and Efficient Phase Estimation in Legged Robots via Signal Imaging and Deep Neural Networks},\n  author={Yazdipaz, Kamyab and Kohli, Nooshin and Golestaneh, Seyed Ali and Shahbazi, Mohammad},\n  journal={IEEE Access},\n  volume={13},\n  pages={49018--49029},\n  year={2025},\n  doi={10.1109/ACCESS.2025.3549165}\n}"
  }
];

export const reviewing = [
  { venue: "IROS", name: "IEEE/RSJ International Conference on Intelligent Robots and Systems" },
  { venue: "ICRA", name: "IEEE International Conference on Robotics and Automation" },
  { venue: "RA-L", name: "IEEE Robotics and Automation Letters" }
];

export const news: NewsItem[] = [
  { date: "Sep 28, 2026", title: "AURA accepted to IEEE Robotics and Automation Letters (RA-L)", text: "Uncertainty-robust replanning for kinodynamic systems.", details: "Our paper AURA, with Zhuoyun Zhong, Donghyung Lee, and Prof. Constantinos Chamzas, has been accepted to IEEE Robotics and Automation Letters. AURA is an asymptotically optimal meta-planner that keeps refining a kinodynamic trajectory while the robot executes it, so replanning happens together with execution instead of only after the robot drifts off its plan.", href: "https://elpislab.org/projects/aura/", linkLabel: "Project page" },
  { date: "Aug 28, 2026", title: "Received the Glenn Yee Travel Award", text: "Robotics Engineering Graduate Student travel award at WPI.", details: "I received the Glenn Yee Travel Award, a travel award for Robotics Engineering graduate students at WPI. I'm grateful to the department for supporting me in sharing our research." },
  { date: "Jul 2, 2026", title: "ActivePusher won the Best Student Paper Award at the Hellenic Robotics Forum (HRF) 2026", details: "A month after ICRA, ActivePusher received a second Best Student Paper Award, this time at the Hellenic Robotics Forum 2026. I'm very happy to share this recognition with Zhuoyun Zhong and Prof. Constantinos Chamzas.", href: "https://www.linkedin.com/posts/constantinos-chamzas-33606284_icra2026-icra2026-hrf2026-activity-7485752943821115392-v_rr", linkLabel: "LinkedIn post" },
  { date: "Jun 16, 2026", title: "Presented AURA as an oral talk at NEMS 2026", details: "At the New England Manipulation Symposium (NEMS) 2026, I gave an oral presentation of our paper AURA, a meta-planner that refines kinodynamic trajectories during execution to reduce tracking error.", href: "https://www.linkedin.com/posts/aligolestaneh_motionplanning-manipulation-nems-activity-7475580007847923712-5aUQ", linkLabel: "LinkedIn post" },
  { date: "Jun 4, 2026", title: "ActivePusher won the Best Student Paper Award at ICRA 2026", details: "ActivePusher won the Best Student Paper Award at ICRA 2026. Huge thanks to Zhuoyun Zhong and our advisor, Prof. Constantinos Chamzas.", href: "https://www.linkedin.com/posts/constantinos-chamzas-33606284_icra2026-icra2026-activity-7468413788321656832-jFrq", linkLabel: "LinkedIn post" },
  { date: "May 30, 2026", title: "ActivePusher accepted to ICRA 2026 and nominated for the Best Paper Award in Planning and Control", details: "Our paper ActivePusher, with Zhuoyun Zhong and Prof. Constantinos Chamzas, was accepted to ICRA 2026 and nominated for the Best Paper Award in the Planning and Control category. We also released the code on GitHub.", href: "https://www.linkedin.com/posts/constantinos-chamzas-33606284_github-elpis-labactivepusher-implementation-activity-7464819832878911488--Vlg", linkLabel: "LinkedIn post" },
  { date: "Jun 21, 2025", title: "Presented the ActivePusher poster at an RSS 2025 workshop", text: "Workshop paper on active learning for nonprehensile manipulation.", details: "I presented an early version of ActivePusher as a poster at a workshop at RSS 2025 in Los Angeles. The workshop paper focused on active learning for nonprehensile manipulation.", href: "https://www.linkedin.com/posts/constantinos-chamzas-33606284_elpislab-is-at-rss-2025-in-la-zhuoyun-activity-7342210979482464256-Jv8R", linkLabel: "LinkedIn post" },
  { date: "Aug 15, 2024", title: "Joined the ELPIS Lab at WPI as a Ph.D. student", text: "Advised by Prof. Constantinos Chamzas.", details: "I started my Ph.D. in Robotics Engineering at WPI and joined the ELPIS Lab, advised by Prof. Constantinos Chamzas. My research focuses on motion planning, robot learning, and nonprehensile manipulation under uncertainty.", href: "https://elpislab.org/", linkLabel: "ELPIS Lab" }
];
