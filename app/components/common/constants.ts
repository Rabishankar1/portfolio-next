export const FIRST_NAME = "Rabishankar";
export const LAST_NAME = "Panigrahi";
export const TAG = "Creative Developer";
export const ABOUT_ME = `Hello, I'm Rabishankar, a Software Engineer passionate about merging creativity with technical proficiency. I bring to the table a unique blend of creativity and technical expertise, allowing me to approach problems from different angles and devise innovative solutions. Whether it's developing sleek user interfaces, optimizing processes, or tackling complex algorithms, I'm always up for the challenge. \n

Outside of coding, I'm an avid explorer of all things creative. Whether it's movies, art or painting, I find inspiration in diverse pursuits that fuel my creativity and enrich my perspective as a software engineer. \n

I'm excited to connect with fellow professionals, collaborate on exciting projects, and contribute to meaningful innovations in the world of technology. Let's connect and explore how we can make a difference together.`;
export const GITHUB_LINK = "https://github.com/Rabishankar1";
export const TWITTER_LINK = "https://x.com/Rabi2569";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/rabishankar-6b5158157/";

export const sections = ["about", "experience", "projects"];

class Tech {
  tech_name: string;
  tech_color: string;
  public constructor(tech_name: string, tech_color: string) {
    this.tech_name = tech_name;
    this.tech_color = tech_color;
  }
}

export const TECH_LIST = [
  ["REACT", "#29D8FF"],
  ["NEXT.JS", "#FFFFFF"],
  ["GSAP", "#61DB16"],
  ["THREE.JS", "#000000"],
  ["NODE", "#2B6309"],
  ["MONGO", "#F7A12F"],
  ["EXPRESS", "#2780CF"],
].map((tech) => new Tech(tech[0], tech[1]));

class Experience {
  company_name: string;
  designation: string;
  start_date: Date;
  end_date?: Date | "current";
  location: string;
  description: string;
  logo?: string;
  public constructor(
    company_name: string,
    designation: string,
    start_date: Date,
    end_date: Date | "current",
    location: string,
    description: string,
    logo: string
  ) {
    this.company_name = company_name;
    this.designation = designation;
    this.start_date = start_date;
    this.end_date = end_date;
    this.location = location;
    this.description = description;
    this.logo = logo;
  }
}

export const EXPERIENCE_LIST = [
  [
    "Foundit(formerly Monster)",
    "Software Engineer",
    new Date(2023, 5),
    "current",
    "Bengaluru",
    `Engineered an innovative visual analytics feature within the customer data platform to show employments in a specific graphical form, delivering within strict deadlines.\n
    Designed and implemented a complex visual analytics feature within the customer data platform, achieving project goals within a tight deadline.\n
    Pioneered a feature, ensuring seamless communication capabilities across multiple user interfaces.\n
    Facilitated efficient talent management operations by developing and implementing a dynamic candidate reassignment feature.\n
    Led multiple critical technology projects, focusing on systems improvements, process optimizations, and user engagement enhancements`,
    "/images/companies/foundit_jobs_logo.jpeg",
  ],
  [
    "Basanti Auto Agency",
    "Frontend Developer",
    new Date(2021, 7),
    new Date(2023, 4),
    "Balasore",
    `Contributed to the automobile business of car dealerships which is spread across 14 cities of Northern Odisha.\n
    Built an end-to-end reconciliation framework to fix any leakage of stocks, accessories of Mahindra automotive parts since the business is spread across multiple locations.\n
    Designed and implemented a real-time tracking dashboard with MUI and D3.js for visualizing vehicle parts and accessories, improving inventory management and decision-making.\n
    Created responsive and user-friendly interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal performance for internal tools and customer portals.\n
    Developed a sales performance dashboard and financial reporting interfaces using React and Chart.js, aiding strategic decision-making and financial analysis.\n
    Integrated frontend applications with backend services using RESTful APIs, automating business processes and reducing manual efforts, resulting in increased operational efficiency.
    `,
    "/images/companies/basanti.jpeg",
  ],
  [
    "Aerchain",
    "Frontend Developer Intern",
    new Date(2021, 1),
    new Date(2023, 6),
    "Bengaluru",
    ` Worked in React JS for majorly frontend development tasks.\n
    Created various features and two complete modules \n
    Picked up skills in Frontend technologies and got to apply them`,
    "/images/companies/aerchain_io_logo.jpeg"
  ],
].map(
  (experience: any) =>
    new Experience(
      experience[0],
      experience[1],
      experience[2],
      experience[3],
      experience[4],
      experience[5],
      experience[6]
    )
);

export class Project {
  name: string;
  technologies_used: string[];
  link: string;
  thumbnail: string;
  uuid: string;
  public constructor(
    name: string,
    technologies_used: string[],
    link: string,
    thumbnail: string,
    uuid: string
  ) {
    this.name = name;
    this.technologies_used = technologies_used;
    this.link = link;
    this.thumbnail = thumbnail;
    this.uuid = uuid;
  }
}

export const PROJECTS = [
  [
    "Shopping app",
    [
      "React JS",
      "NodeJS",
      "Express",
      "OAuth",
      "Material UI",
      "Responsive Design",
    ],
    "https://qkart-frontend-rabishankar.netlify.app/",
    "/images/thumbnails/qkart.avif",
    "shopping1",
  ],
  [
    "Video streaming and uploading app",
    ["React", "Javascript", "Emotion styled"],
    "https://rabishankar-xflix.netlify.app",
    "/images/thumbnails/xflix.avif",
    "video1",
  ],
  [
    "Real Estate app",
    ["React", "MaterialUI", "TailwindCSS", "Bootstrap"],
    "https://rabishankar-real-estate.netlify.app/",
    "/images/thumbnails/real_estate.avif",
    "realestate1",
  ],
  [
    "Travel app",
    ["React", "HTML", "Javascript", "Responsive design"],
    "https://rabishankar-travel-app.netlify.app",
    "/images/thumbnails/travel.avif",
    "travel2",
  ],
].map(
  (project: any) =>
    new Project(project[0], project[1], project[2], project[3], project[4])
);
