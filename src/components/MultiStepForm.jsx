import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const MultiStepForm = () => {
  // Form steps
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferences: {
      newsletter: false,
      sms: false,
      push: false
    },
    confirmation: false
  });

  // Initialize state from localStorage when component mounts
  useEffect(() => {
    const savedState = localStorage.getItem('multiStepFormState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setCurrentStep(parsedState.currentStep || 1);
        setCompletedSteps(parsedState.completedSteps || []);
        setFormData(parsedState.formData || {
          name: '',
          email: '',
          phone: '',
          address: '',
          preferences: {
            newsletter: false,
            sms: false,
            push: false
          },
          confirmation: false
        });
      } catch (e) {
        console.error('Error parsing saved state:', e);
        // Reset to initial state if there's an error
        resetForm();
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isModalOpen) {
      const stateToSave = {
        currentStep,
        completedSteps,
        formData
      };
      localStorage.setItem('multiStepFormState', JSON.stringify(stateToSave));
    }
  }, [currentStep, completedSteps, formData, isModalOpen]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('preferences.')) {
      const preferenceName = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [preferenceName]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 4) {
      setCompletedSteps(prev => [...new Set([...prev, currentStep])]);
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Reset form
  const resetForm = () => {
    setCurrentStep(1);
    setCompletedSteps([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      preferences: {
        newsletter: false,
        sms: false,
        push: false
      },
      confirmation: false
    });
    localStorage.removeItem('multiStepFormState');
  };

  // Submit form
  const submitForm = () => {
    // In a real app, you would send the data to a server here
    console.log('Form submitted:', formData);
    resetForm();
    setIsModalOpen(false);
  };

  // Open modal
  const openModal = () => {
    // Load state from localStorage when opening modal
    const savedState = localStorage.getItem('multiStepFormState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setCurrentStep(parsedState.currentStep || 1);
        setCompletedSteps(parsedState.completedSteps || []);
        setFormData(parsedState.formData || {
          name: '',
          email: '',
          phone: '',
          address: '',
          preferences: {
            newsletter: false,
            sms: false,
            push: false
          },
          confirmation: false
        });
      } catch (e) {
        console.error('Error parsing saved state:', e);
        // Reset to initial state if there's an error
        resetForm();
      }
    }
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    // Save current state before closing
    const stateToSave = {
      currentStep,
      completedSteps,
      formData
    };
    localStorage.setItem('multiStepFormState', JSON.stringify(stateToSave));
    setIsModalOpen(false);
  };

  // Step indicators
  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Contact Details' },
    { number: 3, title: 'Preferences' },
    { number: 4, title: 'Confirmation' }
  ];

  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Personal Information</h3>
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Contact Details</h3>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your address"
                rows="3"
              ></textarea>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Communication Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="preferences.newsletter"
                  checked={formData.preferences.newsletter}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 block text-gray-700">
                  Subscribe to newsletter
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="preferences.sms"
                  checked={formData.preferences.sms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 block text-gray-700">
                  Receive SMS notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="preferences.push"
                  checked={formData.preferences.push}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 block text-gray-700">
                  Enable push notifications
                </label>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-700">Confirm Your Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{formData.phone || 'Not provided'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{formData.address || 'Not provided'}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Communication Preferences</p>
                <div className="flex space-x-4 mt-1">
                  {formData.preferences.newsletter && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Newsletter
                    </span>
                  )}
                  {formData.preferences.sms && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      SMS
                    </span>
                  )}
                  {formData.preferences.push && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Push
                    </span>
                  )}
                  {!formData.preferences.newsletter && !formData.preferences.sms && !formData.preferences.push && (
                    <span className="text-gray-500 text-sm">None selected</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="confirmation"
                checked={formData.confirmation}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label className="ml-2 block text-gray-700">
                I confirm that the information provided is correct
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Check if current step is valid for proceeding
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '';
      case 2:
        return formData.email.trim() !== '' && formData.phone.trim() !== '';
      case 3:
        return true; // No validation needed for preferences
      case 4:
        return formData.confirmation;
      default:
        return false;
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Multi-Step Form Modal</h2>
        <p className="text-gray-600 mb-6">
          This demo shows a modal with a multi-step form that tracks current step and completed steps.
          The form state persists on refresh and can be reset at any time.
        </p>
        <button
          onClick={openModal}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          Open Multi-Step Form
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Step indicators */}
        <div className="mb-8">
          <div className="flex justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep === step.number
                      ? 'bg-indigo-600 text-white'
                      : completedSteps.includes(step.number)
                      ? 'bg-green-500 text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-500'
                  }`}
                >
                  {completedSteps.includes(step.number) && currentStep !== step.number ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`text-xs font-medium text-center w-20 ${
                    currentStep === step.number
                      ? 'text-indigo-600'
                      : completedSteps.includes(step.number)
                      ? 'text-green-600'
                      : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="mb-8">{renderStepContent()}</div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={resetForm}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Reset Form
          </button>
          <div className="flex space-x-3">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md font-medium ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`px-4 py-2 rounded-md font-medium text-white ${
                  isStepValid()
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-indigo-300 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={submitForm}
                disabled={!isStepValid()}
                className={`px-4 py-2 rounded-md font-medium text-white ${
                  isStepValid()
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-green-300 cursor-not-allowed'
                }`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MultiStepForm;