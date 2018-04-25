import React from 'react'
import Link from 'gatsby-link'
import { Toolbar, Button } from 'react-md';

const Header = ({ siteTitle }) => (
  <Toolbar
    colored
    nav={<Button icon>menu</Button>}
    title={siteTitle}
    // actions={<KebabMenu id="toolbar-transparent-kebab-menu" />}
  />
)

export default Header
