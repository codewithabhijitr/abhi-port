# API Contracts - Abhijit DevOps Portfolio

## Overview
This document outlines the API contracts for the backend integration of the DevOps portfolio website.

## Current Mock Data (in `/app/frontend/src/mock.js`)
- `personalInfo`: Static personal information
- `aboutText`: About section text
- `highlightCards`: Professional experience cards (7 items)
- `skills`: Technical skills with percentages (12 items)
- `services`: Service offerings (4 items)
- `projects`: Featured projects (5 items)
- `testimonials`: Client testimonials (3 items)

## Backend Implementation Required

### 1. Contact Form Submission

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact submission received successfully",
  "id": "uuid"
}
```

**MongoDB Model:**
```python
class ContactSubmission:
    id: str (UUID)
    name: str
    email: str
    message: str
    created_at: datetime
    status: str (default: "new")
```

**Frontend Integration:**
- File: `/app/frontend/src/components/Contact.jsx`
- Current: Mock submission with toast notification
- Change: Replace mock setTimeout with actual API call to `${API}/contact`
- Error handling: Show error toast if API call fails

## Frontend-Backend Integration Steps

1. **Backend Setup**
   - Create ContactSubmission model in `/app/backend/models.py`
   - Create POST endpoint `/api/contact` in `/app/backend/server.py`
   - Add email validation
   - Add rate limiting (optional)

2. **Frontend Integration**
   - Update Contact.jsx handleSubmit function
   - Replace mock setTimeout with axios.post
   - Keep existing toast notifications
   - Add error handling for network failures

3. **Testing**
   - Test form submission with valid data
   - Test form validation
   - Test backend data persistence in MongoDB
   - Test error scenarios

## Notes
- All other data (projects, skills, testimonials, etc.) remain static and hardcoded in mock.js
- No admin panel needed - contact submissions will be stored in database for manual review
- Contact form is the only dynamic feature requiring backend integration
