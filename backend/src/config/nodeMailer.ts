import nodemailer from 'nodemailer'
import {config} from 'dotenv'
config()

type emailProps = {
  firstName:string,
  email:string,
  message:string
}

const transport = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.ADMIN_EMAIL,
    pass:process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Skip certificate verification
  }
})

export const sendEmail = async({firstName,email,message}:emailProps)=>{
  let mailOptions = {
    from:`"Portfolio Contact" <${process.env.ADMIN_EMAIL}>`,
    to:process.env.ADMIN_EMAIL,
    replyTo:email,
    subject:"new Contact from message",
    text:`Name: ${firstName}
    Email:${email}
    
    Message:${message}`
  }
return transport.sendMail(mailOptions)
}