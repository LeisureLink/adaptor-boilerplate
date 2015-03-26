It looks like you're trying to build an adapter! This readme will help guide you through the process.
If you are impatient and would just like to do it on your own, just search the project for 'TODO' and follow directions

1) Go to package.json and change the name to that of the adapter. Make sure to delete the comment.
2) From the command line, navigate to the root directory (where this file is located) and run 'npm install'
3) From the same command line, run 'mocha test'. All tests should pass.
4) At this point you should have a running express server. If you type 'run app.js', should should be able to open up your browser and navigate to http://localhost:3016/ping.
5) Go to config/config.js and fix all of the TODOs.
6) Go to routes/routes.js and add a new route for the endpoint you would like to add.
7) To operate the new endpoint, you will need to implement an endpoint controller. Controllers live in the endpoints directory.

    //NOTE to Pariveda: The concept of a validator came from the API, but we're not really using the validators in that fashion for adapters.
    //Should we move the httpResponse validators into the messenger, and just call them after a successful response?

    -The general flow of data through these controllers is messenger -> validator -> transformer -> messenger.
        This data flow has been stubbed out in endpoints/controllers/stub_controller.js and endpoints/transformers/stub_transformer.js.
        To implement a similar flow, copy these files, rename them appropriately, and fix all the TODOs. From there you can add/delete sections to suit your individual adapter needs
    -The commented out code is an example of what would be appropriate for each TODO. If it's not what you need in your adapter, feel free to delete it.
        Make sure you delete all stubbed files and their references before committing to production
    -It should be noted that this boilerplate code contains several functions, variables classes, etc. that might not be useful in your adapter,
        with the mindset that it's easier to delete things than add them.
        It is advised that you go through all the included files (ignore node_modules/) to delete anything that you're not using.


Happy adapting!