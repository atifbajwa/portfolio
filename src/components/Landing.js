import React from 'react'
import styled from '@emotion/styled'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutIsInView: false,
      experienceIsInView: false,
      contactIsInView: false,
    }
  }

  componentDidMount() {
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        console.log(entry.target.id)
        if (entry.isIntersecting && entry.target.id === 'about-section') {
          this.setState({
            aboutIsInView: true,
          })
        } else if (
          entry.isIntersecting &&
          entry.target.id === 'experience-section'
        ) {
          this.setState({
            experienceIsInView: true,
          })
        } else if (
          entry.isIntersecting &&
          entry.target.id === 'contact-section'
        ) {
          console.warn('contact logic ran')
          this.setState({
            contactIsInView: true,
          })
        }
      }
    })

    document.querySelectorAll('section').forEach(element => io.observe(element))
  }

  render() {
    return (
      <Wrapper>
        <Hero />
        <About inView={this.state.aboutIsInView} />
        <Experience inView={this.state.experienceIsInView} />
        <Contact inView={this.state.contactIsInView} />
      </Wrapper>
    )
  }
}

export default Landing

const Wrapper = styled.div`
  overflow: hidden;
`
