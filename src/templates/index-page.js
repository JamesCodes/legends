import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Divider, { DividerPatterns } from "../components/atoms/Divider";
import Splash from "../components/molecules/Splash";
import { Box, Container, Text } from "theme-ui";
import DefinitionList from "../components/molecules/DefinitionList";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  serviceInformation,
  location,
  openHours,
  ...rest
}) => (
  <>
    <Splash
      image={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    >
      <Box sx={{ width: "100%" }}>
        <Container pt={[3, 4, 4, 4, 4]} pb={4}>
          <Box>
            <Divider />
            <Box mt={[3, 4, 4, 4, 4]} mb={[2, 3, 3, 3, 3]}>
              <Text as="h1" variant="styles.h1" pb={2}>
                {heading}
              </Text>
            </Box>
            <Divider pattern={DividerPatterns.TITLE} />
          </Box>
        </Container>
      </Box>
    </Splash>

    {serviceInformation && (
      <Container mt={[5, 5, 5, 5, 6]}>
        <Box>
          {serviceInformation.heading && (
            <Text as="h2" variant="styles.h2">
              {serviceInformation.heading}
            </Text>
          )}
          {serviceInformation.description && (
            <Text as="p" variant="styles.p">
              {serviceInformation.description}
            </Text>
          )}
          {serviceInformation.services && serviceInformation.services.length && (
            <DefinitionList
              definitions={serviceInformation.services.map(
                ({ name: title, cost }) => ({
                  title,
                  definition: `£${cost}`,
                })
              )}
            />
          )}
        </Box>
      </Container>
    )}

    <Container sx={{ opacity: 0.5 }} py={[5, 5, 5, 5, 6]}>
      <Divider />
    </Container>

    {openHours && (
      <Container>
        <Box>
          {openHours.heading && (
            <Text as="h2" variant="styles.h2">
              {openHours.heading}
            </Text>
          )}
          {openHours.description && (
            <Text as="p" variant="styles.p">
              {openHours.description}
            </Text>
          )}
          {openHours.days && openHours.days.length && (
            <DefinitionList
              definitions={openHours.days.map(
                ({ name: title, hours: definition }) => ({
                  title,
                  definition,
                })
              )}
            />
          )}
        </Box>
      </Container>
    )}

    <Container sx={{ opacity: 0.5 }} py={[5, 5, 5, 5, 6]}>
      <Divider />
    </Container>

    {location && (
      <>
        <Container>
          <Box pb={[3, 3, 3, 3, 5]}>
            {location.heading && (
              <Text as="h2" variant="styles.h2">
                {location.heading}
              </Text>
            )}
            {location.description && (
              <Text as="p" variant="styles.p">
                {location.description}
              </Text>
            )}
          </Box>
        </Container>
        <iframe
          src="https://snazzymaps.com/embed/235315"
          width="100%"
          height="600px"
          style={{ border: "none", display: 'block' }}
          title="Our location"
        ></iframe>
      </>
    )}
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  serviceInformation: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        cost: PropTypes.string,
      })
    ),
  }),
  location: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  openHours: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    days: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        hours: PropTypes.string,
      })
    ),
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
        location={frontmatter.location}
        openHours={frontmatter.openHours}
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
        location {
          heading
          description
        }
        openHours {
          heading
          description
          days {
            name
            hours
          }
        }
      }
    }
  }
`;
