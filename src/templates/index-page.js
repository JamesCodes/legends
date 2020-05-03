import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Splash from "../components/molecules/Splash";
import { Container, Text } from "theme-ui";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  ...rest
}) => (
  <>
    {console.log({ rest })}
    <Splash
      image={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    <Container py={5}>
      <Text as="h1" variant="styles.h1">
        {heading}
      </Text>
      <Text as="p" variant="styles.p">
        {description}
      </Text>
    </Container>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log({ frontmatter });

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        serviceInformation={frontmatter.serviceInformation}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        serviceInformation {
          heading
          description
          services {
            name
            cost
          }
        }
      }
    }
  }
`;
