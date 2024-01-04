import payload from 'payload';
import { CollectionConfig } from 'payload/types';

const DepartmentsCollection: CollectionConfig = {
    slug: 'department',
    admin: {
        disableDuplicate: true,
        hideAPIURL: true,
    },
    fields: [
        { name: 'name', type: 'text' },
        { name: 'description', type: 'text' },
    ],
};

export default DepartmentsCollection;
