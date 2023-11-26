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

### Rules

To maintain a clean and efficient development process, please follow these guidelines when contributing to the project:

1. **Create Small, Focused Commits:**

   - **Bad Example:**
     ```
     git commit -m "Update homepage and refactor API"
     ```

   - **Good Example:**
     ```
     git commit -m "feat(homepage): add new banner component"
     ```

2. **Limit File Changes:**

  - Each commit should introduce the minimum necessary changes to accomplish its goal. 
  - Avoid making changes to files that are beyond the scope of your current task.

   - **Bad Example:**
     - Changing styling in unrelated files while fixing a bug.

   - **Good Example:**
     - Making changes only to the specific file related to the bug fix.

3. **Branch Naming:**
  
  - Use descriptive branch names that reflect the purpose of the changes.

   - **Bad Example:**
     ```
     git checkout -b feature
     ```

   - **Good Example:**
     ```
     git checkout -b feat-user-authentication
     ```

4. **Commit Message Guidelines:**
   
   - **Bad Example:**
     ```
     git commit -m "update"
     ```

   - **Good Example:**
     ```
     git commit -m "fix(login): resolve issue with incorrect error messages"
     ```

5. **Pull Requests (PRs):**

  - The title of the pull request should be in the format of `<type>: <subject>` just like your issue title.

   - **Bad Example:**
     ```
     updated broken link in profile page
     ```

   - **Good Example:**
     ```
     fix: updated broken link in profile page
     ```

6. **PR Review:**
  
  - Your PR will be review within 2-3 days by the project admin.

7. **Documentation:**

  - Update relevant documentation for the changes you introduce.
  - Ensure that README.md is kept up to date.

   - **Bad Example:**
     - Introducing a new feature without updating relevant documentation.

   - **Good Example:**
     - Adding documentation for a new API endpoint.

8. **Creating Issues:**

   - **Bad Example:**
     ```
     Found a bug.
     ```

   - **Good Example:**
     ```
     ## Bug Report

     ### Issue Description
     [Description of the issue]

     ### Steps to Reproduce
     [Detailed steps to reproduce the issue]

     ### Expected Behavior
     [What you expect to happen]

     ### Actual Behavior
     [What actually happens]

     [Additional context or screenshots if applicable]
     ```

9. **Resolving Conflicts:**

  - Before merging, resolve any conflicts that arise between your branch and the main branch.

   - **Bad Example:**
     - Merging without resolving conflicts.

   - **Good Example:**
     - Resolving conflicts between your branch and the main branch before merging.

10. **Testing:**

  - Ensure that your changes pass existing tests.
  - Write new tests for new features or changes whenever applicable.

    - **Bad Example:**
      - Not testing changes or assuming they work.

    - **Good Example:**
      - Writing tests for a new API endpoint and ensuring they pass.

Adhering to these guidelines helps maintain a collaborative and efficient development environment. If you have any questions or need clarification, feel free to reach out to project maintainers.
