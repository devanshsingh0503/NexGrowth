import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'devanshnexgrowth@gmail.com';

    console.log('--- New Quick Call Request ---');
    console.log(`Phone Number: ${phone}`);
    console.log('------------------------------');

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn('Warning: SMTP environment variables are not fully configured. Email was not sent, but the phone number was logged above.');
      return NextResponse.json({
        success: true,
        message: 'Phone number logged (SMTP not configured).'
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort) || 587,
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"NexGrowth Discovery Call" <${smtpUser}>`,
      to: receiverEmail,
      subject: `New Discovery Call Request: ${phone}`,
      text: `A visitor has requested a discovery call.\n\nContact Number: ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 500px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #ff77c9; border-bottom: 2px solid #ff77c9; padding-bottom: 10px;">New Discovery Call Request</h2>
          <p>A visitor has requested a discovery call. Please call them back at your earliest convenience.</p>
          <p style="font-size: 1.4rem; padding: 10px 15px; background: #f9f9f9; border-left: 4px solid #ff77c9; border-radius: 4px; display: inline-block;">
            <strong>Phone Number:</strong> <a href="tel:${phone}">${phone}</a>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Request sent successfully!' });
  } catch (error: any) {
    console.error('Error sending quick call email:', error);
    return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 });
  }
}
