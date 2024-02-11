import { buildConfig } from 'payload/config';
import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import Examples from './collections/Examples';
import Users from './collections/Users';
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { webpackBundler } from '@payloadcms/bundler-webpack';
import ResourcesCollection from './collections/Resources';
import DepartmentsCollection from './collections/Departments';
import BookingsCollection from './collections/Bookings';
import { getResource } from './endpoints/getResource';

export default buildConfig({
  serverURL: 'http://localhost:3000',
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
    BookingsCollection,
    // Add Collections here
    // Examples,
  ],
  endpoints: [
    { method: 'get', path: '/get-resource', handler: getResource },
],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
