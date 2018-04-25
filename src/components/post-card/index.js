import React from 'react'
import Link from 'gatsby-link'
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Media,
  MediaOverlay
} from 'react-md';

const PostCard = ({ cardContent, coverHeight }) => {
  const { frontmatter, fields } = cardContent
  return (
    <Card
      className="md-grid md-cell md-cell--12"
    >
      <Link style={{ textDecoration: "none" }} to={fields.slug}>
        <Media
          style={{
            backgroundImage: `url(${frontmatter.cover})`,
            height: `${coverHeight}px`
          }}
          className="post-preview-cover"
        >
          <MediaOverlay>
            <CardTitle title={frontmatter.title}>
              <Button raised secondary className="md-cell--right">
                Read
              </Button>
            </CardTitle>
          </MediaOverlay>
        </Media>
      </Link>
      <CardText>
        {frontmatter.description}
      </CardText>
    </Card>
  )
};

export default PostCard
