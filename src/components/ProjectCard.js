import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

// import Tag from '../components/Tag.js'

// import { formatDate } from '../components/utils.js'

class ProjectCard extends React.Component {
    render() {
        const post = this.props.node;
        // const mini = this.props.mini;

        // let dateStart = formatDate(post.frontmatter.date, 'YYYY');
        // let dateEnd = formatDate(post.frontmatter.date2, 'YYYY');
        // if (dateEnd && dateEnd === dateStart) {
        //     dateEnd = null;
        // }

        return (
            <Link
                // className="b--light-gray bg-white br0 db near-black overflow-hidden card-shadow card-hover"
                className="project-card link near-black db br1 lh-copy"
                to={post.fields.slug} 
            >
                {
                    post.frontmatter.cover &&
                        <Img 
                            className={`w-100 db project-card--cover cover br1`}
                            fluid={post.frontmatter.cover.childImageSharp.fluid}
                            alt="" 
                        />
                }

                {/* <div className="ph3 pv4"> */}
                <div className="pv3">
                    {/* <div className="project-card--date f6 mt0 silver db-ns dn">
                        {dateStart} {dateEnd && `– ${dateEnd}`}
                    </div> */}

                    {
                        post.frontmatter.title
                        &&
                        <h3 className="project-card--title f5 fw6 near-black mt0 mb0">
                            {post.frontmatter.title}
                        </h3>
                    }

                    {/* {
                        post.frontmatter.description
                        &&
                        <div className="project-card--description f6 silver lh-copy">
                            {post.frontmatter.description}
                        </div>
                    } */}

                    {
                        post.frontmatter.minibio &&
                        <div className="project-card--description f5 mt0 gray lh-copy measure-narrow">
                            {post.frontmatter.minibio}
                        </div>
                    }

                    {/* {
                        post.frontmatter.tags &&
                        !mini &&
                        <div className="flex flex-row flex-wrap mt3">
                            {post.frontmatter.tags.map(tag => (
                                <Tag key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    } */}
                </div>
            </Link>
        )
    }
}

export default ProjectCard;