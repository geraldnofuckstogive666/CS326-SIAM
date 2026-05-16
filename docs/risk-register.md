# Risk Register – TaskLite

## Overview
This document tracks project risks, their likelihood, impact, and mitigation strategies.

---

| Risk | Likelihood | Impact | Score | Mitigation | Owner |
|------|------------|--------|-------|------------|-------|
| API downtime on deployment | 3 | 5 | 15 | Add health checks + rollback plan | DevOps Lead |
| Data loss in SQLite | 2 | 4 | 8 | Ensure persistent file storage | Backend Dev |
| Frontend-backend mismatch | 3 | 4 | 12 | Standardize API routes | Backend Dev |
| Merge conflicts during collaboration | 3 | 3 | 9 | Use feature branches + PR reviews | Scrum Master |
| Invalid user input | 4 | 3 | 12 | Add validation checks | Backend Dev |
| UI rendering bugs | 3 | 3 | 9 | Manual QA testing | QA Lead |
| Deployment failure | 2 | 5 | 10 | Rollback strategy on Render | DevOps Lead |
| Performance degradation | 2 | 3 | 6 | Optimize queries and rendering | Backend Dev |

---

## Risk Summary
Most risks were mitigated through structured Git workflow, validation, and deployment rollback planning.