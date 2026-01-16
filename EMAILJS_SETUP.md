# EmailJS Setup Instructions

This guide will help you set up EmailJS to send order notifications to `orders@idplugmaster.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (or log in if you already have one)
3. The free plan includes 200 emails per month

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Note your Service ID** (e.g., `service_xxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Configure the template settings with these values:

### Template Configuration Settings:

- **Template Name**: `Order Notification`
- **Subject**: `New Order #{{order_id}} - {{product}}`
- **To Email**: `orders@idplugmaster.com` (this is where you'll receive order notifications)
- **From Name**: `ID Plug Master Order System` (or any name you prefer)
- **From Email**: Check "Use Default Email Address" (this uses your EmailJS service email)
- **Reply To**: `{{customer_email}}` (this allows you to reply directly to the customer)
- **Bcc**: (leave empty, or add additional emails if needed)
- **Cc**: (leave empty)

4. Use the following HTML template content:

### Template Settings - Fill in these exact values:

**To Email**: `orders@idplugmaster.com` ⚠️ (Required - this is where you'll receive all order notifications)

**From Name**: `ID Plug Master Order System` (or any name you prefer - this appears as the sender name)

**From Email**: ✅ **Check the box "Use Default Email Address"** (this uses your EmailJS service email - recommended)

**Reply To**: `{{customer_email}}` (this allows you to reply directly to the customer who placed the order)

**Bcc**: (leave empty - optional)

**Cc**: (leave empty - optional)

**Subject**: `New Order #{{order_id}} - {{product}}`

### Template Content (HTML):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .order-info {
      background-color: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #e9ecef;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: bold;
      color: #495057;
    }
    .info-value {
      color: #212529;
    }
    .section {
      margin: 25px 0;
    }
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #667eea;
    }
    .highlight {
      background-color: #fff3cd;
      padding: 15px;
      border-radius: 4px;
      border-left: 4px solid #ffc107;
      margin: 15px 0;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #dee2e6;
      text-align: center;
      color: #6c757d;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🛒 New Order Received</h1>
    </div>

    <div class="order-info">
      <div class="info-row">
        <span class="info-label">Order ID:</span>
        <span class="info-value"><strong>#{{order_id}}</strong></span>
      </div>
      <div class="info-row">
        <span class="info-label">Order Date:</span>
        <span class="info-value">{{order_date}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Product:</span>
        <span class="info-value"><strong>{{product}}</strong></span>
      </div>
      <div class="info-row">
        <span class="info-label">Quantity:</span>
        <span class="info-value">{{quantity}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Total Price:</span>
        <span class="info-value"><strong style="color: #28a745; font-size: 18px;">{{total_price}}</strong></span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">👤 Customer Information</div>
      <div class="info-row">
        <span class="info-label">Full Name:</span>
        <span class="info-value">{{full_name}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Email:</span>
        <span class="info-value">{{customer_email}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Contact Method:</span>
        <span class="info-value">{{contact_method}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Contact Value:</span>
        <span class="info-value">{{contact_value}}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">📋 Personal Details</div>
      <div class="info-row">
        <span class="info-label">First Name:</span>
        <span class="info-value">{{first_name}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Middle Name:</span>
        <span class="info-value">{{middle_name}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Last Name:</span>
        <span class="info-value">{{last_name}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Sex:</span>
        <span class="info-value">{{sex}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Birthday:</span>
        <span class="info-value">{{birthday}}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">👁️ Physical Attributes</div>
      <div class="info-row">
        <span class="info-label">Hair Color:</span>
        <span class="info-value">{{hair_color}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Eyes Color:</span>
        <span class="info-value">{{eyes_color}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Height:</span>
        <span class="info-value">{{height}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Weight:</span>
        <span class="info-value">{{weight}}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">📍 Address</div>
      <div class="highlight">
        {{address}}
      </div>
    </div>

    <div class="section">
      <div class="section-title">✏️ Customization Notes</div>
      <div class="highlight">
        {{customize}}
      </div>
    </div>

    <div class="section">
      <div class="section-title">💳 Payment Method</div>
      <div class="info-row">
        <span class="info-label">Selected Payment:</span>
        <span class="info-value"><strong>{{payment_method}}</strong></span>
      </div>
    </div>

    <div class="footer">
      <p>This is an automated email from your order system.</p>
      <p>Order details are also stored in Firestore database.</p>
    </div>
  </div>
</body>
</html>
```

4. **Save the template** and **note your Template ID** (e.g., `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)
3. Copy it

## Step 5: Add Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

**Replace the values with your actual IDs from EmailJS.**

## Step 6: Template Variables Reference

The following variables are available in your email template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{order_id}}` | Unique order ID from Firestore | `abc123xyz` |
| `{{order_date}}` | Formatted order date | `December 14, 2026, 10:30 AM EST` |
| `{{product}}` | Product name | `California` |
| `{{quantity}}` | Order quantity | `2` |
| `{{total_price}}` | Total price with $ sign | `$200` |
| `{{customer_email}}` | Customer email address | `customer@example.com` |
| `{{contact_method}}` | Contact method (WhatsApp/Telegram) | `WhatsApp` |
| `{{contact_value}}` | Contact value (phone number) | `+1234567890` |
| `{{first_name}}` | Customer first name | `John` |
| `{{middle_name}}` | Customer middle name | `Michael` or `N/A` |
| `{{last_name}}` | Customer last name | `Doe` |
| `{{full_name}}` | Full name combined | `John Michael Doe` |
| `{{sex}}` | Gender | `M` or `F` |
| `{{birthday}}` | Date of birth | `01/15/1990` |
| `{{hair_color}}` | Hair color | `Brown` |
| `{{eyes_color}}` | Eye color | `Blue` |
| `{{height}}` | Height | `6'0"` |
| `{{weight}}` | Weight | `180 lbs` |
| `{{address}}` | Shipping address | `123 Main St, City, State 12345` |
| `{{customize}}` | Customization notes | `None` or custom text |
| `{{payment_method}}` | Payment method selected | `Cryptocurrency`, `Apple Pay`, `CashApp`, `Zelle`, `Bank Transfer` |

## Step 7: Test Your Setup

1. Place a test order on your website
2. Check your email at `orders@idplugmaster.com`
3. Verify all information is displayed correctly

## Troubleshooting

- **Email not sending**: Check that all environment variables are set correctly
- **Template variables not showing**: Make sure variable names match exactly (case-sensitive)
- **Service connection issues**: Verify your email service is properly connected in EmailJS dashboard

## Notes

- Photos and signatures are stored in Firestore, not sent via email (due to size limitations)
- Email sending failures won't block order submission - orders are still saved to Firestore
- Check EmailJS dashboard for email delivery status and logs

