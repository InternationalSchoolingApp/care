import { db } from "../../app/firebase/app"
import { collection, doc, getDoc, setDoc } from "firebase/firestore";


export default async (req, res) => {

    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'failed', message: 'Method Not Allowed' });
    }

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ status: 'failed', message: 'Required data missing in the request body' });
    }
    const postContent = collection(db, "POSTS");
    const postQuery = doc(postContent, url);
    const postDocSnapshot = await getDoc(postQuery);

    if (postDocSnapshot.exists()) {
        return res.status(200).json({ status: 'success', message: 'Getting Post Data', data: postDocSnapshot.data() });
    } else {
        return res.status(200).json({ status: 'failed', message: 'No Post Found' });
    }


};
