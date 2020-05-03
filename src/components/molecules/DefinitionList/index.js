import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "theme-ui";

const DefinitionList = ({ definitions }) => {
  return (
    <Box
      as="dl"
      sx={{
        width: "100%",
        maxWidth: 768,
        margin: "0 auto",
        mt: [4, 4, 4, 4, 5],
      }}
    >
      {definitions.map(({ title, definition }) => (
        <Flex
          sx={{
            py: 2,
            justifyContent: "space-between",
            borderStyle: "dotted",
            borderColor: "rgba(227, 186, 57, 0.5)",
            borderWidth: [
              "0 0 2px",
              "0 0 2px",
              "0 0 3px",
              "0 0 3px",
              "0 0 3px",
            ],
            width: "100%",
          }}
        >
          <Text as="dt" variant="styles.p" m={0}>
            {title}:
          </Text>
          <Text as="dd" variant="styles.p" m={0}>
            <strong>{definition}</strong>
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

DefinitionList.propTypes = {
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
    })
  ),
};

export default DefinitionList;
