const upload_preset = "phat-food";
const cloud_name = "dxoivzjbw"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

export const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("clod_name", cloud_name);

    const res = await fetch(api_url, {
        method: "POST",
        body: data
    })

    const fileData = await res.json();
    return fileData.url;
}