const callApi = async(url, options = {}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch("http://localhost:3002/api" + url, options);
    const data = await response.json();
    //console.log("data ",data);
    return data;
};

const api = {
    products: {
        list() {
            return callApi("/products");
        },
        create(producto) {
            return callApi("/products", {
                method: "POST",
                body: JSON.stringify(producto),
            });
        },
        delete(id) {
            return callApi(`/products/${id}`, {
                method: "DELETE",
            });
        },
        edit(producto) {
            return callApi(`/products/${producto._id}`, {
                method: "PUT",
                body: JSON.stringify(producto),
            });
        },
        getProduct(id) {
            return callApi(`/products/${id}`);
        },
        find(name) {
            return callApi(`/products/${name}`);
          },
    },
    categorias: {
        list() {
            return callApi("/categoria");
        },
    },
    users: {
        list() {
            return callApi("/users");
        },
        delete(id) {
            console.log("users.delete() api.js ",id);
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
         getUsers(id) {
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
                return callApi("/categoria");
            },
    },
    ventas: {
        list() {
            return callApi("/ventas");
        },
        create(venta) {
            return callApi("/ventas", {
                method: "POST",
                body: JSON.stringify(venta),
            });
        },
        delete(id) {
            return callApi(`/ventas/${id}`, {
                method: "DELETE",
            });
        },
        edit(venta) {
            return callApi(`/ventas/${venta._id}`, {
                method: "PUT",
                body: JSON.stringify(venta),
            });
        },
        getVenta(id) {
            return callApi(`/ventas/${id}`);
        },
        find(name) {
            return callApi(`/ventas/${name}`);
          },
    }, 
};

export default api;
