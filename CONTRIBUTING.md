# Contributing to the Admin Portal

## Getting the project set up locally

### 1. Fork and Clone the repo

![fork](https://github.com/OPJU-Developers-Community/opju-exam-portal-fe-admin/assets/77252075/d6be2966-c353-440d-9e36-94b13c873247)
---
![fork-repo](https://github.com/OPJU-Developers-Community/opju-exam-portal-fe-admin/assets/77252075/3817638d-74a1-4e3f-8dcf-2c1ea2c3eea3)
---

- After the fork is done, you will be redirected to your forked repository. Then clone the repository to your local system.
  
  `git git@github.com:{your-github-username}/opju-exam-portal-fe-admin.git` (ssh)
  
  `git clone https://github.com/{your-github-username}/opju-exam-portal-fe-admin.git` (http)

  `cd opju-exam-portal-fe-admin`

### 3. Fork and clone the Backend Repo

- Navigate to [Backend Repo](#https://github.com/OPJU-Developers-Community/opju-exam-portal-be)
- In the same way (as frontend), fork this repo also

#### Backend requirements

- Node.js
- MongoDB (server as well as compass)
  - [Install MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community/)
  - Compass

### 2. Install dependencies

`npm install`

### 3. Request for .env file

Create an issue `Request for .env file`. And add it to your .env file. (Backend and Frontend)

### 4. Run the dev 

`npm run dev`

## Writing Good Commit Messages

Maintaining a clean and informative Git history is crucial for collaboration and project understanding. Follow these guidelines to write meaningful and effective commit messages.

### Commit Message Format

A commit message should consist of a concise subject line, an optional body, and a footer.

`<type>(<scope>): <subject>`

#### Subject Line

- `feat` A new feature for the user or a significant change.
- `fix` A bug fix.
- `docs` Documentation changes.
- `style` Code style changes (formatting, etc.).
- `refactor` Code changes that are neither fixes nor features.
- `test` Adding or modifying tests.
- `chore` Routine tasks, maintenance, or tooling changes.

#### Examples

Adding a New Feature:
```
feat(user-management): add the ability to reset passwords
```

Fixing a Bug:
```
fix(login): resolve an issue with incorrect error messages
```

Documentation Update:
```
docs(readme): add a section on commit message guidelines
```

Code Style Changes
```
style: format code according to the style guide
```

Refactoring Code:
```
refactor(api): optimize database queries for better performance
```

Adhering to these guidelines ensures a clear and structured Git history, making it easier for collaborators to understand and contribute to the project.