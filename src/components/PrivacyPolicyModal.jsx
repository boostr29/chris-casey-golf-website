// src/components/PrivacyPolicyModal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-green-800/90 flex justify-center items-center p-4 z-[10002]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-green-600 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#fbbf24 #065f46'
            }}
          >
            <div className="py-10 px-8 font-roboto">
              <div className="flex justify-between items-center mb-6">
                <motion.h1 
                  className="text-2xl font-bold text-green-100 font-header"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  Privacy Policy
                </motion.h1>
                <motion.button
                  onClick={onClose}
                  className="text-green-100 hover:text-green-300 text-xl font-header transition duration-300 delay-100 -mt-1 hover:scale-110"
                  aria-label="Close privacy policy"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  X
                </motion.button>
              </div>
              
              <motion.div 
                className="prose max-w-none text-green-100 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <p className="text-sm text-green-200">Last updated: January 25, 2025</p>
                
                <h2 className="text-xl font-semibold text-green-300 font-header mt-6">Information We Collect</h2>
                <p className="text-lg">
                  When you visit Chris Casey Golf Instruction website or contact us, we may collect:
                </p>
                <ul className="list-disc pl-6 text-lg">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Website usage data through Google Analytics</li>
                  <li>Information you provide when booking lessons</li>
                </ul>

                <h2 className="text-xl font-semibold text-green-300 font-header mt-6">How We Use Your Information</h2>
                <p className="text-lg">We use your information to:</p>
                <ul className="text-lg list-disc pl-6">
                  <li>Respond to your inquiries and schedule golf lessons</li>
                  <li>Improve our website and services</li>
                  <li>Send you information about our golf instruction services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-xl font-semibold text-green-300 font-header mt-6">Information Sharing</h2>
                <p className="text-lg">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  information only when required by law or to protect our rights.
                </p>

                <h2 className="text-xl font-semibold text-green-300 font-header mt-6">Google Analytics</h2>
                <p className="text-lg">
                  Our website uses Google Analytics to understand how visitors use our site. Google Analytics 
                  collects information anonymously and reports website trends without identifying individual visitors.
                </p>

                <h2 className="text-xl font-semibold text-green-300 font-header mt-6">Your Rights</h2>
                <p className="text-lg">You have the right to:</p>
                <ul className="text-lg list-disc pl-6">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2 className="text-xl font-semibold text-green-300 font-header mt-6 ">Contact Us</h2>
                <p className="text-lg">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-100 p-4 rounded text-gray-700 text-lg">
                  <p><strong>Chris Casey Golf Instruction</strong></p>
                  <p>Email: christopherdcasey1@gmail.com</p>
                  <p>Phone: (631) 704-4851</p>
                  <p>Address: 21088 Bake Parkway, Unit 108, Lake Forest, CA 92630</p>
                </div>

                <h2 className="text-xl font-semibold text-green-300 font-header mt-6">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page with an updated "Last updated" date.
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-8 pt-4 border-t border-green-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.button
                  onClick={onClose}
                  className="bg-amber-300 text-green-600 px-8 py-3 mb-2 rounded-full hover:bg-green-900 hover:text-green-300 transition duration-300 font-header"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;