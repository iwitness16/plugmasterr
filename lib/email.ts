import emailjs from '@emailjs/browser';

export interface EmailOrderData {
  // Product Information
  product: string;
  quantity: number;
  totalPrice: number;
  
  // Contact Information
  social: string;
  socialValue: string;
  email: string;
  
  // Personal Information
  firstName: string;
  middleName: string;
  lastName: string;
  sex: string;
  birthday: string;
  
  // Physical Attributes
  hairColor: string;
  eyesColor: string;
  heightFeet: string;
  heightInches: string;
  weight: string;
  
  // Address and Customization
  address: string;
  customize: string;
  
  // Payment Method
  paymentMethod: string;
  
  // Order ID
  orderId: string;
  orderDate: string;
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_bigfkqb';
const EMAILJS_TEMPLATE_ID = 'template_hjnqpdp';
const EMAILJS_PUBLIC_KEY = 'XevhZMgO7VeepgRZR';

export const sendOrderEmail = async (orderData: EmailOrderData): Promise<void> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      to_email: 'orders@idplugmaster.com',
      order_id: orderData.orderId,
      order_date: orderData.orderDate,
      product: orderData.product,
      quantity: orderData.quantity.toString(),
      total_price: `$${orderData.totalPrice}`,
      customer_email: orderData.email,
      contact_method: orderData.social,
      contact_value: orderData.socialValue,
      first_name: orderData.firstName,
      middle_name: orderData.middleName || 'N/A',
      last_name: orderData.lastName,
      full_name: `${orderData.firstName} ${orderData.middleName || ''} ${orderData.lastName}`.trim(),
      sex: orderData.sex,
      birthday: orderData.birthday,
      hair_color: orderData.hairColor,
      eyes_color: orderData.eyesColor,
      height: `${orderData.heightFeet}'${orderData.heightInches}"`,
      weight: orderData.weight ? `${orderData.weight} lbs` : 'N/A',
      address: orderData.address,
      customize: orderData.customize || 'None',
      payment_method: orderData.paymentMethod || 'Not specified',
    };

    // Send email using EmailJS
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

    console.log('Order email sent successfully');
  } catch (error: any) {
    console.error('Error sending order email:', error);
    // Don't throw error - email failure shouldn't block order submission
    // Just log it for debugging
  }
};

