import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Link, Text } from "@chakra-ui/react";

export default function ToolCard({ tool }) {
  return (
    <>
      <Box>
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
    </>
  );
}
