import React from "react";
import sanityClient from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import {
  PostsContainer,
  PostsFlex,
  PostItem,
  PostImage,
  PostTitle,
} from "../../styles/components/data/posts";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function Posts({ contentful, datocms, sanity, strapi }) {
  console.log(contentful);
  return (
    <PostsContainer>
      <div className="container-inside">
        <PostsFlex>
          {datocms?.map((item) => (
            <PostItem key={item.id}>
              <PostImage src={item.image.url} />
              <PostTitle>{item.text}</PostTitle>
              <p>{item.description}</p>
            </PostItem>
          ))}

          {contentful?.map((item) => (
            <PostItem key={item.sys.id}>
              <PostImage src={item.fields.image.fields.file.url} />
              <PostTitle>{item.fields.title}</PostTitle>
              <p>{item.fields.description}</p>
            </PostItem>
          ))}

          {strapi?.map((item) => (
            <PostItem key={item.id}>{item.title}</PostItem>
          ))}

          {sanity?.map((item) => (
            <PostItem key={item._id}>
              <PostImage src={urlFor(item.mainImage).url()} />
              <PostTitle>{item.title}</PostTitle>
              <BlockContent
                blocks={item.body}
                imageOptions={{ w: 300, h: 240, fit: "max" }}
                {...sanityClient.config()}
              />
            </PostItem>
          ))}
        </PostsFlex>
      </div>
    </PostsContainer>
  );
}

export default Posts;
