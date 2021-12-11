# influencer-tool-web

A web project for Magiclytics influencers. Bootstrapped using create-react-app.

## Running

To run the web application:

```
yarn start
```

To run a storybook:

```
yarn storybook
```

## Testing

```
yarn test
```

## Test Task

Please read thoroughly before starting work.

Goals:

- Fix current unused vars warning issue without overriding eslint rules which pop up when code is locally compiled.

  ```
  src/common/auth.ts
    Line 8:7:  'isTokenValid' is assigned a value but never used  @typescript-eslint/no-unused-vars

  src/containers/signin-token/index.tsx
    Line 12:10:  '_' is assigned a value but never used  @typescript-eslint/no-unused-vars

  src/containers/signup-token/index.tsx
    Line 12:10:  '_' is assigned a value but never used  @typescript-eslint/no-unused-vars

  src/context/user.tsx
    Line 23:10:  '_' is assigned a value but never used  @typescript-eslint/no-unused-vars
  ```

- Make the login system conditional on a "prod" env variable (if developing locally, it shouldn't process credentials).
- Through the use of hooks, using TypeScript and maintaining the current structure, sort the options under the "Audience report" side section.

Requirements:

- Static bundle should be commited
- Create and lightly comment PR
- Apply code linting and adhere to style
- Push commit to branch of your own name
- Use different commits for each issue
