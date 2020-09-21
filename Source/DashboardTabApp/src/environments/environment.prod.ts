export const environment = {
    production: false,
    apiBaseUrl: "https://qbotmokkar.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "eda8e079-ea9d-410e-951e-78475c2fd675",
        clientId: "0554b107-a91f-4ff9-bf46-9008b7312dc6",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
