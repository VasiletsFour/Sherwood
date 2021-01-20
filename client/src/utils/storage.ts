export const getToken = () => {
    const token = localStorage.getItem("token")

    return token ? JSON.parse(token) : null
}