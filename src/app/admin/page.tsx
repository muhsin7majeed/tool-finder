type Tool = {
  id: string;
  name: string;
  image?: string;
  description: string;
  gitLink?: string;
  toolLink?: string;
};

const TOOLS_LIST: Tool[] = [
  {
    id: "sejda-pdf",
    name: "Sejda PDF",
    description: "Free online PDF editor",
  },
];

export default function AdminPage() {
  return (
    <>
      <h1>Admin Page</h1>

      <h2>Manage Tools</h2>

      <ul>
        <li>Tool One</li>
        <li>Tool Two</li>
        <li>Tool Three</li>
      </ul>
    </>
  );
}
