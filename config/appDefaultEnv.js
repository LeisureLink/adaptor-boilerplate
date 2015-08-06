// Loads all required environment variables from default values.
// This is only for assisting developers and should not be included in the Docker image.

// Note: DO NOT CHECK SENSITIVE VALUES INTO REPO - user names, passwords, API keys, etc.
//       For the boilerplate adaptor, an example of what should be in Confluence can be found in
//       exampleConfluence.txt in the repository root.

if (!process.env.TEST_SERVER_PORT) {
    process.env.TEST_SERVER_PORT = '3016';
}

if (!process.env.TEST_LEISURE_LINK_API_BASE) {
    process.env.TEST_LEISURE_LINK_API_BASE = 'https://api-dev.leisurelink.com/v1/';
}