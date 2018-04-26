import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/navigation';
import "font-awesome/scss/font-awesome.scss";
import './index.scss';

class Layout extends Component {
  getLocalTitle() {
    const currentPath = this.props.location.pathname
      .replace("/", "")
    let title = "";
    if (currentPath === "") {
      title = "Home";
    }
    return title;
  }

  render() {
    const { data, children } = this.props
    const config = {
      siteTitle: data.site.siteMetadata.title
    };
    return (
      <Navigation config={config} LocalTitle={this.getLocalTitle()}>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          {children()}
        </div>
      </Navigation>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
