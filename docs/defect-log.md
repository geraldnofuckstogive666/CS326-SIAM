# Defect Log – TaskLite

## Overview
This document tracks bugs identified during development and testing, along with their resolution status.

---

| Bug ID | Description | Severity | Status | Fix / PR Reference |
|--------|------------|----------|--------|---------------------|
| BUG-001 | Task modal retained previous input after reopening | S3 | Closed | Fixed by resetting form fields in closeModal() |
| BUG-002 | API endpoint mismatch caused 404 error on frontend fetch | S2 | Closed | Corrected API base path to `/api` |
| BUG-003 | Toggle task sometimes failed due to null status response | S2 | Closed | Added null safety check in toggle logic |
| BUG-004 | Render error when description field was empty | S3 | Closed | Added fallback empty string rendering |
| BUG-005 | OpenModal function not recognized due to script loading issue | S2 | Closed | Fixed script path to `/static/script.js` and backend mount |