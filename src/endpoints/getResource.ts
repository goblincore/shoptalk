import { PayloadHandler } from 'payload/config';
import payload from 'payload';


export const getResource: PayloadHandler = async (req, res) => {
    console.log('///req query', req?.query?.resource);
    try {
        if(!req?.query?.resource) throw new Error('No resource id provided');
        const resource = await payload.findByID({
            id: req?.query?.resource,
            collection: 'resource',
            depth: 3,
        });

        console.log('///resource', resource);

        res.status(200).json(resource);;
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};
