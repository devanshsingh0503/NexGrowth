import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    // Basic validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'devanshnexgrowth@gmail.com';

    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Service: ${projectType}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // If SMTP credentials are not configured, log and return success for local testing
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn('Warning: SMTP environment variables are not fully configured. Email was not sent, but the submission was logged above.');
      return NextResponse.json({
        success: true,
        message: 'Submission received and logged (SMTP not configured).'
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort) || 587,
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: receiverEmail,
      subject: `New NexGrowth Project Brief from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Service Needed: ${projectType}

Project Brief:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #ff77c9; border-bottom: 2px solid #ff77c9; padding-bottom: 10px;">New NexGrowth Project Brief</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Needed:</strong> ${projectType}</p>
          <p><strong>Project Brief:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff77c9; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
