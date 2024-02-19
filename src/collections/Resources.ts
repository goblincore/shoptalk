import payload from 'payload';
import { CollectionConfig } from 'payload/types';

const ResourcesCollection: CollectionConfig = {
    slug: 'resource',
    admin: {
        disableDuplicate: true,
        hideAPIURL: true,
    },
    fields: [
        { name: 'name', type: 'text' },
        { name: 'description', type: 'text' },
        { name: 'costPerHr', type: 'number' },
        {
            name: 'department',
            type: 'relationship',
            required: true,
            relationTo: 'department',
            hasMany: false,
        },
    ],
};

export default ResourcesCollection;
