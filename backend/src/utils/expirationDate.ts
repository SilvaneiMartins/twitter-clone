import { EMAIL_TOKEN_EXPIRATION_MINUTES } from "../config";

export const expirationDate = () => {
    const expiration = new Date(
        new Date().getTime() + EMAIL_TOKEN_EXPIRATION_MINUTES * 60 * 1000
    );

    return expiration;
}
