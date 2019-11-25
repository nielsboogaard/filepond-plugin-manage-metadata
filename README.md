# Manage metadata plugin for FilePond

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nielsboogaard/filepond-plugin-manage-metadata/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/filepond-plugin-manage-metadata.svg)](https://badge.fury.io/js/filepond-plugin-manage-metadata)

The Manage Metadata plugin will add a tiny 'edit' icon in front of the filename to allow updating the metadata of the uploaded file.


## Quick Start

Install using npm:

```bash
npm install filepond-plugin-manage-metadata
```

Then import in your project:

```js
import * as FilePond from 'filepond';
import FilePondPluginManageMetadata from 'filepond-plugin-manage-metadata';
```

Register the plugin:
```js
FilePond.registerPlugin(FilePondPluginManageMetadata);
```
Create a new FilePond instance as normal.
```js
const pond = FilePond.create({
    name: 'filepond'
});

// Add it to the DOM
document.body.appendChild(pond.element);
```
 The functionality will become active after uploading a file.

## Configuration

The following options can be provided:
```js
const pond = FilePond.create({
    name: 'filepond',
    labelButtonManageMetadata: 'custom label', // by default 'Edit metadata'
    onManageMetadata: (item) => console.log('onManageMetadata hook called', item) // callback method which will be called upon clicking the edit icon
});
```

## Demo
[View the demo](https://nielsboogaard.github.io/filepond-plugin-manage-metadata/)
