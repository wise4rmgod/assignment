import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/canton-participant-node-api",
    },
    {
      type: "category",
      label: "Endpoint",
      items: [
        {
          type: "doc",
          id: "api/allocate-party",
          label: "Allocate a new Party",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/submit-command",
          label: "Submit a command (transaction)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-active-contracts",
          label: "Query active contracts",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
