const express = require('express');
const PORT= process.env.PORT || 3000;
const app = express();
app.set("view engine","ejs");

app.use(express.static("public"));
app.use(express.json());

// Departments data
const departments = [
    {
        id: 'computer-science',
        name: 'Computer Science',
        description: 'Dedicated to providing comprehensive education in computer science, preparing students for successful careers in the tech industry.',
        hod: 'Dr. Evelyn Reed',
        hodQualification: 'Ph.D. in Computer Science',
        hodSpecialization: 'Artificial Intelligence, Machine Learning',
        hodEmail: 'e.reed@college.com',
        hodResearch: 'Neural Networks, Natural Language Processing',
        icon: 'fas fa-laptop-code',
        programs: ['B.Tech in Computer Science', 'M.Tech in Computer Science'],
        faculty: [
            {
                name: 'Dr. Samuel Chen',
                qualification: 'Ph.D. in Cybersecurity',
                specialization: 'Information Security, Cryptography',
                email: 'samuel@college.com',
                research: 'Information Security, Cryptography',
                designation: 'Associate Professor'
            },
            {
                name: 'Dr. Maria Garcia',
                qualification: 'M.S. in Data Science',
                specialization: 'Machine Learning, Data Mining',
                email: 'maria@college.com',
                research: 'Machine Learning, Data Mining',
                designation: 'Assistant Professor'
            }
        ]
    },
    {
        id: 'english',
        name: 'English',
        description: 'Fostering excellence in English literature, language studies, and communication skills.',
        hod: 'Dr. James Wilson',
        hodQualification: 'Ph.D. in English Literature',
        hodSpecialization: 'Modern Literature, Literary Criticism',
        hodEmail: 'j.wilson@college.com',
        hodResearch: 'Contemporary Literature, Digital Humanities',
        icon: 'fas fa-book',
        programs: ['BA in English Literature', 'MA in English'],
        faculty: [
            {
                name: 'Dr. Emma Roberts',
                qualification: 'Ph.D. in Linguistics',
                specialization: 'Applied Linguistics, TESOL',
                email: 'e.roberts@college.com',
                research: 'Language Acquisition, Sociolinguistics',
                designation: 'Associate Professor',
                image: '/assets/faculty/english-faculty1.jpg'
            },
            {
                name: 'Prof. David Thompson',
                qualification: 'M.Phil. in English',
                specialization: 'British Literature, Poetry',
                email: 'd.thompson@college.com',
                research: 'Victorian Literature, Modernist Poetry',
                designation: 'Assistant Professor',
                image: '/assets/faculty/english-faculty2.jpg'
            }
        ]
    },
    {
        id: 'tamil',
        name: 'Tamil',
        description: 'Promoting Tamil language, literature, and cultural studies with modern teaching methodologies.',
        hod: 'Dr. Senthil Kumar',
        hodQualification: 'Ph.D. in Tamil Literature',
        hodSpecialization: 'Classical Tamil Literature, Modern Poetry',
        hodEmail: 's.kumar@college.com',
        hodResearch: 'Sangam Literature, Contemporary Tamil Poetry',
        icon: 'fas fa-language',
        programs: ['BA in Tamil Literature', 'MA in Tamil'],
        faculty: [
            {
                name: 'Dr. Lakshmi Sundaram',
                qualification: 'Ph.D. in Tamil',
                specialization: 'Tamil Grammar, Classical Literature',
                email: 'l.sundaram@college.com',
                research: 'Ancient Tamil Grammar, Literary Theory',
                designation: 'Associate Professor',
                image: '/assets/faculty/tamil-faculty1.jpg'
            },
            {
                name: 'Prof. Ramesh Kumar',
                qualification: 'M.Phil. in Tamil Literature',
                specialization: 'Modern Tamil Literature, Translation Studies',
                email: 'r.kumar@college.com',
                research: 'Contemporary Tamil Fiction, Translation Theory',
                designation: 'Assistant Professor',
                image: '/assets/faculty/tamil-faculty2.jpg'
            }
        ]
    },
    {
        id: 'mathematics',
        name: 'Mathematics',
        description: 'Excellence in mathematical education and research, focusing on pure and applied mathematics.',
        hod: 'Dr. Sarah Chen',
        icon: 'fas fa-square-root-alt',
        programs: ['BSc in Mathematics', 'MSc in Mathematics']
    },
    {
        id: 'history',
        name: 'History',
        description: 'Exploring world history and cultural heritage through comprehensive academic programs.',
        hod: 'Dr. Robert Brown',
        icon: 'fas fa-landmark',
        programs: ['BA in History', 'MA in History']
    },
    {
        id: 'commerce',
        name: 'Commerce',
        description: 'Preparing future business leaders with strong commercial and management skills.',
        hod: 'Dr. Lisa Anderson',
        icon: 'fas fa-chart-line',
        programs: ['BCom', 'MCom']
    },
    {
        id: 'tourism',
        name: 'Tourism',
        description: 'Training professionals in tourism and hospitality management with practical industry exposure.',
        hod: 'Dr. Michael Davis',
        icon: 'fas fa-plane',
        programs: ['BA in Tourism Management', 'MA in Tourism Studies']
    }
];
app.get('/',(req,res)=>{
    res.render("index");

})

app.get('/login',(req,res)=>{
    console.log("login page opened");
    res.render("login");
});

// Departments routes
app.get('/departments', (req, res) => {
    res.render('departments', { departments, active: 'departments' });
});

// Individual department route
app.get('/department/:id', (req, res) => {
    const department = departments.find(dept => dept.id === req.params.id);
    if (department) {
        res.render('department', { department, active: 'departments' });
    } else {
        res.status(404).send('Department not found');
    }
});

app.listen(PORT,()=>{
    console.log(`server is running on port 3000`);
});