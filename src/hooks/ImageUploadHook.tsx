import { toast } from "react-toastify";
import { CLOUDINARY_URL } from "../config";
import axios from "axios";

//  Image upload hook with better debugging and error handling
const useImageUploadHook = async (image: File): Promise<string | undefined> => {
  if (!image) {
    console.error("No image file provided.");
    toast.error("Please select an image before uploading.");
    return;
  }

  console.log("Function called with image:", image.name);

  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "Blog-Project");
  data.append("cloud_name", "dktr9buob");

  try {
    console.log("Uploading image to Cloudinary...");

    const response = await axios.post(CLOUDINARY_URL, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.data || !response.data.secure_url) {
      throw new Error("Invalid response from Cloudinary.");
    }

    const imgurl = response.data.secure_url;
    console.log("Upload successful! Image URL:", imgurl);

    return imgurl;
  } catch (error: any) {
    console.error(
      "Upload Error:",
      error.response ? error.response.data : error.message
    );
    toast.error("Image upload failed. Please try again.");
    return undefined;
  }
};

export default useImageUploadHook;
