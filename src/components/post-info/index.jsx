import React, { Component } from "react";
import {
  CardTitle,
  Avatar,
  FontIcon
} from "react-md";
import "./index.scss";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Published on ${post.date}`}
        />
      </div>
    );
  }
}

export default PostInfo;
