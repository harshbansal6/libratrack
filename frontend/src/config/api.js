// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Admin routes
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  GET_STUDENTS: `${API_BASE_URL}/api/admin/students`,
  ADD_STUDENT: `${API_BASE_URL}/api/admin/students`,
  UPDATE_STUDENT: (id) => `${API_BASE_URL}/api/admin/students/${id}`,
  DELETE_STUDENT: (id) => `${API_BASE_URL}/api/admin/students/${id}`,
  GET_STUDENT: (id) => `${API_BASE_URL}/api/admin/students/${id}`,
  ADD_BOOK: `${API_BASE_URL}/api/admin/books`,
  ISSUE_BOOK: `${API_BASE_URL}/api/admin/issue`,
  RETURN_BOOK: `${API_BASE_URL}/api/admin/return`,

  // Book routes
  GET_BOOKS: `${API_BASE_URL}/api/books`,
  ADD_BOOK_ADMIN: `${API_BASE_URL}/api/books`,
  UPDATE_BOOK: (id) => `${API_BASE_URL}/api/books/${id}`,
  DELETE_BOOK: (id) => `${API_BASE_URL}/api/books/${id}`,

  // Student routes
  STUDENT_LOGIN: `${API_BASE_URL}/api/student/login`,
  GET_AVAILABLE_BOOKS: `${API_BASE_URL}/api/student/books`,
  GET_BORROWED_BOOKS: `${API_BASE_URL}/api/student/borrowed`,

  // Borrow routes
  GET_BORROWS: (studentId) => `${API_BASE_URL}/api/borrows/${studentId}`,
};

export default API_BASE_URL;
