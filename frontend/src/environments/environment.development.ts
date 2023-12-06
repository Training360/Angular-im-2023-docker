export const environment = {
    production: false,
    apiUrl: () => `${window.location.protocol}//${window.location.host.replace(/\:[0-9]+/, ':3000')}/`,
};
