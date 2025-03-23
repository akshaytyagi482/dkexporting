import { title } from 'process';
import React from 'react'



export const Email = (name: string, intro: string = '', instructions: string = '', buttonColor: string = '#03A4FF', buttonText: string = '', outro: string = '', link: string = '') => {
    const styledEmail = {
        body: {
            
            name: name,
            intro: intro || 'Welcome to Our Email Business!',
            // action: {
            //     instructions: instructions || 'Click this button to visit our website.',
            //     button: {
            //         color: buttonColor || '#03A4FF',
            //         text: buttonText || 'visit out website',
            //         link: link || 'https://www.dkexporting.com'
            //     }
            // },
            outro:  [
               "Thank you for reaching out to us. We have received your enquiry and our team is reviewing it. We will get back to you as soon as possible with the necessary details.",
                "If you have any urgent questions, feel free to contact us at +91 91994 78437 or reply to this email. We appreciate your interest and look forward to assisting you."
            ],
           signature: "Best regards"
         }
    };

    const plainText = `
    ${name} ${intro || 'Welcome to Our Email Business!'}
    ${instructions || 'Click this button to visit our website.'}
    ${link || 'https://www.dkexporting.com'}
    ${outro || "Thank you for reaching out to us. We have received your enquiry and our team is reviewing it. We will get back to you as soon as possible with the necessary details. If you have any urgent questions, feel free to contact us at +91 91994 78437 or reply to this email. We appreciate your interest, and look forward to assisting you."}
    `
    return {styledEmail, plainText}
}