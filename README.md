# Setup and Running Instructions

A working version of this application can be found at [https://ritease-doc.vercel.app/](https://ritease-doc.vercel.app/).

This guide below will walk you through the steps to clone the repository and get the Next.js project running on your local machine.

1.  **Clone the Repository:**
    Open your terminal or command prompt. Navigate to the directory where you want to store the project on your computer. Then, use the following command to clone the repository. Replace `YOUR_REPOSITORY_URL` with the actual URL of your project's Git repository:
    ```bash
    git clone YOUR_REPOSITORY_URL
    ```
    This command will download all the project files and the version history from the remote repository to a new folder with the same name as the repository.

2.  **Navigate to the Project Directory:**
    Once the cloning process is complete, you need to navigate into the newly created project directory. Use the `cd` command followed by the name of the repository folder:
    ```bash
    cd YOUR_REPOSITORY_NAME
    ```

3.  **Install Dependencies:**
    Next.js projects rely on various packages and libraries that are managed using npm or yarn. You need to install these dependencies before you can run the project. In your terminal, within the project directory, run this command:

    ```bash
      npm install
      ```
    This command will read the `package.json` file in your project, which lists all the necessary dependencies, and download and install them into a `node_modules` folder within your project directory.

4.  **Run the Development Server:**
    After the dependencies are installed, you can start the Next.js development server. This server will build your application and make it accessible in your web browser. Run one of the following commands in your terminal:

      ```bash
      npm run dev
      ```

    This command will typically start the development server on `http://localhost:3000`. You should see some output in your terminal indicating that the server has started successfully.

5.  **Access the Application:**
    Open your web browser and navigate to the address provided in the terminal. You should now be able to see the running application in your browser.

## Any Libraries or Tools You Used and Why

* **Syncfusion:** Syncfusion was utilized as the primary library for handling document rendering and enabling annotation functionalities within the application.

* **Eslint:** Eslint was integrated into the project as a tool for maintaining code quality and consistency. It acts as a code analyzer and identifying potential syntax errors in the code.

* **TailwindCSS:** Tailwind CSS was chosen as the styling library for this project because of its utility-first approach. It allows for fast and rapid UI development by providing a vast set of pre-defined CSS classes that can be directly applied to JSX elements.

* **TypeScript:** TypeScript was chosen as the primary programming language for this project because of its benefits of static typing.

* **Next.js:** Next.js was selected as the React framework for building this application because it was stated that the project should be built using Next.js

* **React.js:** React.js serves as the foundational UI library upon which the Next.js application is built.

## Any challenges you faced and how you solved them
One of the challenges I faced was ensuring that only a PDF file is accepted. To address this, I implemented a `validateFile` function using `useCallback`. This function checks the `type` property of the uploaded file. If it doesn't match 'application/pdf', it updates the component's state with an error message, informing the user about the allowed file type. This prevents the application from proceeding with unsupported files and provides helpful error feedback.

## Any features you would add if you had more time
- *Support for Dark Theme*: Given more time, I would have implemented dark theme support to provide users with an alternative visual presentation of the application. The intention was to offer a toggle and integrate with the user's system preferences to switch between light and dark modes.

- *Ability to Restart the Process*: A feature allowing users to easily start the entire process over from the beginning was. This would provide a convenient way to clear the current document, remove all annotations, and return the application to its initial state, ready for a new document to be uploaded.