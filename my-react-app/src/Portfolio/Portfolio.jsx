import React, { useState, useEffect } from "react";
import {
  Container,
  NavBar,
  NavBrand,
  NavMenu,
  NavItem,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  CTAButton,
  AboutSection,
  SectionTitle,
  AboutGrid,
  AboutText,
  AboutStats,
  StatItem,
  StatNumber,
  StatLabel,
  ExperienceSection,
  TimelineContainer,
  TimelineItem,
  TimelineDate,
  TimelineContent,
  ProjectsSection,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag,
  ProjectLinks,
  ProjectLink,
  SkillsSection,
  SkillsGrid,
  SkillCategory,
  SkillCategoryTitle,
  SkillsList,
  SkillItem,
  ContactSection,
  ContactGrid,
  ContactInfo,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  ChatbotSection,
  ChatbotContainer,
  ChatbotTitle,
  ChatbotDescription,
  ChatbotFrame,
  SocialLinks,
  SocialLink,
  Footer,
  ScrollToTop
} from "./style";

const Portfolio = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <NavBar>
        <NavBrand>Naveen Karthik B</NavBrand>
        <NavMenu>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavMenu>
      </NavBar>

      <HeroSection id="home">
        <HeroContent>
          <HeroTitle>
            Naveen Karthik B
          </HeroTitle>
          <HeroSubtitle>Computer Science Engineering Student</HeroSubtitle>
          <HeroDescription>
            Passionate full-stack developer and problem solver, crafting innovative digital solutions 
            with modern technologies. Currently pursuing CSE at Sri Eshwar College of Engineering.
          </HeroDescription>
          <CTAButton href="#contact">Get In Touch</CTAButton>
        </HeroContent>
      </HeroSection>

      <AboutSection id="about">
        <SectionTitle>About Me</SectionTitle>
        <AboutGrid>
          <AboutText>
            <p>
              I am a dedicated Computer Science Engineering student at Sri Eshwar College of Engineering (2024–2028), 
              with a strong passion for full-stack development and innovative problem-solving. My journey in technology 
              is driven by curiosity and a commitment to creating impactful digital solutions.
            </p>
            <p>
              With expertise spanning from frontend technologies like React and responsive design to backend 
              development with Spring Boot and database management, I bring a comprehensive approach to software development. 
              I thrive in collaborative environments and am always eager to learn emerging technologies.
            </p>
            <p>
              Beyond coding, I enjoy leading teams, mentoring peers, and contributing to open-source projects. 
              My goal is to leverage technology to solve real-world problems and create meaningful user experiences.
            </p>
          </AboutText>
          <AboutStats>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>3+</StatNumber>
              <StatLabel>Years Learning</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>8+</StatNumber>
              <StatLabel>Technologies Mastered</StatLabel>
            </StatItem>
          </AboutStats>
        </AboutGrid>
      </AboutSection>

      <ExperienceSection id="experience">
        <SectionTitle>Academic Journey & Experience</SectionTitle>
        <TimelineContainer>
          <TimelineItem>
            <TimelineDate>2024 - 2028</TimelineDate>
            <TimelineContent>
              <h3>Bachelor of Engineering - Computer Science</h3>
              <h4>Sri Eshwar College of Engineering</h4>
              <p>Pursuing comprehensive education in computer science fundamentals, software engineering, 
              data structures, algorithms, and modern development practices.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2024</TimelineDate>
            <TimelineContent>
              <h3>Full-Stack Development Projects</h3>
              <h4>Personal & Academic Projects</h4>
              <p>Developed multiple web applications including e-commerce platforms, voting systems, 
              and expense management tools using modern tech stacks.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2023 - 2024</TimelineDate>
            <TimelineContent>
              <h3>Programming Foundation</h3>
              <h4>Self-Learning & Certification</h4>
              <p>Built strong foundation in C, C++, and web technologies through intensive self-study 
              and practical project implementation.</p>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </ExperienceSection>

      <ProjectsSection id="projects">
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          <ProjectCard>
            <ProjectImage>
              <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '200px', borderRadius: '8px'}}></div>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Secure Digital E-Voting Platform</ProjectTitle>
              <ProjectDescription>
                A comprehensive full-stack voting system featuring JWT authentication, role-based access control, 
                candidate registration, secure vote casting, and real-time result publishing. Implements advanced 
                security measures and user-friendly interface design.
              </ProjectDescription>
              <TechStack>
                <TechTag>Spring Boot</TechTag>
                <TechTag>MySQL</TechTag>
                <TechTag>JWT</TechTag>
                <TechTag>JavaScript</TechTag>
                <TechTag>HTML/CSS</TechTag>
              </TechStack>
              <ProjectLinks>
                <ProjectLink href="#">Live Demo</ProjectLink>
                <ProjectLink href="#">GitHub</ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage>
              <div style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', height: '200px', borderRadius: '8px'}}></div>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>E-Commerce Platform</ProjectTitle>
              <ProjectDescription>
                A responsive online shopping platform with user authentication, product catalog management, 
                shopping cart functionality, and order processing system. Features modern UI/UX design 
                and mobile-first approach.
              </ProjectDescription>
              <TechStack>
                <TechTag>HTML5</TechTag>
                <TechTag>CSS3</TechTag>
                <TechTag>JavaScript</TechTag>
                <TechTag>Responsive Design</TechTag>
              </TechStack>
              <ProjectLinks>
                <ProjectLink href="#">Live Demo</ProjectLink>
                <ProjectLink href="#">GitHub</ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage>
              <div style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', height: '200px', borderRadius: '8px'}}></div>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Advanced Expense Tracker</ProjectTitle>
              <ProjectDescription>
                A console-based expense management system built in C, featuring comprehensive CRUD operations, 
                data persistence, category-wise expense tracking, and detailed financial reporting capabilities.
              </ProjectDescription>
              <TechStack>
                <TechTag>C Language</TechTag>
                <TechTag>File I/O</TechTag>
                <TechTag>Data Structures</TechTag>
                <TechTag>Algorithms</TechTag>
              </TechStack>
              <ProjectLinks>
                <ProjectLink href="#">GitHub</ProjectLink>
                <ProjectLink href="#">Documentation</ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        </ProjectGrid>
      </ProjectsSection>

      <SkillsSection id="skills">
        <SectionTitle>Technical Expertise</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
            <SkillsList>
              <SkillItem level="advanced">C</SkillItem>
              <SkillItem level="advanced">C++</SkillItem>
              <SkillItem level="intermediate">Java</SkillItem>
              <SkillItem level="intermediate">JavaScript</SkillItem>
              <SkillItem level="beginner">Python</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory>
            <SkillCategoryTitle>Frontend Technologies</SkillCategoryTitle>
            <SkillsList>
              <SkillItem level="advanced">HTML5</SkillItem>
              <SkillItem level="advanced">CSS3</SkillItem>
              <SkillItem level="intermediate">React.js</SkillItem>
              <SkillItem level="intermediate">Responsive Design</SkillItem>
              <SkillItem level="intermediate">Bootstrap</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory>
            <SkillCategoryTitle>Backend & Database</SkillCategoryTitle>
            <SkillsList>
              <SkillItem level="intermediate">Spring Boot</SkillItem>
              <SkillItem level="intermediate">MySQL</SkillItem>
              <SkillItem level="intermediate">JWT Authentication</SkillItem>
              <SkillItem level="beginner">Node.js</SkillItem>
              <SkillItem level="beginner">MongoDB</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory>
            <SkillCategoryTitle>Tools & Technologies</SkillCategoryTitle>
            <SkillsList>
              <SkillItem level="advanced">VS Code</SkillItem>
              <SkillItem level="intermediate">Git & GitHub</SkillItem>
              <SkillItem level="intermediate">Postman</SkillItem>
              <SkillItem level="beginner">Docker</SkillItem>
              <SkillItem level="beginner">AWS</SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsSection>

      <ChatbotSection>
        <ChatbotContainer>
          <ChatbotTitle>Ready to Connect?</ChatbotTitle>
          <ChatbotDescription>
            I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology and innovation.
          </ChatbotDescription>
          <div style={{textAlign: 'center'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              <CTAButton href="mailto:Naveenkarthik.b@sece.ac.in">
                📧 Email Me
              </CTAButton>
              <CTAButton href="https://www.linkedin.com/in/naveen-karthik-b-486a70333" target="_blank">
                💼 LinkedIn
              </CTAButton>
              <CTAButton href="https://github.com/Naveenkarthik2809" target="_blank">
                💻 GitHub
              </CTAButton>
            </div>
            <div style={{background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem', maxWidth: '500px', margin: '0 auto'}}>
              <h3 style={{color: '#f8fafc', marginBottom: '1rem', fontSize: '1.3rem'}}>Quick Info</h3>
              <p style={{color: '#cbd5e1', marginBottom: '0.5rem'}}>📍 Location: Tamil Nadu, India</p>
              <p style={{color: '#cbd5e1', marginBottom: '0.5rem'}}>🎓 Student at Sri Eshwar College of Engineering</p>
              <p style={{color: '#cbd5e1', marginBottom: '0.5rem'}}>💼 Available for internships & projects</p>
              <p style={{color: '#cbd5e1'}}>🚀 Passionate about full-stack development</p>
            </div>
          </div>
        </ChatbotContainer>
      </ChatbotSection>

      <ContactSection id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.</p>
            
            <div style={{marginTop: '2rem'}}>
              <p><strong>Email:</strong> Naveenkarthik.b@sece.ac.in</p>
              <p><strong>Phone:</strong> +91 8778917511</p>
              <p><strong>Location:</strong> Tamil Nadu, India</p>
            </div>

            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/naveen-karthik-b-486a70333" target="_blank">LinkedIn</SocialLink>
              <SocialLink href="https://github.com/Naveenkarthik2809" target="_blank">GitHub</SocialLink>
              <SocialLink href="mailto:Naveenkarthik.b@sece.ac.in">Email</SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm>
            <h3>Send Message</h3>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" placeholder="your.email@example.com" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormInput type="text" placeholder="Subject" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea rows="5" placeholder="Your message..."></FormTextarea>
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContactSection>

      <Footer>
        <p>&copy; 2024 Naveen Karthik B. All rights reserved.</p>
        <p>Designed & Developed with passion</p>
      </Footer>

      {showScrollTop && (
        <ScrollToTop onClick={scrollToTop}>
          ↑
        </ScrollToTop>
      )}
    </Container>
  );
};

export default Portfolio;
