import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  for (const [key, value] of params.entries()) {
    if (!value || value === "undefined" || value === "null") {
      params.delete(key);
    }
  }

  const postResponse = await apiRequest("/posts?" + params.toString());
  return { postResponse };
};

export const profilePageLoader = async () => {
  const [postResponse, chatResponse] = await Promise.all([
    apiRequest("/users/profilePosts"),
    // apiRequest("/chats"),
  ]);

  return {
    postResponse,
    chatResponse,
  };
};
