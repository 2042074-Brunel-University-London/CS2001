import { envsafe, port, str, url } from 'envsafe';

/**
 * Here we define the environment variables we expect to be present in the
 * environment. If any of these are missing, envsafe will throw an error.
 * 
 * All enivronment variables should be defined here, and then imported into other files as needed.
 */

export const env = envsafe({
    NODE_ENV: str({
        devDefault: 'development',
        choices: ['development', 'test', 'production'],
    }),
    PORT: port({
        devDefault: 3000,
        desc: 'The port the app is running on',
        example: 80,
    }),
});