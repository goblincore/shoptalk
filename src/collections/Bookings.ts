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
        { name: 'times', type: 'text' },
        { name: 'description', type: 'text' },
    ],
};

export default BookingsCollection;
