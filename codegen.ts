import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://enjoyed-maggot-92.hasura.app/v1/graphql": {
        headers: {
          "x-hasura-access-key":
            "fU9j4fRMA6gn4vr0863L8xeuaecDA8vBbxW3JVjkd9IhfYiaGiTxog81oYKZ2Jna",
        },
      },
    },
  ],
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  overwrite: true,
  generates: {
    "./src/generated/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
