# Security Checklist – TaskLite

## Implemented Security Measures

- Input validation on task creation
- API endpoint access restricted via CORS policy
- Safe handling of empty or missing fields in requests

---

## Security Limitations

- No authentication system implemented
- Public API endpoints accessible without login
- SQLite database is unencrypted

---

## Risk Mitigation

- Added validation at backend level
- Restricted frontend API access through controlled routes
- Used controlled deployment environment (Render)

---

## Audit Results
Dependency scan using pip-audit returned no critical vulnerabilities at time of deployment.

---

## Recommendations for Future
- Implement JWT authentication
- Encrypt sensitive data
- Add rate limiting for API protection