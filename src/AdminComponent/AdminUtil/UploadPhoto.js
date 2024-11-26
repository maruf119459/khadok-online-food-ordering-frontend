const uploadPreset = "khadokOnlineFoodOrdering"; // Corrected variable naming style
const cloudName = "dtwroduiu"; // Corrected variable naming style
const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`; // Use `cloudName` dynamically

export const uploadphoto = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName); // Note: `cloud_name` is not usually required for Cloudinary uploads in this context

    const response = await fetch(apiUrl, {
      method: "POST", // Standardize the method string
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload image: ${response.statusText}`);
    }

    const fileData = await response.json();
    return fileData.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Re-throw the error to handle it upstream
  }
};
