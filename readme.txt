=== WooCommerce M-PESA Payment Gateway Plugin ===
Contributors: Lawrence
Plugin Name: Mpesa Payment Gateway for WooCommerce WordPress
Tags: mpesa, mobile payments, M-PESA, mobile wallet, WooCommerce, payment gateway, e-commerce
Author: Lawrence N.(WezaData Solutions)
Requires at least: 2.2
Tested up to: 6.2
Stable tag: 1.0
License: GNU General Public License v2.0
License URI: http://www.gnu.org/licenses/gpl-2.0.html

=== Description ===
The WooCommerce M-PESA Payment Gateway plugin empowers customers to pay for goods using the M-PESA mobile money service directly from a WordPress site integrated with the WooCommerce plugin.

Upon checkout, customers are presented with the option to pay via M-PESA, a popular mobile payment platform.

To utilize this plugin, users must obtain a Paybill or Till number, which serves as a unique identifier for channeling customer payments. Additionally, users must create an account on Safaricom's Daraja Portal and link the Paybill or Till number to the created account. The Daraja Portal provides essential authentication and payment request details, including Passkey, Consumer Key, Consumer Secret, and endpoints for Sandbox/Production environments.

Once activated, users must input these details into the plugin settings within their WordPress website.

This setup ensures that site owners maintain full control over the payment details associated with the Paybill or Till number.

Upon clicking the Pay button during checkout, the plugin initiates a payment authentication request to the customer's mobile phone. The customer can then accept or decline the payment, with callback details sent from the Daraja Portal providing confirmation of the customer's action. This information is used to update the order status accordingly.

=== Plugin Features ===
Compatible with a wide range of WordPress themes.
User-friendly and straightforward to set up.
Lightweight, ensuring minimal impact on site performance.
Supports all modern web browsers.

=== How to Use ===
Ensure WooCommerce plugin is installed and activated.
Upload the Woocommerce M-PESA Payment Gateway plugin files to the WordPress plugins directory (/wp-content/plugins/), or install the plugin via the WordPress admin plugin screen.
Activate the plugin.
Navigate to WooCommerce > Settings > M-PESA > Manage on the WordPress admin dashboard and fill in the required fields to enable plugin functionality.
Disclaimer
This plugin is not affiliated with WooCommerce or M-PESA. Its purpose is solely to integrate the WooCommerce plugin with the M-PESA payment method. The plugin should not be held responsible if the Daraja endpoint is unreachable or unable to serve requests. Links provided in the plugin description to external websites are not under the control of the WooCommerce M-PESA Payment Gateway Plugin. The inclusion of any links does not imply endorsement or recommendation of the views expressed within those sites.

=== Demo ===
Visit the demo site for a demonstration of the plugin's functionality.

===Installation ===
Unzip the plugin files.
Upload the plugin folder to your WordPress plugins directory.
Activate the plugin.
Configure the plugin settings.
Upgrade Notice
This is the initial version of the plugin.

=== Screenshots ===
Payment Gateways List
Settings page 1
Settings page 2
Request accepted
Transaction in progress
Customer action response


=== Changelog ===
1.0


=== Frequently Asked Questions ===
How does the customer authenticate the payment?

Customers receive a Sim Application Toolkit push notification to authenticate the payment, ensuring a secure transaction process.
