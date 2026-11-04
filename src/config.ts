export const config = {
    developer: {
        name: "Krish",
        fullName: "Krish Oswal",
        initials: "KO",
        title: "AI/ML Engineer & Software Developer",
        description: "Computer Science student at Vishwakarma University building machine-learning systems, data pipelines and full-stack applications. I like turning messy real-world data into products people can use."
    },
    social: {
        github: "https://github.com/KrishOswal18",
        email: "krishoswal1811@gmail.com",
        location: "Pune, India"
    },
    about: {
        title: "About Me",
        description: "I'm a final-year B.Tech Computer Science student at Vishwakarma University, Pune, focused on machine learning and data-driven software. I've built recommendation engines, large-scale data cleaning pipelines and geospatial APIs, and I enjoy the full path from raw CSV to a working product. I practise data structures and algorithms daily on LeetCode and HackerRank, and I'm looking for software engineering roles where I can ship real systems at scale."
    },
    experiences: [
        {
            position: "Final-Year Project: GeoTrade",
            company: "Vishwakarma University",
            period: "2026 - 2027",
            location: "Pune, India",
            description: "Building a supply-chain exposure map that places 23,020 public companies on a 3D globe, where every dependency will be backed by a cited sentence from company filings. Python, FastAPI, PostgreSQL/PostGIS, React.",
            responsibilities: [],
            technologies: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "NLP", "React"]
        },
        {
            position: "Machine Learning & Data Projects",
            company: "Self-directed",
            period: "2025",
            location: "Pune, India",
            description: "Built a content-based movie recommender on 9,737 titles and a 19-season IPL analysis with a chase win model, covering cleaning, feature engineering, statistical testing, modelling and dashboards.",
            responsibilities: [],
            technologies: ["Python", "Scikit-learn", "Pandas", "DuckDB", "SQL", "React"]
        },
        {
            position: "Full-Stack Development",
            company: "Projects",
            period: "2025",
            location: "Pune, India",
            description: "Built a Spring Boot campus placement portal with role-based access, a REST API, 14 automated tests and a Docker plus CI pipeline.",
            responsibilities: [],
            technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Docker", "GitHub Actions"]
        },
        {
            position: "B.Tech, Computer Science & Engineering",
            company: "Vishwakarma University, Pune",
            period: "2022 - 2027",
            location: "Pune, India",
            description: "Coursework in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning and Deep Learning. Certified in Python and DSA (Tutedude), SQL (HackerRank) and Responsive Web Design (freeCodeCamp).",
            responsibilities: [],
            technologies: ["DSA", "DBMS", "OS", "Machine Learning"]
        },
        {
            position: "HSC, PCM with Computer Science",
            company: "St. Vincent's High School and Junior College",
            period: "2020 - 2022",
            location: "Pune, India",
            description: "Completed higher secondary education in Physics, Chemistry, Mathematics and Computer Science, where I wrote my first programs.",
            responsibilities: [],
            technologies: ["C++", "Mathematics"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "GeoTrade",
            category: "Data Engineering / Backend",
            technologies: "Python, FastAPI, PostgreSQL, PostGIS, React, TypeScript, Three.js, Docker",
            image: "/images/geotrade.svg",
            description: "A supply-chain exposure map on a 3D globe. Cleaned 29,442 raw listings from 7 exchange files into 23,020 deduplicated, geolocated companies across 90 HQ countries, stored in a 25-table PostGIS schema behind a FastAPI read API with p95 under 60 ms. Final-year project.",
            link: "https://geotrade-atlas.vercel.app"
        },
        {
            id: 2,
            title: "IPL Analytics",
            category: "Data Analysis / ML",
            technologies: "Python, Pandas, DuckDB, SQL, SciPy, Scikit-learn, React, Recharts",
            image: "/images/ipl-analytics.svg",
            description: "19 seasons, 1,243 matches and 295,732 deliveries. Tested the toss myth properly (51.4%, p = 0.35, no real edge) and built a ball by ball chase win model that scores 83.6% on two unseen seasons. 21 charts, 63 tests and an interactive dashboard.",
            link: "https://iplanalytics-ko.vercel.app"
        },
        {
            id: 3,
            title: "Serverless Movie Recommender",
            category: "AWS / Machine Learning",
            technologies: "Python, AWS Lambda, API Gateway, S3, DynamoDB, AWS SAM, Anthropic API, React",
            image: "/images/movie-recommender.svg",
            description: "Puts a movie you actually liked in your top 10 for 68% of test users, up from 18%. Runs as a serverless API on AWS with a hand-written trie for autocomplete and an LRU cache (75% hit rate), plus plain-English search through the Anthropic API that only returns real movies.",
            link: "https://movierecommender-ko.vercel.app"
        },
        {
            id: 4,
            title: "Placement Portal",
            category: "Full-Stack / Java",
            technologies: "Java 17, Spring Boot 3, Spring Data JPA, MySQL, Thymeleaf, JUnit 5, Docker, GitHub Actions",
            image: "/images/placement-portal.svg",
            description: "Campus placement system with 6 normalised tables and 4 eligibility rules enforced in the service layer, a read-only REST API answering in 2 to 6 ms, 14 JUnit and MockMvc tests, and a Docker plus GitHub Actions pipeline.",
            link: "https://github.com/priyankabana/placement-portal"
        }
    ],
    contact: {
        email: "krishoswal1811@gmail.com",
        github: "https://github.com/KrishOswal18",
        linkedin: "https://www.linkedin.com/in/krish-oswal-197999346/",
        resume: "/Krish_Oswal_Resume.pdf"
    },
    skills: {
        develop: {
            title: "AI / ML ENGINEER",
            description: "Machine learning, NLP & data pipelines",
            details: "Building recommendation systems, NLP extraction and data-cleaning pipelines with Python. Comfortable across the workflow: EDA, feature engineering, modelling, evaluation and communicating results.",
            tools: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "NLP", "Matplotlib", "Seaborn", "Jupyter"]
        },
        design: {
            title: "SOFTWARE DEV",
            description: "APIs, databases & full-stack apps",
            details: "Designing relational schemas and REST APIs, and building web applications with Java, Python and TypeScript. Strong focus on data structures, algorithms and clean, tested code.",
            tools: ["Java", "C++", "SQL", "FastAPI", "Spring Boot", "PostgreSQL", "MySQL", "AWS Lambda", "DynamoDB", "Docker", "Git"]
        }
    }
};
