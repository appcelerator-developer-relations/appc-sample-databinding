# Sample App for demonstrating Alloy Data-binding capabilities

This sample app demonstrates Alloy data binding on a couple of areas. First off there is demonstration how to render a collection inside a `Ti.UI.ListView`. This collection binding includes samples for dynamic sorting and filtering. As well as manual reload, usage of ListView template and transforming of data. 

The entire app can be discussed here, but instead I recommend to dive into the code of the application and see how things are implemented. 

There are 2 controllers in this app, the default `index.js` and the added `detail.js`. Index contains the `ListView` with all the data and `detail.js` contains the details of an item you click on in the ListView. 

In the detail controller you can see how the model is updated (you can alter name and amount there) and how the data of the model in `detail` is bound (check `detail.xml`).

## Support

If you have any questions about implementation, make sure to reach out to the [Titanium Slack community](https://tislack.org) for questions. Contact me (Wraldpyk) on Slack if you need to know any specifics, but I recommend using the `#helpme` channel to ask questions as there are many people who can help you out.

## More examples
I'm happy to add more data-binding examples to this repository. If you are looking for a specifc data-binding example raise a ticket in this repository and I (or someone else) can add it. Do you have an example you want to add here? Feel free to submit a PR.  

## Author

Rene Pot, Axway Appcelerator

## License

Apache 2
