import {
  Configuration,
  AlignmentApi,
  ApiApi,
} from "../generated-sources/openapi";

export const alignmentSearch = (sequence: string, genomes: Array<string>) => {
  const headers = authHeader();
  const configuration = new Configuration({
    basePath: "",
    headers: headers,
  });
  const alignmentApi = new AlignmentApi(configuration);
  return alignmentApi.alignmentSearchRetrieve({
    sequence: sequence,
    genomes: genomes,
  }) 
  .then((response) => {
    return response;
  });;
};

export const alignmentList = () => {
  const headers = authHeader();
  const configuration = new Configuration({
    basePath: "",
    headers: headers,
  });
  const alignmentApi = new AlignmentApi(configuration);
  return alignmentApi.alignmentList()
  .then((response) => {
    return response;
  });;
};

export const login = (username: string, password: string) => {
  const headers = authHeader();
  const configuration = new Configuration({
    basePath: "",
    headers: headers,
  });
  const authApi = new ApiApi(configuration);
  return authApi
    .apiTokenCreate({
      tokenObtainPair: {
        username: username,
        password: password,
        access: "",
        refresh: "",
      },
    })
    .then((response) => {
      if (response.access) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      return response;
    });
};
export const logout = () => {
  localStorage.removeItem("user");
};
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};
const authHeader = () => {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) user = JSON.parse(userStr);
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return { Authorization: "" };
  }
};
