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

/**
 * Send order confirmation email via Nodemailer API route.
 * Reply-To is set to the customer email so admin replies go directly to the customer.
 */
export const sendOrderEmail = async (orderData: EmailOrderData): Promise<void> => {
  try {
    const res = await fetch('/api/send-order-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      throw new Error(json?.error || `HTTP ${res.status}`);
    }
    console.log('Order email sent successfully');
  } catch (error: any) {
    console.error('Error sending order email:', error);
    // Don't throw - email failure shouldn't block order submission
  }
};
