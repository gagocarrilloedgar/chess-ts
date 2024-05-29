
# Chess TS

Minimal implementation of the chess api for a full list search and profile view

## Run Locally

Clone the project

```bash
  git clone https://github.com/gagocarrilloedgar/chess-ts
```

Go to the project directory

```bash
  cd chess-ts
```

Install dependencies

```bash
  pnpm instal
```

Start the server

```bash
  pnpm dev
```


## Running Tests

To run tests, run the following command

```bash
  pnpm dev
```


## Some considerations

- I have prioritised code structure & quality over styling. I think styling is really use-cased focused and I have mainly used based-libraries + some design sytems as bakcbone for the different projects. I don't think for this callenge styling was super important.

- Regargind code structure. I like to separate FE projects using:
  - *components/*: general shared components that could be re-used and are usually dummy
  - *pages or sections*: I use this as the entry point for the different view. All the code related to that specific view(logic, styling) will be there (if it's not shared with others)
  - *modules*: This folder is for business logic and abstractions to make it easier for pages to consume apis in a way that is easy to mantain and test. In this folder we can find the use case layer (_application_), the infra layer (_infra_) where we do specific implementation of our repositories or ingestion use cases from the _domain_ layer where we define the contract, models and business logic validations that are common between use cases.

- Regarding testing. I'm using vitest mocking the infra layer as I believe integration tests are usually faster to write and develop that e2e.
- The testing strategy here is basically to make that if the infra layer works we can expect our app to have the correct behaviour. I've added also a unit test just to showcase a different type.
- Finally regarding the folder structure I like to use a replica of *src* for tests to give some predicatibility about naming, etc.

## Improvements

- We could improve error management adding some error boundary class inside the different routes and improve the experience.
- Add more integration test for the different cases we are expecting (failure and happy paths)
- For more resilient we could include *E2E* for the happy paths only.
- Generators for testing
- Virtualize the list to only render visible data
- Improve styles  (a lot here).

