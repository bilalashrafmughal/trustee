import React, { forwardRef } from "react";
import { HiExclamationCircle } from "react-icons/hi2";

const TextField = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      helperText,
      required = false,
      disabled = false,
      className = "",
      inputClassName = "",
      labelClassName = "",
      errorClassName = "",
      ...props
    },
    ref
  ) => {
    const baseInputClasses = `
    w-full px-4 py-3 text-sm border rounded-lg transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    placeholder:text-gray-400
  `;

    const inputClasses = error
      ? `${baseInputClasses} border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500`
      : `${baseInputClasses} border-gray-300 bg-white hover:border-gray-400 focus:border-blue-500`;

    return (
      <div className={`space-y-1 ${className}`}>
        {label && (
          <label
            className={`block text-sm text-left font-medium text-gray-700 ${labelClassName}`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={`${inputClasses} ${inputClassName}`}
            {...props}
          />
        </div>

        {/* Error message */}
        {error && (
          <p
            className={`text-sm text-left text-red-600 flex items-start gap-1 break-words overflow-hidden ${errorClassName}`}
          >
            <HiExclamationCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="flex-1 break-words">{error}</span>
          </p>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p className="text-sm text-gray-600">{helperText}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
