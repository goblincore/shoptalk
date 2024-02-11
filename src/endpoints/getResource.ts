import { PayloadHandler } from 'payload/config';
import payload from 'payload';


export const getResource: PayloadHandler = async (req, res) => {
    try {
        if (req?.body?.id) return;
        const resource = await payload.findByID({
            id: req?.body?.id,
            collection: 'resource',
            depth: 3,
        });

        res.status(200).json(resource);;
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};
