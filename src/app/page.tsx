import { Box, Heading, Text } from "@chakra-ui/react";
import { CATEGORY_N_TOOLS } from "../../__DUMMY_DATA__/categories_and_tools";
import Category from "@/components/Category";

export default function Home() {
  return (
    <>
      <Box as="main" textAlign="center" py="3rem">
        <Heading fontSize="2rem">Curated list of interesting tools!</Heading>
        <Text maxW="80%" m="auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
          voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!
        </Text>
      </Box>

      {CATEGORY_N_TOOLS.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </>
  );
}
