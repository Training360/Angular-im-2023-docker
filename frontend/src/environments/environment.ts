export const environment = {
    production: true,
    apiUrl: () => {
        const host = window.location.host.includes('localhost') ? 'localhost:3000' : window.location.host;
        return `${window.location.protocol}//${host}/`;
    }
};
