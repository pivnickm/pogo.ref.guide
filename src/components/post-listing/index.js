import React, { Component } from 'react'
import PostCard from '../post-card'

class PostListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: true,
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false })
    } else {
      this.setState({ mobile: true })
    }
  }

  render() {
    const { posts } = this.props
    const { mobile } = this.state
    const coverHeight = mobile ? 162 : 225
    return (
      <div className="md-grid md-cell--8 mobile-fix">
        {posts.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard
            key={node.frontmatter.title}
            cardContent={node}
            coverHeight={coverHeight}
            mobile={mobile}
          />
        ))}
      </div>
    )
  }
}

export default PostListing
