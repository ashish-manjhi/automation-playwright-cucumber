module.exports = {
    headless: false,
    screenshots: true,
    baseUrl: process.env.baseUrl ?? 'https://www.olx.com',
    defaultTimeout: 180000
}