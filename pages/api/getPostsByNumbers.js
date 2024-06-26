import { db } from "../../app/firebase/app";
import { collection, orderBy, query, limit, getDocs, where } from "firebase/firestore";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "failed", message: "Method Not Allowed" });
  }

  const { count, type } = req.body;

  if (!count) {
    return res
      .status(400)
      .json({
        status: "failed",
        message: 'Required data "count" missing in the request body',
      });
  }

  try {
    const postContent = collection(db, "POSTS");
    let q;
    if (type) {
      console.log(type)
      q = query(postContent, where("type", "array-contains", type), orderBy("pubDate", "desc"), limit(count));
    } else {
      q = query(postContent, orderBy("pubDate", "desc"), where(), limit(count));
    }
    const postsQuery = await getDocs(q);

    const posts = [];
    postsQuery.forEach((doc) => {
      posts.push(doc.data());
    });

    if (posts.length > 0) {
      return res
        .status(200)
        .json({ status: "success", message: "Getting Post Data", data: posts });
    } else {
      return res
        .status(200)
        .json({ status: "success", message: "No Posts Found" });
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error fetching posts" });
  }
};
