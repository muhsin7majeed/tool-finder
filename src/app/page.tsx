import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const CATEGORY_N_TOOLS = [
  {
    id: "category-one",
    name: "Category One",
    tools: [
      {
        id: "tool-one",
        name: "tool-one",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-two",
        name: "tool-one",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-three",
        name: "tool-one",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-four",
        name: "tool-one",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
    ],
  },
  {
    id: "category-two",
    name: "Category two",
    tools: [
      {
        id: "tool-one",
        name: "tool-two",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratitwo, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-two",
        name: "tool-two",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratitwo, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-three",
        name: "tool-two",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratitwo, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-four",
        name: "tool-two",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
    ],
  },
  {
    id: "category-three",
    name: "Category three",
    tools: [
      {
        id: "tool-one",
        name: "tool-three",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-two",
        name: "tool-three",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-three",
        name: "tool-three",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-four",
        name: "tool-three",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
    ],
  },
  {
    id: "category-four",
    name: "Category four",
    tools: [
      {
        id: "tool-one",
        name: "tool-four",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-two",
        name: "tool-four",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-three",
        name: "tool-four",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
      {
        id: "tool-four",
        name: "tool-four",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus laborum culpa ratione, quod
      voluptatem, minima odio deleniti ea ipsum quia, illum aliquid commodi illo quae aperiam hic ipsa. Quidem!`,
      },
    ],
  },
];

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
        return (
          <Box key={category.id} mb="2rem">
            <Text fontWeight="600" color="teal" mb="1rem" fontSize="1.5rem">
              {category.name}
            </Text>

            <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10}>
              {category.tools.map((tool) => {
                return (
                  <Box key={tool.id}>
                    <Card w="100%">
                      <CardHeader>
                        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                          <Avatar name={tool.name} src="#" />

                          <Box>
                            <Heading size="sm">{tool.name}</Heading>
                          </Box>
                        </Flex>
                      </CardHeader>

                      <CardBody>
                        <Text>{tool.description}</Text>
                      </CardBody>

                      <CardFooter justifyContent="end" gap="1rem" color="teal">
                        <Link href="#">Website</Link>

                        <Link href="#">Git</Link>
                      </CardFooter>
                    </Card>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        );
      })}
    </>
  );
}
