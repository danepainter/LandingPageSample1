import { useState, type FormEvent } from 'react';
import {
  validateEmail,
  validateName,
  validateMessage,
  validateConsent,
} from '../utils/validators';
import { companyProfile } from '../data/content';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameResult = validateName(formData.name);
    if (!nameResult.isValid) newErrors.name = nameResult.error;

    const emailResult = validateEmail(formData.email);
    if (!emailResult.isValid) newErrors.email = emailResult.error;

    const messageResult = validateMessage(formData.message);
    if (!messageResult.isValid) newErrors.message = messageResult.error;

    const consentResult = validateConsent(formData.consent);
    if (!consentResult.isValid) newErrors.consent = consentResult.error;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      consent: false,
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  // Generate mailto link as fallback
  const mailtoLink = `mailto:${companyProfile.email}?subject=Contact%20Form%20Inquiry&body=Name:%20${encodeURIComponent(
    formData.name
  )}%0D%0AEmail:%20${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
    formData.message
  )}`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-600 mr-4 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a
                    href={`tel:${companyProfile.phone}`}
                    className="text-gray-600 hover:text-accent-600 transition-colors"
                  >
                    {companyProfile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-600 mr-4 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${companyProfile.email}`}
                    className="text-gray-600 hover:text-accent-600 transition-colors"
                  >
                    {companyProfile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-600 mr-4 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <address className="not-italic text-gray-600">
                    {companyProfile.address.street}
                    <br />
                    {companyProfile.address.city}, {companyProfile.address.state}{' '}
                    {companyProfile.address.zip}
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-accent-600 mr-4 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">{companyProfile.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-600'
                      : 'border-gray-300 focus:ring-accent-600'
                  }`}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-600'
                      : 'border-gray-300 focus:ring-accent-600'
                  }`}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-y ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-600'
                      : 'border-gray-300 focus:ring-accent-600'
                  }`}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={`mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-accent-600 focus:ring-2 focus:ring-accent-600 ${
                      errors.consent ? 'border-red-500' : ''
                    }`}
                    required
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the processing of my personal data for the purpose of responding to my
                    inquiry. <span className="text-red-600">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-1 text-sm text-red-600 ml-7">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 disabled:bg-gray-400 disabled:cursor-not-allowed motion-safe:transition-colors focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Mailto Fallback */}
              <p className="text-sm text-gray-500 text-center">
                Or email us directly at{' '}
                <a href={mailtoLink} className="text-accent-600 hover:text-accent-700 font-medium">
                  {companyProfile.email}
                </a>
              </p>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div
                className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                role="alert"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

