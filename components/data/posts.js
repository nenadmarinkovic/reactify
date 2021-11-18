import React from "react";
import sanityClient from "../../lib/sanity";
import {
  PostsContainer,
  PostsFlex,
  PostItem,
  PostImage,
} from "../../styles/components/data/posts";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function Posts({ contentful, datocms, sanity, strapi }) {
  return (
    <PostsContainer>
      <div className="container">
        <PostsFlex>
          {datocms?.map((item) => (
            <PostItem key={item.id}>{item.text}</PostItem>
          ))}
        </PostsFlex>

        <PostsFlex>
          {contentful?.map((item) => (
            <PostItem key={item.sys.id}>{item.fields.title}</PostItem>
          ))}
        </PostsFlex>

        <PostsFlex>
          {strapi?.map((item) => (
            <PostItem key={item.id}>{item.title}</PostItem>
          ))}
        </PostsFlex>

        <PostsFlex>
          {sanity?.map((item) => (
            <PostItem key={item._id}>
              <PostImage src={urlFor(item.mainImage).url()} />
              <span>{item.title}</span>
            </PostItem>
          ))}
        </PostsFlex>
      </div>
    </PostsContainer>
  );
}

export default Posts;
