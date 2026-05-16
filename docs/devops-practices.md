# DevOps Practices – TaskLite

## Version Control Strategy
Git is used as the primary version control system.

- Feature branches used for development
- Main branch always contains stable version
- Commits follow clear semantic messages

---

## CI/CD Pipeline

GitHub Actions pipeline:

Push to main →
Run tests →
Install dependencies →
Deploy to Render

---

## Automation Achieved
- Automated testing via Pytest
- Automated deployment on push
- Health check validation via `/health`

---

## Monitoring
- Manual monitoring through Render logs
- API health endpoint used for uptime validation

---

## Deployment Workflow
1. Code pushed to GitHub
2. CI pipeline runs tests
3. If successful → auto deploy to Render
4. System validated via health endpoint

---

## Improvement Implemented During Project
- Fixed incorrect backend routing that caused frontend API failure
- Improved static file serving reliability