## The application is coded with python.

1. Some common steps in a CI setup include

- **_Linting_**: For linting our application we will use the PEP8, which is the standard style guide. We can use linting tool called **_black_** it does do a phenomenal job at cleaning your code into a format that is easy to read and maintain.
- **_Testing_**:
  - **_Pytest_** is a very easy to use and Pythonic testing library for Python projects. It can be easily installed into a pip or conda environment and requires very little extra code to start working. Pytest is also very flexible and can handle most testing requirements you could need.
  - **_Codecov_**, which stands for “code coverage”, is a framework that keeps track of the percentage of lines of your code that are executed by your unit tests.
- **_Building_**: For Building with tools like **_Travis-CI_** you can build software in multiple OS’s and automatically deploy your code to several sources when it’s done.

2. The Best Alternatives to Jenkins and Github Actions for Developers

- GitLab
- Atlassian Bamboo
- CircleCI
- TeamCity
- Travis CI
- BuildMaster
- AWS CodePipeline
- Buildkite
- Buddy

3. Since we have seemed to have a small to medium software project involving only 6 developers currently so we might be better of with a cloud-based environment because the configuration is simple, and you don't need to go to the hassle or expense of setting up your own system. For smaller projects especially, this should be cheaper. But to make a concrete decision we have to know if the project has any special requirements (e.g., graphics card requirement to run tests), no of teams who will concurrently use the server, then a self-hosted setup might be the better solution.
