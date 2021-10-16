const callApi = async (url, options = {}) => {
    options.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  
    const response = await fetch("http://localhost:3002/api" + url, options);
    const data = await response.json();
    return data;
  };
  
  const api = {
    usuarios: {
      list() {
        return callApi("/users");
      },
      create(usuario) {
        return callApi("/users", {
          method: "POST",
          body: JSON.stringify(usuario),
        });
      },
       delete(id) {
         return callApi(`/users/${id}`, {
           method: "DELETE",
         });
       },
       edit(usuario) {
         return callApi(`/users/${usuario._id}`, {
           method: "PUT",
           body: JSON.stringify(usuario),
         });
       },
       getUser(id) {
         return callApi(`/users/${id}`);
       },
      }, 
    roles: {
        list() {
          return callApi("/roles");
        },
      },
      estados: {
        list() {
          return callApi("/roles");
        },
      },
   };

  
  export default api;
  