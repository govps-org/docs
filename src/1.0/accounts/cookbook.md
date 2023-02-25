---
canonicalUrl: 'https://docs.govps.org/docs/1.0/accounts/cookbook.html'
---
# Cookbook

[[toc]]

## GoVPS Is Unable To Access Git Repository

There are several reasons GoVPS may not be able to access your GitHub, GitLab, or Bitbucket repository. First, you should try refreshing the source control API token that is linked to GoVPS via your account profile's "Source Control" tab.

GoVPS attempts to access your repository using your source control provider's API. The API credentials that will be used are the credentials tied to the account of the person who **owns** the GoVPS server. If a GoVPS server is shared with you via a circle, it will use the circle **owner's** API credentials. You should ensure this person has full access to the repository on GitHub.

### GitHub Organization Repositories

Sometimes, if the repository is an organization repository, you will need to grant GoVPS access to that organization. You may do that using the following link: [https://github.com/settings/connections/applications/fdb28071bd05daebc122](https://github.com/settings/connections/applications/fdb28071bd05daebc122)