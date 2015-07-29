It looks like you're trying to build an adapter! This readme will help guide you through the process.
If you are impatient and would just like to do it on your own, just search the project for 'TODO' and follow directions

1) Go to package.json and change the name to that of the adapter. Make sure to delete the comment.
2) From the command line, navigate to the root directory (where this file is located) and run 'npm install'
3) From the same command line, run 'mocha'. All tests should pass.
4) At this point you should have a running express server. If you type 'run app.js', should should be able to open up your browser and navigate to http://localhost:3016/ping.
5) Go to config/envConfigSpec.json and follow the instructions.
6) Go to config/config.js and fix all of the TODOs.
7) Go to routes/routes.js, update the application name, and add a new route for the endpoint you would like to add.
8) To operate the new endpoint, you will need to implement an endpoint controller. Controllers live in the lib directory.
    -The general flow of data through these controllers is client -> validator -> transformer -> client.
        This data flow has been stubbed out in lib/controllers/stub_controller.js and lib/transformers/stub_transformer.js.
        To implement a similar flow, copy these files, rename them appropriately, and fix all the TODOs. From there you can add/delete sections to suit your individual adapter needs
        The dreamcatcher-client will allow you to communicate with the LeisureLink public API, but to communicate with
        the integration partner associated with your adaptor, you will need to create a 2nd client specific to that partner
        in the lib/messenger/stub_client. Rename the client to reflect the integration partner.
    -The commented out code is an example of what would be appropriate for each TODO. If it's not what you need in your adapter, feel free to delete it.
        Make sure you delete all stubbed files and their references before committing to production
    -It should be noted that this boilerplate code contains several functions, variables classes, etc. that might not be useful in your adapter,
        with the mindset that it's easier to delete things than add them.
        It is advised that you go through all the included files (ignore node_modules/) to delete anything that you're not using.


Happy adapting!