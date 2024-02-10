import { buildConfig } from 'payload/config';
import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import Examples from './collections/Examples';
import Users from './collections/Users';
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { webpackBundler } from '@payloadcms/bundler-webpack';
import ResourcesCollection from './collections/Resources';
import DepartmentsCollection from './collections/Departments';

export default buildConfig({
  serverURL: 'https://shoptalk-admin.payloadcms.app',
  cors: '*',
  db: mongooseAdapter({url: process.env.MONGODB_URI}),
  editor: lexicalEditor({}),
  admin: {
    bundler: webpackBundler(),
    user: Users.slug,
  },
  collections: [
    Users,
    DepartmentsCollection,
    ResourcesCollection,
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
