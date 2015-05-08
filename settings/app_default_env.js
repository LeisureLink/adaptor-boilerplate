// Loads all required environment variables from default values.

if (!process.env.TEST_ADAPTOR_PORT) {
    process.env.TEST_ADAPTOR_PORT = '3016';
}

if (!process.env.TEST_LEISURE_LINK_API_BASE) {
    process.env.TEST_LEISURE_LINK_API_BASE = 'https://api-dev.leisurelink.com/v1';
}

// TODO: Substitute value from Confluence
// Note: For the boilerplate adaptor, an example of what should be in Confluence can be found in
//       exampleConfluence.txt in the repository root. DO NOT CHECK SENSITIVE VALUES INTO REPO
if (!process.env.TEST_LEISURE_LINK_API_KEY) {
    //process.env.TEST_LEISURE_LINK_API_KEY = 'INSERT_API_KEY_HERE';
}