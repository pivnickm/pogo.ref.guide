import React, { Component } from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/post-listing';

const IndexPage = ({ data }) => {
  return (
    <PostListing
      posts={data}
    />
  )
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date
            cover
            coverHeight
            description
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
