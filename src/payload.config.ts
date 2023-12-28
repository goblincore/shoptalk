import { buildConfig } from 'payload/config';
import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import Examples from './collections/Examples';
import Users from './collections/Users';
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  db: mongooseAdapter({}),
  editor: lexicalEditor({}),
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
