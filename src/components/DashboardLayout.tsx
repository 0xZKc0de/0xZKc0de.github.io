import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0d1117;
  color: #c9d1d9;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #161b22;
  padding: 20px;
  border-right: 1px solid #30363d;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 10px;
  margin: 5px 0;
  color: ${props => props.$active ? '#58a6ff' : '#c9d1d9'};
  text-decoration: none;
  border-radius: 6px;
  background-color: ${props => props.$active ? '#1f2937' : 'transparent'};
  
  &:hover {
    background-color: #1f2937;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  color: #58a6ff;
  font-family: 'JetBrains Mono', monospace;
`;

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>0xZKc0de</Logo>
        <nav>
          <NavLink to="/terminal" $active={location.pathname === '/terminal'}>
            Terminal
          </NavLink>
          <NavLink to="/about" $active={location.pathname === '/about'}>
            About
          </NavLink>
          <NavLink to="/projects" $active={location.pathname === '/projects'}>
            Projects
          </NavLink>
          <NavLink to="/blog" $active={location.pathname === '/blog'}>
            Blog
          </NavLink>
          <NavLink to="/skills" $active={location.pathname === '/skills'}>
            Skills
          </NavLink>
        </nav>
      </Sidebar>
      <MainContent>
        {children}
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardLayout;