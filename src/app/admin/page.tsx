import { Heading } from "@chakra-ui/react";
import { CATEGORY_N_TOOLS } from "../../../__DUMMY_DATA__/categories_and_tools";
import Category from "@/components/Category";

type Tool = {
  id: string;
  name: string;
  image?: string;
  description: string;
  gitLink?: string;
  toolLink?: string;
};



export default function AdminPage() {
  return (
    <>
      <h1>Admin Page</h1>

      <Heading>Manage Tools</Heading>
    </>
  );
}
