import styled, { keyframes } from "styled-components";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Main Container
export const Container = styled.div`
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

// Navigation
export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.75rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.75rem 4%;
  }
`;

export const NavBrand = styled.h2`
  color: #f8fafc;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const NavItem = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
`;

// Hero Section
export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 700px;
  padding: 1rem;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1s ease-out;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
`;

export const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0 auto 2rem auto;
  max-width: 500px;
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
  }

  &:hover::before {
    left: 100%;
  }
`;

// Section Styles
export const AboutSection = styled.section`
  padding: 4rem 5%;
  background: #f8fafc;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 3rem 4%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #1e293b;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
  }
`;

export const AboutGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutText = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

// Experience Section
export const ExperienceSection = styled.section`
  padding: 4rem 5%;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 4%;
  }
`;

export const TimelineContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 15px;
    }
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 3rem;
  position: relative;

  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 20px;
    width: 16px;
    height: 16px;
    background: #3b82f6;
    border: 4px solid white;
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 768px) {
      left: 20px;
    }
  }

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const TimelineDate = styled.div`
  flex: 0 0 200px;
  font-weight: 600;
  color: #3b82f6;
  padding: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    flex: 0 0 auto;
    text-align: left;
    padding: 0.5rem 0;
  }
`;

export const TimelineContent = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #f8fafc;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }

  h4 {
    color: #3b82f6;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
  }

  p {
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

// Projects Section
export const ProjectsSection = styled.section`
  padding: 4rem 5%;
  background: #f1f5f9;
  
  @media (max-width: 768px) {
    padding: 3rem 4%;
  }
`;

export const ProjectGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
`;

export const ProjectContent = styled.div`
  padding: 2rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechTag = styled.span`
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  padding: 0.6rem 1.2rem;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    color: white;
  }
`;

// Skills Section
export const SkillsSection = styled.section`
  padding: 4rem 5%;
  background: white;
  
  @media (max-width: 768px) {
    padding: 3rem 4%;
  }
`;

export const SkillsGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const SkillCategory = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid #3b82f6;
`;

export const SkillCategoryTitle = styled.h3`
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SkillItem = styled.div`
  padding: 0.8rem 1rem;
  background: ${props => {
    switch(props.level) {
      case 'advanced': return 'linear-gradient(135deg, #10b981, #059669)';
      case 'intermediate': return 'linear-gradient(135deg, #3b82f6, #2563eb)';
      case 'beginner': return 'linear-gradient(135deg, #f59e0b, #d97706)';
      default: return 'linear-gradient(135deg, #6b7280, #4b5563)';
    }
  }};
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '${props => {
      switch(props.level) {
        case 'advanced': return 'Advanced';
        case 'intermediate': return 'Intermediate';
        case 'beginner': return 'Beginner';
        default: return '';
      }
    }}';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

// Chatbot Section
export const ChatbotSection = styled.section`
  padding: 4rem 5%;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 4%;
  }
`;

export const ChatbotContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

export const ChatbotTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ChatbotDescription = styled.p`
  font-size: 1.3rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

export const ChatbotFrame = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  iframe {
    border-radius: 1rem;
  }
`;

// Contact Section
export const ContactSection = styled.section`
  padding: 4rem 5%;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 3rem 4%;
  }
`;

export const ContactGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    color: #1e293b;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  h3 {
    color: #1e293b;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  color: #374151;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.7rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  }
`;

// Footer
export const Footer = styled.footer`
  background: #0f172a;
  color: #94a3b8;
  text-align: center;
  padding: 2rem;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

// Scroll to Top
export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`;
