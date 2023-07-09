const key = "AIzaSyBjw06xeg9m4rqmvgitvAdndX_usVCCP4c";
const qKey = "?key=" + key;
const blogId = "1752107249987706193"
const base = "https://www.googleapis.com/blogger/v3/blogs/"
const blogs = base + blogId;
const posts = blogs + "/posts"
loadBlogs = () => {
    $.get(blogs + qKey)
};