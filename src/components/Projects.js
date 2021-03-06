import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import MentalNoteImg from '../images/mentalnotemockup-compressed.png'
import SproutLogImg from '../images/sproutlog-mockup-compressed.png'
import BarkLocal from '../images/barklocal-mockup-compressed.png'
import CircleSvg from '../images/icons/circle.svg'
import CircleOutlineSvg from '../images/icons/circle-outline.svg'

export default class Projects extends React.Component {
  _isMounted = false
  intervalId = 0
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          title: 'MentalNote',
          description:
            'Mental Note is an online mental health tracker. The intention is to log how you’re doing every day. You can track your progress over time on the dashboard and view analytics on your mental health over the course of weeks, months, and years.',
          techStack: ['react', 'redux', 'node', 'mocha', 'chai', 'jest'],
          liveDemo: 'https://mentalnote.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/self-journal',
          image: MentalNoteImg,
        },
        {
          title: 'SproutLog',
          description:
            "Sprout Log is a plant log where you can take notes on each of your plants and keep track of the health of your plant by logging when you watered the plant and keeping track of it's sun exposure.",
          techStack: ['jQuery', 'node', 'mocha', 'chai'],
          liveDemo: 'https://sprout-log.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/sprout-log-app',
          image: SproutLogImg,
        },
        {
          title: 'Bark Local',
          description:
            'Bark Local is a simple app to find dog parks by utilizing the Google Maps and Foursquare APIs. Enter your zipcode to find dog parks near you!',
          techStack: ['jQuery', 'node', 'mocha', 'chai'],
          liveDemo: 'https://nathancleon.github.io/bark-local/',
          gitHub: 'https://github.com/nathancleon/bark-local',
          image: BarkLocal,
        },
      ],
      selectedIndex: 0,
      newIndex: 0,
      fade: null,
      touchStartValX: null,
      touchStartValY: null,
      touchMoveValX: null,
      touchMoveValY: null,
    }
    this.selectProject = this.selectProject.bind(this)
    this.cycleThroughProjects = this.cycleThroughProjects.bind(this)
    this.getInitialTouchValue = this.getInitialTouchValue.bind(this)
    this.swipeThroughProjects = this.swipeThroughProjects.bind(this)
    this.triggerTouchevent = this.triggerTouchevent.bind(this)
  }

  selectProject(event) {
    if (this.state.selectedIndex === this.state.projects.length - 1) {
      this.setState({
        selectedIndex: 0,
      })
    } else if (this.state.selectedIndex === 0) {
      this.setState({
        selectedIndex: 0,
      })
    }
    this.setState({
      selectedIndex: event.target.id,
    })
    console.log('select proj state', this.state.selectedIndex)
    console.log('select proj event', event.target.id)
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  generateDots() {
    let dots = []
    for (let i = 0; i < this.state.projects.length; i++) {
      dots.push(
        <img
          key={i}
          id={i}
          alt="navigation dot"
          onClick={this.selectProject}
          src={CircleOutlineSvg}
        />
      )
    }
    dots[this.state.selectedIndex] = (
      <img
        key={this.state.selectedIndex}
        id={this.state.selectedIndex}
        alt="selected navigation dot"
        onClick={this.selectProject}
        src={CircleSvg}
      />
    )
    return dots
  }

  cycleThroughProjects() {
    if (this.state.selectedIndex === this.state.projects.length - 1) {
      this.setState({
        selectedIndex: 0,
      })
    } else {
      this.setState({ selectedIndex: this.state.selectedIndex + 1 })
    }
    console.log('cycle state', this.state.selectedIndex)
  }

  getInitialTouchValue(event) {
    clearInterval(this.intervalId)
    this.setState({
      touchStartValX: event.touches[0].clientX,
      touchStartValY: event.touches[0].clientY,
    })
  }

  swipeThroughProjects(event) {
    this.setState({
      touchMoveValX: event.touches[0].clientX,
      touchMoveValY: event.touches[0].clientY,
    })
  }

  triggerTouchevent() {
    console.log('swipe state', this.state.selectedIndex)
    let xDiff = this.state.touchStartValX - this.state.touchMoveValX
    let yDiff = this.state.touchStartValY - this.state.touchMoveValY
    let xyDiff = xDiff - yDiff
    let increment = this.state.selectedIndex + 1
    let decrement = this.state.selectedIndex - 1

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //swipe right, but only after a significant/large swipe
      if (xyDiff > 120) {
        if (this.state.selectedIndex === this.state.projects.length - 1) {
          this.setState({
            selectedIndex: this.state.projects.length - 1,
          })
        } else {
          console.log('right swipe state', this.state.selectedIndex)
          this.setState({
            selectedIndex: increment,
          })
          console.log('right swipe state after', this.state.selectedIndex)
        }
      } else {
        //swipe left
        if (xyDiff < -120) {
          console.log('left swipe state', this.state.selectedIndex)
          if (this.state.selectedIndex < 1) {
            this.setState({
              selectedIndex: 0,
            })
          } else {
            this.setState({
              selectedIndex: decrement,
            })
            console.log('left swipe state after', this.state.selectedIndex)
          }
        }
      }
    } else {
      if (yDiff > 0) {
        this.clearTouchEvent()
        return
      } else {
        this.clearTouchEvent()
        return
      }
    }
    this.clearTouchEvent()
  }

  clearTouchEvent() {
    clearInterval(this.intervalId)
    this.setState({
      touchStartVal: null,
      touchMoveVal: null,
    })
  }

  componentDidMount() {
    this._isMounted = true
    this.intervalId = setInterval(this.cycleThroughProjects, 7000)
  }

  // componentDidUpdate(prevState) {
  //   if (prevState && prevState.selectedIndex !== this.state.selectedIndex) {
  //     this.setState({ selectedIndex: prevStateselectedIndex })
  //   }
  // }

  componentWillUnmount() {
    this._isMounted = false
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  render() {
    const selectedProject = this.state.projects[this.state.selectedIndex]
    const sliderDots = this.generateDots()
    return (
      <Wrapper id="projects">
        <React.StrictMode>
          {this.props.inView ? (
            <ContentWrapper
              onTouchStart={this.getInitialTouchValue.bind(this)}
              onTouchMove={this.swipeThroughProjects.bind(this)}
              onTouchEnd={this.triggerTouchevent.bind(this)}
            >
              <HeaderText>Projects</HeaderText>
              <InnerContentWrapper>
                <InnerContent key={this.state.selectedIndex}>
                  <InnerContentText>
                    <InnerContentHeader>
                      {/* <h3>{selectedProject.title}</h3> */}
                    </InnerContentHeader>
                    {/* <p>{selectedProject.description}</p> */}
                    {/* <TechStack>
                      {selectedProject.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </TechStack> */}
                  </InnerContentText>
                  {/* <ProjectImgContainer>
                    <img
                      src={selectedProject.image}
                      alt="desktop and mobile view of the project"
                    />
                    <ProjectLinks>
                      {selectedProject.liveDemo ? (
                        <a
                          href={selectedProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      ) : null}
                      {selectedProject.gitHub ? (
                        <a
                          href={selectedProject.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Link
                        </a>
                      ) : null}
                    </ProjectLinks>
                  </ProjectImgContainer> */}
                </InnerContent>
              </InnerContentWrapper>
              <ExperienceText>
                <h3>Projects</h3>
                <h3>Projects</h3>
                <h3>Projects</h3>
              </ExperienceText>
              <SliderNavigation>{sliderDots}</SliderNavigation>
            </ContentWrapper>
          ) : null}
        </React.StrictMode>
      </Wrapper>
    )
  }
}

const skewUp = keyframes`
from {
  transform: translate3d(0, 100px, 0);
}
to {
  transform: translate3d(0);
}
`

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const slideIn = keyframes`
from { transform: translateX(-300px)}
  to   { transform: translateX(0)}
`

const fadeOut = keyframes`
  from { opacity: 1 }
  to   { opacity: 0 }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  background-color: #fff;
  margin-bottom: 25vh;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 60%;
  border: 1px solid #444;
  animation: ${fadeIn} 3s, ${slideIn} 1s;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    border: none;
  }
  @media only screen and (max-width: 600px) {
    height: 580px;
  }
  @media only screen and (max-width: 320px) {
    height: 500px;
  }
`

const HeaderText = styled.h1`
  position: absolute;
  top: -10vmin;
  left: 8vmin;
  font-size: 14vmin;
  font-style: italic;
  color: #444;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #a20505;
  background-color: #fff;
  padding: 0 10px;
  @media only screen and (max-width: 1024px) {
    top: -20vmin;
    left: 0;
    right: 0;
    display: inline-block;
    text-align: center;
    font-size: 18vmin;
    -webkit-text-stroke-width: 2px;
  }
  @media only screen and (max-width: 420px) {
    -webkit-text-stroke-width: 1px;
  }
`

const InnerContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  height: 70vh;
  padding: 2vw;
  z-index: 5;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`
const InnerContent = styled(InnerContentWrapper)``

const InnerContentText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 9vmin;
  width: 45%;
  p {
    font-size: 1.25vw;
    font-weight: 300;
    line-height: 2vw;
    color: #444;
    margin-top: 15px;
    width: 80%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 4vmin;
    margin-bottom: 50px;
    p {
      margin-left: 5vw;
      font-size: 14px;
      line-height: 18px;
    }
  }
`

const InnerContentHeader = styled.div`
  height: 10vh;
  width: 50vw;
  display: flex;
  align-items: center;
  margin-left: -5vw;
  margin-top: 3vmin;
  background-color: #a20505;
  h3 {
    font-size: 2vw;
    font-family: 'Bitter', serif;
    color: #fff;
    margin-left: 5vw;
  }
  @media only screen and (max-width: 1024px) {
    height: 8vh;
    width: 100%;
    margin: 0;
    h3 {
      font-size: 2rem;
    }
  }
`

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin-top: 10px;
  li {
    display: inline-block;
    list-style: none;
    font-size: 1vw;
    color: #fff;
    font-weight: bold;
    background-color: #444;
    padding: 6px 12px;
    border-radius: 20px;
    margin-right: 5px;
    margin-top: 5px;
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 5vw;
    li {
      font-size: 12px;
    }
  }
`

const ProjectImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: -8vw;
  img {
    width: 100%;
    filter: drop-shadow(20px 12px 20px rgba(0, 0, 0, 0.6));
    z-index: 50;
  }
  @media only screen and (max-width: 1024px) {
    animation: ${fadeIn} 3.5s ease, ${slideIn} 1s ease;
    margin-left: 0;
    img {
      width: 100%;
      margin-left: -3vw;
      filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.3));
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`

const ProjectLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 8vw;
  margin-top: -4vh;
  z-index: 60;
  a {
    color: #444;
    font-size: 1.5vw;
    font-style: italic;
    &:first-of-type {
      margin-right: 25px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-top: -4vh;
    margin-left: 0;
    width: auto;
    a {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 5px;
  }
`

const ExperienceText = styled.div`
  position: absolute;
  right: -9vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  z-index: 1;

  h3 {
    position: relative;
    font-size: 8vh;
    font-weight: 800;
    color: #a20505;

    &:first-of-type {
      z-index: 50;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -4.8vmin;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
      z-index: 4;
    }

    &:last-of-type {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
      z-index: 3;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 30px;
  bottom: -55px;
  left: 0;
  right: 0;
  z-index: 100;
  img {
    width: 20px;
    cursor: pointer;
    &:nth-of-type(2) {
      margin-right: 25px;
      margin-left: 25px;
    }
  }
  @media only screen and (max-width: 1024px) {
    img {
      width: 15px;
    }
  }
`
