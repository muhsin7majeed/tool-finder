import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import ToolCard from "./ToolCard";

export default function Category({ category }: any) {
  return (
    <>
      <Box mb="2rem">
        <Text fontWeight="600" color="teal" mb="1rem" fontSize="1.5rem">
          {category.name}
        </Text>

        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10}>
          {category.tools.map((tool) => {
            return <ToolCard key={tool.id} tool={tool} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
