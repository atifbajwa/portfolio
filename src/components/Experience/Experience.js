import React from 'react'
import styled from '@emotion/styled'
import greenroofImg from '../../images/greenroof-diagnostics-mockup.png'
import HackForChangeImg from '../../images/me-atxhackforchange.jpg'
import htmlIcon from '../../images/icons/html-5.svg'
import cssIcon from '../../images/icons/css-3.svg'
import jqueryIcon from '../../images/icons/jquery.svg'
import githubIcon from '../../images/icons/github-icon.svg'

const ExperienceContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    padding-bottom: 15vh;
    background-color: rgba(141,228,245,0.07);
  }
  @media only screen and (max-width: 860px) {
    {
      padding-top: 10vh;
      margin-bottom: 5vh;
    }
  }
`;

const ContentContainer = styled.div`
  {
    display: flex;
    align-items: top;
    justify-content: space-between;
    width: 100%;
    padding-left: 5vw;
  }
  @media only screen and (max-width: 860px) {
    {
      flex-direction: column;
      padding-left: 0;
      with: 100%
    }
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', serif;
    font-size: 4vmin;
    color: #fefefe;
    position: relative;
    transform: rotate(-5deg);
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  &:before {
    content: '';
    position: absolute;
    width: 25vmin;
    height: 8vmin;
    top: -2vmin;
    left: -2.5vmin;
    background-color: #715FB5;
    border-radius: 4px;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 29vmin;
    height: 8vmin;
    top: -1.5vmin;
    left: -4vmin;
    background-color: #8DE4F5;
    border-radius: 4px;
    z-index: -2;
    transform: rotate(-8deg);
  }
  @media only screen and (max-width: 860px) {
    {
      margin-bottom: 5vh;
    }
  }
`

const ExperienceText = styled.div`
{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10vw;
}
h2 {
  color: #715FB5;
  font-size: 4vmin;
  margin-bottom: 2vh;
}
p {
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #888;
}
@media only screen and (max-width: 860px) {
  {
    width: 90%;
    padding-left: 5vw;
    margin-top: 5vh;
    margin-bottom: 5vh;
    align-self: center;
  }
  p {
    font-size: 14px;
  }
}
`;

const SelectedExperience = styled.div`
  {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2vw;
  }
  a first-of-type {
    width: 80%;
    cursor: pointer;
    margin-top: 4vw;
  }
  img:hover {
    border-radius: 4px;
  }
  @media only screen and (max-width: 860px) {
    {
      width: 90%;
      height: 100%;
      margin-right: 0;
    }
    img {
      width: 100%;
    }
  }
`;

const SelectedImg = styled.img`
  {
    max-width: 50vw;
  }
`;

const TechStack = styled.div`
  {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -4vh;
    margin-left: 10%;
  }
  img {
    width: 3vw;
    max-height: 3vw;
    cursor: pointer;
    padding: 5px;
    margin-right: 3vw;
  }
  @media only screen and (max-width: 860px) {
    {
      width: 90%;
      margin-left: 0;
      padding-left: 10%;
      margin-top: 2vh;
    }
    img {
      width: 7vw;
      max-height: 7vw;
    }
  }
`;


const HackForChange = styled.div`
   {
    display: flex;
    align-items: top;
    justify-content: space-around;
    width: 100%;
    margin-right: 15vw;
    margin-top: 25vw;
  }
  @media only screen and (max-width: 860px) {
    {
      flex-direction: column;
      padding-left: 0;
      margin-right: 0;
      width: 90%;
    }
  }
`;

const HackForChangeImage = styled.div`
  {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4vw;
  }
  a {
    width: 70%;
    cursor: pointer;
  }
  img {
    width: 80%;
    border-radius: 4px;
  }
  img:hover {
    box-shadow: 15px 15px 20px rgba(113,95,181,0.2);
  }
  @media only screen and (max-width: 860px) {
    {
      width: 100%;
      height: 100%;
      order: 2;
      margin-left: 0;
      margin-top: 10vw;
    }
    img {
      width: 100%;
    }
  }
`;

const HackForChangeText = styled.div`
{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10vw;
}
h2 {
  color: #715FB5;
  font-size: 4vmin;
  margin-bottom: 2vh;
}
p {
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #888;
}
@media only screen and (max-width: 1200px) {
  {
    width: 40%;
    padding-left: 5vw;
    margin-top: -2vw;
    margin-bottom: 5vh;
    align-self: center;
  }
  p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 860px) {
  {
    width: 90%;
    padding-left: 5vw;
    margin-top: -2vw;
    margin-bottom: 5vh;
    align-self: center;
  }
  p {
    font-size: 12px;
  }
}
`;


export default class Experience extends React.Component {

  render() {
    return(
      <ExperienceContainer>
        <Title>Experience</Title>
        <ContentContainer>
          <ExperienceText>
            <h2>Green Roof Diagnostics Redesign</h2>
            <p>Worked alongside the principal engineer at Green Roof Diagnostics to completely redesign their site to engineer's spec. Created initial mockup and implemented site based on agreed upon design.</p>
          </ExperienceText>
        <SelectedExperience>
          <a href="https://github.com/nathancleon/green-roof-diagnostics" target="_blank" rel="noopener noreferrer">
            <SelectedImg src={greenroofImg} alt="design mockup" />
          </a>
          <TechStack>
            <img src={htmlIcon} alt="html" title="html" />
            <img src={cssIcon} alt="css" title="css"/>
            <img src={jqueryIcon} alt="jquery" title="jquery" />
            <a href="https://github.com/nathancleon/green-roof-diagnostics" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github" title="github"/>
            </a>
          </TechStack>
        </SelectedExperience>
        </ContentContainer>
        <HackForChange>
        <HackForChangeImage>
          <a href="http://atxhackforchange.org/" target="_blank" rel="noopener noreferrer">
            <img src={HackForChangeImg} alt="design mockup" />
          </a>
        </HackForChangeImage>
        <HackForChangeText>
            <h2>ATX Hack For Change 2016</h2>
            <p>Worked alongside actual beekeepers, a software engineer, a UX Designer, and a Content Marketing Coordinator to develop an app to assist local beekeepers.</p>
        </HackForChangeText>
        </HackForChange>
      </ExperienceContainer>
    )
  }
}