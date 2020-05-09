import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Divider, { DividerPatterns } from "../components/atoms/Divider";
import Splash from "../components/molecules/Splash";
import { Box, Container, Flex, Text } from "theme-ui";
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
            <Box my={[2, 2, 2, 2, 2]}>
              <Text
                as="h1"
                variant="styles.h1"
                pt={["0.5rem", "0.5rem", "0.25rem", "0.5rem", "0.75rem"]}
              >
                {heading}
              </Text>
            </Box>
            <Divider pattern={DividerPatterns.TITLE} />
          </Box>
        </Container>
      </Box>
    </Splash>

    {serviceInformation && (
      <Container py={[5, 5, 5, 5, 6]}>
        <Box>
          <Text as="h2" variant="styles.h2">
            Services
          </Text>
          {serviceInformation.heading && (
            <Text as="h3" variant="styles.h3">
              {serviceInformation.heading}
            </Text>
          )}
          <Box pt={2} mb={5} sx={{ maxWidth: 400, mx: "auto" }}>
            <Divider pattern={DividerPatterns.SUBTITLE} />
          </Box>

          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Flex
              sx={{
                width: ["100%", "100%", "100%", "60%", "60%"],
                mr: [0, 0, 0, "10%", "10%"],
                mb: [3, 3, 3, 0, 0],
                alignItems: "center",
              }}
            >
              {serviceInformation.description && (
                <Text as="p" variant="styles.p">
                  {serviceInformation.description}
                </Text>
              )}
            </Flex>
            <Box sx={{ width: ["100%", "100%", "100%", "30%", "30%"] }}>
              {serviceInformation.services &&
                serviceInformation.services.length && (
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
          </Flex>
        </Box>
      </Container>
    )}

    {openHours && (
      <Box bg="darkerBackground" py={[5, 5, 5, 5, 6]}>
        <Container>
          <Box>
            <Text as="h2" variant="styles.h2">
              Open hours
            </Text>
            {openHours.heading && (
              <Text as="h3" variant="styles.h3">
                {openHours.heading}
              </Text>
            )}
            <Box pt={2} mb={5} sx={{ maxWidth: 400, mx: "auto" }}>
              <Divider pattern={DividerPatterns.SUBTITLE} />
            </Box>
            <Flex
              sx={{
                flexWrap: "wrap",
                flexDirection: [
                  "column-reverse",
                  "column-reverse",
                  "column-reverse",
                  "row",
                  "row",
                ],
              }}
            >
              <Box
                sx={{
                  width: ["100%", "100%", "100%", "30%", "30%"],
                }}
              >
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
              <Flex
                sx={{
                  width: ["100%", "100%", "100%", "60%", "60%"],
                  ml: [0, 0, 0, "10%", "10%"],
                  mb: [3, 3, 3, 0, 0],
                  alignItems: "center",
                }}
              >
                {openHours.description && (
                  <Text as="p" variant="styles.p">
                    {openHours.description}
                  </Text>
                )}
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    )}

    {location && (
      <>
        <Container>
          <Box my={[5, 5, 5, 5, 6]}>
            <Text as="h2" variant="styles.h2">
              Location
            </Text>
            {openHours.heading && (
              <Text as="h3" variant="styles.h3">
                {location.heading}
              </Text>
            )}
            <Box pt={2} mb={5} sx={{ maxWidth: 400, mx: "auto" }}>
              <Divider pattern={DividerPatterns.SUBTITLE} />
            </Box>

            <Flex
              sx={{
                flexWrap: "wrap",
                flexDirection: [
                  "column-reverse",
                  "column-reverse",
                  "column-reverse",
                  "row",
                  "row",
                ],
              }}
            >
              <Box
                sx={{
                  width: ["100%", "100%", "100%", "60%", "60%"],
                  mr: [0, 0, 0, "10%", "10%"],
                  mb: [3, 3, 0, 0, 0],
                  alignItems: "center",
                }}
              >
                <Box
                  as="iframe"
                  src="https://snazzymaps.com/embed/235315"
                  width="100%"
                  height={["300px", "300px", "300px", "600px", "600px"]}
                  sx={{ border: "none", display: "block" }}
                  title="Our location"
                />
              </Box>
              <Flex
                sx={{
                  width: ["100%", "100%", "100%", "30%", "30%"],
                  alignItems: "center",
                }}
              >
                {location.description && (
                  <Text as="p" variant="styles.p">
                    {location.description}
                  </Text>
                )}
              </Flex>
            </Flex>
          </Box>
        </Container>
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
