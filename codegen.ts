import { BASE_URI } from './src/libs/swop-apollo-client';
import { CodegenConfig } from '@graphql-codegen/cli';

const { SWOP_API_TOKEN } = process.env;

const config: CodegenConfig = {
  schema: `${BASE_URI}?api-key=${SWOP_API_TOKEN}`,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;