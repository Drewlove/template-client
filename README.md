# template-client

#Auth-0
Setting up Auth-0
https://auth0.com/blog/complete-guide-to-react-user-authentication/

Log into Auth0 account.
Go to the "Applications" section  
https://manage.auth0.com/dashboard/us/dev-twvvyq34/applications

Click "Create New Application."

Name the application.

Enter urls for the following:
*Allowed Callback URLs
*Allowed Logout URLs
\*Allowed Web Origins

The allowed URLs should include the appropriate local host, usually http://localhost:3000/.

Eventually, include the production urls that are also used by the app.
