import path from "path";

export const loadContent = (id) => {
    return path.join(__dirname, "content", "post", id + ".jpg");
}