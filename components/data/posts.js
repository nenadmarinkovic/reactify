import React from "react";
import sanityClient from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import {
  PostsContainer,
  PostsFlex,
  PostItem,
  PostImage,
  PostTitle,
  Centered,
} from "../../styles/components/data/posts";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function Posts({ title, contentful, datocms, sanity, graphcms }) {
  return (
    <PostsContainer>
      <div className="container-inside">
        <Centered>
          Data (item model with title, description, image) dynamically fetched
          from {title}:
        </Centered>
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

          {graphcms?.map((item) => (
            <PostItem key={item.id}>
              <PostImage src={item.image.url} />

              <PostTitle>{item.title}</PostTitle>
              <p>{item.description}</p>
            </PostItem>
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
