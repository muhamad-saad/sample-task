import emailjs from 'emailjs-com';
import { mail } from '../config';

const {SERVICE_ID, TEMPLATE_ID, USER_ID} = mail

export const sendMail = async (data: any) => {
    return await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, data, USER_ID)
};