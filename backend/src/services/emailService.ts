import { error } from 'console';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '../config';

const credentials = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
};

const ses = new SESClient({ region: 'us-east-2' });
ses.config.credentials = credentials as any;

function createSendEmailCommand(
    toAddress: string,
    fromAddress: string,
    message: string
) {
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [toAddress],
        },
        Source: fromAddress,
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: 'Sua senha de Acesso ao Sistema',
            },
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: message,
                },
            },
        },
    });
}

export async function sendEmailToken(email: string, token: string) {
    console.log('email: ', email, token);

    const message = `Segue sua senha de acesso: ${token}`;
    const command = createSendEmailCommand(
        email,
        'silvaneimartins34@gmail.com',
        message
    );

    try {
        return await ses.send(command);
    } catch (e) {
        console.log('Error sending email', e);
        return error;
    }
}
