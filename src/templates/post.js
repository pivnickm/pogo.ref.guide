import React from 'react';
import { Card, CardText, CardTitle } from 'react-md';
import PostCover from '../components/post-cover';
import PostInfo from '../components/post-info';
import './post.scss';

class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile } = this.state;
    const { slug } = this.props.pathContext;
    const expanded = !mobile;
    const postOverlapClass = mobile ? 'post-overlap-mobile' : 'post-overlap';
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    return (
      <div className="post-page md-grid md-grid--no-spacing">
        <PostCover postNode={postNode} mobile={mobile} />
        <div
          className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}
        >
          <Card className="md-grid md-cell md-cell--12 post">
            <CardText className="post-body">
              <h1 className="md-display-2 post-header">{post.title}</h1>
              <PostInfo postNode={postNode} />
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}
export default PostTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }
  }
`;
