import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Fade from 'react-reveal/Fade';

import Layout from '../components/Layout'
 
import Speaking from '../components/Speaking'
import Reading from '../components/Reading'
import Social from '../components/Social'
import HomeSection from '../components/HomeSection'
import Projects from '../components/Projects'

import { sortPosts } from '../components/utils.js'

class IndexPage extends React.Component {
  render() {
    let isMobile;
    if (typeof window !== `undefined`) {
      isMobile = window.matchMedia('only screen and (max-width: 30em)').matches;
    }

    const posts = sortPosts(this.props.data.allMarkdownRemark.edges);
    const caseStudies = posts.filter(i => i.node.frontmatter.projectType === 'case study');
    const projects = posts.filter(i => i.node.frontmatter.projectType === 'project');
    
    let bookNodes = {};
    bookNodes.finished = this.props.data.allGoodreadsBook.edges.filter( b =>
      b.node.shelfNames.includes('read')
    );
    bookNodes.reading = this.props.data.allGoodreadsBook.edges.filter( b =>
      b.node.shelfNames.includes('currently-reading')
    );
    
    return (
      <Layout>
        <div className="layoutMaxWidth center">
          <section className="flex flex-row-ns flex-column ">
            <div className="w-40-ns">
              <Img
                // className="parallax__layer--back absolute top-3-ns top-2 mt4-ns mt5 w-80 w-100-ns relative-ns"
                fluid={this.props.data.file.childImageSharp.fluid}
                alt="Silhouette of a man standing at the top of a hill with silhouettes of mountains in the background. I like mountains because they offer great insights about life in general. Like: we're never quite sure of how tall are the mountains just over the ones that are nearest to us, all we have to do is keep climbing and taking care of our own pair of legs."
              />

              <div className="absolute top-0 left-3-ns mt6-ns ml7-ns mt6 mr3 pt5-ns">
                <div className="overflow-hidden">
                  <Fade bottom cascade={!isMobile} duration={800}>
                    <h1
                      className="f-subheadline-ns f2 fw4 dark-gray ma0 tl-ns tr">
                      I'm a designer of 
                    </h1>
                  </Fade>
                </div>
                <div className="overflow-hidden">
                  <Fade bottom cascade={!isMobile} delay={400} duration={800}>
                    <h1
                      className="f-subheadline-ns f2 fw4 dark-gray ma0 tl-ns tr">
                      products & systems.
                    </h1>
                  </Fade>
                </div>
              </div>
            </div> 

            <div className="w-20-ns" />

            <div className="w-40-ns mt7-ns">
              <section id="about" className="mb4 mt6-ns mt4 pt4 f5 lh-copy dark-gray">
                <Fade duration={1500} delay={800}> 
                  <p>
                    Nice to meet you!
                  </p>
                  <p>
                    I'm a designer with a skill set ranging from researching to designing and programming products and systems. I'm interested in solving problems related to the human experience of technology and tools we use to work and express ourselves.
                  </p>
                  <p>
                    My background in Computer Engineering has biased me towards solutions that are scalable, maintainable and that stand the test of time. This mindset also applies to businesses and their role in the society. I work with purpose, and I like creating stuff that contribute to a more sustainable and equitable world.
                  </p>
                  <p>
                    I'm very curious and I'm always learning different stuff. I find it helps me stay creative, and give me knowledge to find the right problems to solve, as well as the right solutions for them.
                  </p>
                </Fade>
              </section>
            </div>
          </section>

          {/* <HomeSection title="Work">
            <div className="f4 pb4-ns pb2 mt2 dark-gray lh-copy">
              I'm working as a <b>Product Designer</b> at{' '}
                <a
                  className="pretty-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vtex.com/"
                >
                  VTEX
                  </a>
                , building the future of e-commerce in one of the biggest ecosystems in
                the world. I've been contributing in a variety of teams and projects, participating from all project phases, always in search of the right balance between the inherent complexity of the platform, technology constraints and the pains and needs of thousands of users that depend on our platform everyday to run their businesses.
              <p>
                In my free time I'm a <b>cicloactivist</b> and I try to apply my skills to improve urban mobility and ultimately contribute for better cities. I've built{' '}
                <a className="pretty-link" target="_blank" rel="noopener noreferrer" href="https://www.bikedeboa.com.br/" > bike de boa</a> and <a className="pretty-link" target="_blank" rel="noopener noreferrer" href="https://ciclomapa.org.br/" > CicloMapa</a>
                , two web apps to help urban cyclists in Brazil.
              </p>
            </div>
          </HomeSection> */}

          <HomeSection title="Case studies" fullScreen
            description="Here's a selection of projects in which I've played a major role and I'm very proud of.">
            <Projects posts={caseStudies}/> 
            <Projects mini posts={projects} /> 
          </HomeSection> 

          <HomeSection title="Social">
            <Social />
          </HomeSection>
        </div>

      </Layout>
    );
  } 
}

export default IndexPage;

export const pageQuery = graphql`
         query {
           file(relativePath: {regex: "\/.*selfie.png\/"}) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid {
                src
                srcSet
                base64
                aspectRatio
                originalImg
                sizes  
              }
            }
          },
           allGoodreadsBook(filter: {shelfNames: {in: ["read","currently-reading"]}}) {
            edges {
              node {
                shelfNames
                book {
                  link
                  title
                  imageUrl
                  authors {
                    name
                  }
                }
              }
            }
          },
           allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   date
                   date2
                   title
                   description
                   minibio
                   projectType
                   tags
                   forceOrder
                   cover { 
                      childImageSharp {
                        fluid {
                          src
                          srcSet
                          base64
                          aspectRatio
                          originalImg
                          sizes  
                        }
                      }
                    }
                 }
               }
             }
           }
         }
       `