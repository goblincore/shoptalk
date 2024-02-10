import payload from 'payload';
import { CollectionConfig } from 'payload/types';

const BookingsCollection: CollectionConfig = {
    slug: 'booking',
    admin: {
        disableDuplicate: true,
        hideAPIURL: true,
    },
    fields: [
        { name: 'userName', type: 'text' },
        { name: 'time', type: 'text' },
        {
            name: 'machine',
            type: 'relationship',
            required: true,
            relationTo: 'resource',
            hasMany: false,
        },
        { name: 'description', type: 'text' },
    ],
};

export default BookingsCollection;
