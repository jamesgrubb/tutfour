export const cleanPath = (path) => {
return(
    path.replace(/^\/|\/$/g, '').charAt(0).toUpperCase() + path.replace(/^\/|\/$/g, '').slice(1)
)
}