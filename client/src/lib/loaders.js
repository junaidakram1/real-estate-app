import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];
  const postResponse = await apiRequest("/posts?" + query);
  return {
    postResponse,
  };
};

export const profilePageLoader = async () => {
  const [postResponse, chatResponse] = await Promise.all([
    apiRequest("/users/profilePosts"),
    apiRequest("/chats"),
  ]);

  return {
    postResponse,
    chatResponse,
  };
};
