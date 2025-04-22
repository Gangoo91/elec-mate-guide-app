
import { useState, useCallback } from 'react';

type ValidationRule = {
  validate: (value: string) => boolean;
  message: string;
};

type ValidationOptions = {
  required?: boolean | { message: string };
  minLength?: number | { value: number; message: string };
  maxLength?: number | { value: number; message: string };
  pattern?: RegExp | { value: RegExp; message: string };
  custom?: ValidationRule[];
};

export function useInputValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = useCallback((
    name: string,
    value: string,
    options: ValidationOptions
  ): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

    // Required field validation
    if (options.required) {
      const message = typeof options.required === 'object' 
        ? options.required.message 
        : `${name} is required`;
        
      if (!value.trim()) {
        newErrors[name] = message;
        isValid = false;
      } else {
        delete newErrors[name];
      }
    }

    // Min length validation
    if (options.minLength && value) {
      const minLength = typeof options.minLength === 'object' 
        ? options.minLength.value 
        : options.minLength;
        
      const message = typeof options.minLength === 'object'
        ? options.minLength.message
        : `${name} must be at least ${minLength} characters`;
        
      if (value.length < minLength) {
        newErrors[name] = message;
        isValid = false;
      } else if (newErrors[name] === message) {
        delete newErrors[name];
      }
    }

    // Max length validation
    if (options.maxLength && value) {
      const maxLength = typeof options.maxLength === 'object' 
        ? options.maxLength.value 
        : options.maxLength;
        
      const message = typeof options.maxLength === 'object'
        ? options.maxLength.message
        : `${name} must not exceed ${maxLength} characters`;
        
      if (value.length > maxLength) {
        newErrors[name] = message;
        isValid = false;
      } else if (newErrors[name] === message) {
        delete newErrors[name];
      }
    }

    // Pattern validation
    if (options.pattern && value) {
      const pattern = typeof options.pattern === 'object' 
        ? options.pattern.value 
        : options.pattern;
        
      const message = typeof options.pattern === 'object'
        ? options.pattern.message
        : `${name} format is invalid`;
        
      if (!pattern.test(value)) {
        newErrors[name] = message;
        isValid = false;
      } else if (newErrors[name] === message) {
        delete newErrors[name];
      }
    }

    // Custom validations
    if (options.custom && value) {
      for (const rule of options.custom) {
        if (!rule.validate(value)) {
          newErrors[name] = rule.message;
          isValid = false;
          break;
        } else {
          delete newErrors[name];
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [errors]);

  const sanitizeInput = useCallback((input: string): string => {
    // Basic sanitization - remove HTML tags and dangerous characters
    return input
      .replace(/<[^>]*>?/gm, '') // Remove HTML tags
      .replace(/[&<>"']/g, (match) => {
        const entities: Record<string, string> = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        };
        return entities[match];
      });
  }, []);

  return {
    validateField,
    sanitizeInput,
    errors,
    hasErrors: Object.keys(errors).length > 0,
    clearErrors: () => setErrors({})
  };
}
