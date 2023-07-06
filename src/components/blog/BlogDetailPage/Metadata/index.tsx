/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-nocheck
import React from 'react';
import PageMetadata from '../../PageMetadata';
import { useBlogPost } from '@docusaurus/theme-common/internal';

export default function BlogPostPageMetadata() {
  const { metadata } = useBlogPost();
  const {title, description, date, tags, authors, frontMatter} = metadata;
  const {keywords} = frontMatter;

  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={keywords}
      ogType='article'
      image={require(`@site/static/img/blog/${frontMatter.image}`).default}>
      <meta property="article:published_time" content={date} />
      {/* TODO double check those article meta array syntaxes, see https://ogp.me/#array */}
      {authors.some((author) => author.url) && (
        <meta
          property="article:author"
          content={authors
            .map((author) => author.url)
            .filter(Boolean)
            .join(',')}
        />
      )}
      {tags.length > 0 && (
        <meta
          property="article:tag"
          content={tags.map((tag) => tag.label).join(',')}
        />
      )}
    </PageMetadata>
  );
}
