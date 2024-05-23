const expertise = [
    {
        id: 0,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Canva, and Adobe Illustrator. Through different intern , I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 1,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Game Development',
        desc: 'I have experience in game development using Unity and C#. I have developed interactive games and simulations, including 2D and 3D games. My knowledge of game design principles and programming allows me to create engaging and immersive experiences for users.',
    },

    {
        id: 5,
        title: 'Backend Development',
        desc: 'I have experience in backend development using Node.js, Express.js, and MongoDB. I can build RESTful APIs, manage databases, and handle server-side logic. My backend development skills enable me to create scalable and secure web applications that meet the needs of clients and users.',
    },
    {
        id: 6,
        title: 'Frontend Development',
        desc: 'I am proficient in frontend development using React.js, Next.js, and TypeScript. I can create responsive and interactive user interfaces that enhance the user experience. My frontend development skills allow me to build modern and visually appealing web applications that drive user engagement and satisfaction.',
    },
    {
        id: 7,
        title: 'Database Management',
        desc: 'I have experience in database management using MongoDB and MySQL. I can design and implement database schemas, perform data manipulation, and optimize database performance. My database management skills ensure data integrity, security, and efficiency in software applications.',
    },
    
    ]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
