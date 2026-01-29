# Admin Dashboard Setup Guide

## Overview

The admin dashboard allows administrators to view and manage all orders placed through the website. It includes:

- Secure login with username/password authentication
- Professional dashboard UI matching the project design
- View all orders with customer details
- Download customer photos and signatures
- Search and filter orders
- Real-time order statistics

## Access Information

### Login Credentials
- **Username:** `spender`
- **Password:** `Spender123#`

### URLs
- **Local Development:** `http://localhost:3000/admin`
- **Production:** `https://admin.idplugmaster.com` (or your deployed domain)

## Features

### 1. Authentication
- Session-based authentication using browser sessionStorage
- Automatic redirect to login if not authenticated
- Secure logout functionality

### 2. Dashboard
- **Statistics Cards:**
  - Total Orders
  - Pending Orders
  - Total Revenue

### 3. Order Management
- **Search:** Search orders by name, email, product, or order ID
- **Order Details:** Expandable order cards showing:
  - Customer information (name, contact, address)
  - Physical attributes (height, weight, hair/eye color)
  - Order details (product, quantity, price, payment method)
  - Uploaded images (photo and signature) with download buttons
- **Image Downloads:** Download customer photos and signatures as image files

## Firestore Security Rules

To allow the admin dashboard to read orders, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      // Allow anyone to create orders (for public order form)
      allow create: if true;
      
      // For production, restrict read access
      // Option 1: Allow read for now (for admin dashboard testing)
      allow read: if true;
      
      // Option 2: Use Firebase Authentication (recommended for production)
      // allow read: if request.auth != null && request.auth.token.admin == true;
      
      // Only authenticated admins can update/delete
      allow update, delete: if false; // Disable for now, enable when needed
    }
  }
}
```

**Note:** For production, you should implement proper Firebase Authentication with custom claims for admin users instead of client-side session storage.

## File Structure

```
app/
  admin/
    layout.tsx          # Admin layout with metadata
    login/
      page.tsx          # Login page
    page.tsx            # Main dashboard page
lib/
  adminAuth.ts          # Authentication utilities
  adminFirestore.ts     # Firestore functions for admin
middleware.ts           # Route protection and subdomain handling
```

## Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the admin dashboard:**
   - Navigate to `http://localhost:3000/admin`
   - You'll be redirected to `/admin/login` if not authenticated
   - Enter credentials: `spender` / `Spender123#`

3. **View Orders:**
   - After login, you'll see all orders from Firestore
   - Click on any order card to expand and view details
   - Use the search bar to filter orders
   - Click "Download" buttons to download customer images

## Production Deployment

### Subdomain Configuration

For the admin dashboard to work on `admin.idplugmaster.com`:

1. **DNS Configuration:**
   - Add a CNAME record: `admin.idplugmaster.com` → your hosting provider

2. **Firebase Hosting Configuration:**
   Update `firebase.json` to handle subdomain routing:

   ```json
   {
     "hosting": {
       "public": "out",
       "rewrites": [
         {
           "source": "/admin/**",
           "destination": "/admin/index.html"
         }
       ],
       "headers": [
         {
           "source": "**",
           "headers": [
             {
               "key": "X-Content-Type-Options",
               "value": "nosniff"
             }
           ]
         }
       ]
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Security Recommendations

1. **Implement Firebase Authentication:**
   - Replace sessionStorage-based auth with Firebase Auth
   - Use custom claims to mark admin users
   - Update Firestore rules to check for admin claims

2. **Add Rate Limiting:**
   - Implement rate limiting on login attempts
   - Add CAPTCHA for login page

3. **HTTPS Only:**
   - Ensure all admin routes are served over HTTPS
   - Use secure cookies if implementing server-side auth

4. **Audit Logging:**
   - Log all admin actions
   - Track access to sensitive customer data

## Troubleshooting

### Cannot Access Admin Dashboard
- Check if you're logged in (check browser sessionStorage)
- Clear browser cache and try again
- Verify Firestore rules allow reading orders

### Orders Not Loading
- Check browser console for errors
- Verify Firebase configuration in `.env.local`
- Check Firestore security rules allow read access
- Ensure orders collection exists in Firestore

### Images Not Downloading
- Check browser console for errors
- Verify images are stored as base64 in Firestore
- Ensure images are under 1MB (Firestore limit)

### Subdomain Not Working
- Verify DNS configuration
- Check Firebase Hosting rewrites
- Ensure middleware is properly configured
- Check browser console for routing errors
