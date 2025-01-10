import { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Images from '../assets/images/cuyprof.jpg'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const profile = {
    name: "Idin Iskandar",
    role: "Full Stack Developer",
    bio: "Passionate developer with a keen interest in creating beautiful and functional web applications. Always learning and exploring new technologies.",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "Bootstrap", "MongoDB"],
    experience: [
      {
        year: "2022 - Present",
        position: "Senior Developer",
        company: "Tech Company"
      },
      {
        year: "2020 - 2022",
        position: "Web Developer",
        company: "StartUp Inc"
      }
    ],
    education: [
      {
        year: "2016 - 2020",
        degree: "Computer Science",
        school: "UNIKOM (UNIVERSITAS KOMEDI)"
      }
    ]
  };

const teamMembers = [
  {
    name: "Sulqime Shima",
    role: "Assistant Manager",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_.sulqime._-20241230-0001.jpg",
  },
  {
    name: "Friska J.",
    role: "UI/UX Designer",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_prissqnq.q-20241230-0001.jpg"
  },
  {
    name: "Aryu Yusmala",
    role: "DeployMent",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_aryuuu_mn-20241230-0001.jpg"
  },
  {
    name: "Fika Iskandar",
    role: "Project Manager",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/fiqqbtt-20241230-0002.jpg"
  }
];

  return (
    <div className="min-vh-100 text-white">
      <div className="container-fluid py-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <div className="position-relative mb-5">
              <div className="rounded-circle overflow-hidden border border-4 border-danger mx-auto" 
                   style={{ width: '256px', height: '256px' }}>
                <img
                  src={Images}
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="position-absolute start-50 translate-middle-x"
                   style={{ bottom: '-25px', width: 'auto', whiteSpace: 'nowrap' }}>
                   <p className="mb-0 fw-bold">{profile.name}</p>               
                <div className="bg-danger px-4 py-2 rounded-pill">
                  <p className="mb-0 fw-bold">{profile.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-8 text-center text-md-start mt-5 mt-md-0">
            <h1 className="display-4 fw-bold mb-4">
              <span className="text-danger">About</span> <span className="text-white">Me</span>
            </h1>
            <p className="lead mb-4">{profile.bio}</p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <button className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Github size={24} />
              </button>
              <button className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Linkedin size={24} />
              </button>
              <button className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Twitter size={24} />
              </button>
              <button className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-black rounded p-4 mb-5">
          <div className="d-flex gap-3 mb-4 overflow-auto">
            {['skills', 'experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn ${
                  activeTab === tab ? 'btn-danger' : 'btn-dark'
                } rounded-pill px-4 py-2 text-capitalize`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ minHeight: '300px' }}>
            {activeTab === 'skills' && (
              <div className="row g-4">
                {profile.skills.map((skill) => (
                  <div key={skill} className="col-md-4 col-sm-6">
                    <div className="bg-dark p-3 rounded text-center hover-danger-bg transition">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="d-flex flex-column gap-4">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="border-start border-4 border-danger ps-4">
                    <p className="text-danger fw-bold mb-1">{exp.year}</p>
                    <h3 className="h4 fw-bold mb-1">{exp.position}</h3>
                    <p className="text-secondary mb-0">{exp.company}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="d-flex flex-column gap-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-start border-4 border-danger ps-4">
                    <p className="text-danger fw-bold mb-1">{edu.year}</p>
                    <h3 className="h4 fw-bold mb-1">{edu.degree}</h3>
                    <p className="text-secondary mb-0">{edu.school}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-5 text-white">
            Our <span className="text-danger">Team</span>
          </h2>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="team-card bg-black p-4 rounded h-100 position-relative overflow-hidden">
                  <div className="team-image-wrapper mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle team-image"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="member-team">
                  <h3 className="h5 mb-6">{member.name}</h3>
                  </div>
                  <div className="team-social start-0 end-0 bottom-0 p-3 bg-dark">
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-white"><Github size={20} /></a>
                      <a href="#" className="text-white"><Linkedin size={20} /></a>
                      <a href="#" className="text-white"><Mail size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;