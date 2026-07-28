import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export interface EmailOrderData {
  product: string;
  quantity: number;
  totalPrice: number;
  social: string;
  socialValue: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  sex: string;
  birthday: string;
  hairColor: string;
  eyesColor: string;
  heightFeet: string;
  heightInches: string;
  weight: string;
  address: string;
  customize: string;
  paymentMethod: string;
  orderId: string;
  orderDate: string;
}

export async function POST(request: NextRequest) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json(
      { error: 'Email configuration missing. Set GMAIL_USER and GMAIL_APP_PASSWORD.' },
      { status: 500 }
    );
  }

  let data: EmailOrderData;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const fullName = `${data.firstName} ${data.middleName || ''} ${data.lastName}`.trim();
  const height = `${data.heightFeet}'${data.heightInches}"`;
  const weight = data.weight ? `${data.weight} lbs` : 'N/A';
  const currency = ['London','Newcastle','Wales','Scotland','Northern Ireland','Birmingham','Manchester','Liverpool','Leeds','Bristol'].includes(data.product) ? '£' : '$';

  // ── Admin email HTML ──────────────────────────────────────────────────────
  const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px;">
  <div style="background:#fff;border-radius:8px;padding:30px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#1a1a1a 0%,#333 100%);color:#c8f135;padding:20px;border-radius:8px 8px 0 0;margin:-30px -30px 30px -30px;text-align:center;">
      <h1 style="margin:0;font-size:24px;color:#c8f135;">🆕 New Order Received</h1>
      <p style="margin:8px 0 0;color:#ccc;font-size:14px;">IDCARDSMEN — Order Management</p>
    </div>
    <div style="background:#f8f9fa;border-left:4px solid #c8f135;padding:15px;margin:20px 0;border-radius:4px;">
      <p style="margin:4px 0"><strong>Order ID:</strong> #${data.orderId}</p>
      <p style="margin:4px 0"><strong>Order Date:</strong> ${data.orderDate}</p>
      <p style="margin:4px 0"><strong>Product:</strong> ${data.product}</p>
      <p style="margin:4px 0"><strong>Quantity:</strong> ${data.quantity}</p>
      <p style="margin:4px 0"><strong>Total Price:</strong> ${currency}${data.totalPrice}</p>
      <p style="margin:4px 0"><strong>Payment Method:</strong> ${data.paymentMethod || 'Not specified'}</p>
    </div>
    <div style="margin:20px 0;">
      <p style="font-size:16px;font-weight:bold;color:#1a1a1a;margin-bottom:10px;">👤 Customer Information</p>
      <p style="margin:4px 0"><strong>Full Name:</strong> ${fullName}</p>
      <p style="margin:4px 0"><strong>Email:</strong> ${data.email}</p>
      <p style="margin:4px 0"><strong>WhatsApp / Contact:</strong> ${data.socialValue}</p>
      <p style="margin:4px 0"><strong>Address:</strong> ${data.address || 'N/A'}</p>
    </div>
    <div style="margin:20px 0;">
      <p style="font-size:16px;font-weight:bold;color:#1a1a1a;margin-bottom:10px;">📋 Card Details</p>
      <p style="margin:4px 0"><strong>Sex:</strong> ${data.sex}</p>
      <p style="margin:4px 0"><strong>Birthday:</strong> ${data.birthday || 'N/A'}</p>
      <p style="margin:4px 0"><strong>Hair Color:</strong> ${data.hairColor}</p>
      <p style="margin:4px 0"><strong>Eyes Color:</strong> ${data.eyesColor}</p>
      <p style="margin:4px 0"><strong>Height:</strong> ${height}</p>
      <p style="margin:4px 0"><strong>Weight:</strong> ${weight}</p>
      <p style="margin:4px 0"><strong>Customization:</strong> ${data.customize || 'None'}</p>
    </div>
    <div style="background:#fffbea;border:1px solid #c8f135;border-radius:6px;padding:12px;margin-top:20px;text-align:center;">
      <p style="margin:0;font-size:13px;color:#555;">Contact customer via WhatsApp: <strong>${data.socialValue}</strong> to confirm order and arrange payment.</p>
    </div>
  </div>
</body>
</html>`;

  // ── Customer confirmation email HTML ──────────────────────────────────────
  const customerHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px;">
  <div style="background:#fff;border-radius:8px;padding:30px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#1a1a1a 0%,#333 100%);color:#c8f135;padding:24px 20px;border-radius:8px 8px 0 0;margin:-30px -30px 30px -30px;text-align:center;">
      <h1 style="margin:0;font-size:26px;color:#c8f135;">✅ Order Received!</h1>
      <p style="margin:8px 0 0;color:#ccc;font-size:14px;">Thank you for choosing IDCARDSMEN</p>
    </div>

    <p style="font-size:16px;">Hi <strong>${data.firstName}</strong>,</p>
    <p>Thank you for placing your order with <strong>IDCARDSMEN</strong> — the #1 trusted source for premium scannable fake IDs.</p>
    <p>We have received your order and our team will be in touch with you <strong>very shortly</strong> via WhatsApp or email to confirm your order details and guide you through the payment process.</p>

    <div style="background:#f8f9fa;border-left:4px solid #c8f135;padding:15px;margin:20px 0;border-radius:4px;">
      <p style="margin:4px 0;font-weight:bold;font-size:15px;">📦 Your Order Summary</p>
      <p style="margin:4px 0"><strong>Order ID:</strong> #${data.orderId}</p>
      <p style="margin:4px 0"><strong>Product:</strong> ${data.product}</p>
      <p style="margin:4px 0"><strong>Quantity:</strong> ${data.quantity}</p>
      <p style="margin:4px 0"><strong>Total:</strong> ${currency}${data.totalPrice}</p>
      <p style="margin:4px 0"><strong>Payment Method:</strong> ${data.paymentMethod || 'To be confirmed'}</p>
    </div>

    <div style="background:#fffbea;border:1px solid #c8f135;border-radius:8px;padding:16px;margin:20px 0;">
      <p style="margin:0 0 8px;font-weight:bold;font-size:15px;">⚡ What happens next?</p>
      <ol style="margin:0;padding-left:20px;">
        <li style="margin-bottom:6px;">Our team will contact you on WhatsApp (<strong>${data.socialValue}</strong>) within a few hours</li>
        <li style="margin-bottom:6px;">We will confirm your card details</li>
        <li style="margin-bottom:6px;">Once payment is confirmed, production begins (1–3 business days)</li>
        <li>Your card ships and arrives in <strong>9–15 days</strong> depending on shipping option</li>
      </ol>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://wa.me/13344468194" style="background:#25D366;color:#fff;padding:12px 28px;border-radius:25px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;">
        💬 Chat with us on WhatsApp
      </a>
    </div>

    <p style="font-size:13px;color:#888;margin-top:24px;">If you have any questions before we reach out, feel free to contact us directly:</p>
    <ul style="font-size:13px;color:#555;margin:0;padding-left:20px;">
      <li>WhatsApp: <a href="https://wa.me/13344468194" style="color:#25D366;">+1 334 446 8194</a></li>
      <li>Telegram: <a href="https://t.me/IDCARDSMEN01" style="color:#229ED9;">@IDCARDSMEN01</a></li>
      <li>Email: <a href="mailto:idcardsmen.orders@gmail.com" style="color:#333;">idcardsmen.orders@gmail.com</a></li>
    </ul>

    <p style="font-size:13px;color:#aaa;margin-top:20px;border-top:1px solid #eee;padding-top:16px;">
      This email was sent because an order was placed on <a href="https://idcardsmen.com" style="color:#c8f135;">idcardsmen.com</a>. If you did not place this order, please ignore this email.
    </p>
  </div>
</body>
</html>`;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user, pass },
    });

    // Send both emails simultaneously
    const emailPromises: Promise<any>[] = [
      // Admin notification
      transporter.sendMail({
        from: `"IDCARDSMEN Orders" <${user}>`,
        to: user,
        replyTo: data.email || data.socialValue,
        subject: `🆕 New Order #${data.orderId} — ${data.product} (${fullName})`,
        html: adminHtml,
        text: `New Order #${data.orderId}\nProduct: ${data.product}\nCustomer: ${fullName}\nContact: ${data.socialValue}\nTotal: ${currency}${data.totalPrice}`,
      }),
    ];

    // Customer confirmation — only if they provided an email
    if (data.email && data.email.includes('@')) {
      emailPromises.push(
        transporter.sendMail({
          from: `"IDCARDSMEN" <${user}>`,
          to: data.email,
          subject: `✅ Order Confirmed #${data.orderId} — IDCARDSMEN`,
          html: customerHtml,
          text: `Hi ${data.firstName}, thank you for your order #${data.orderId} (${data.product}). We will contact you on WhatsApp (${data.socialValue}) shortly to confirm details and arrange payment. Total: ${currency}${data.totalPrice}.`,
        })
      );
    }

    await Promise.all(emailPromises);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Nodemailer error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
