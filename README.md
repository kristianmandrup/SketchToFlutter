# Sketch To Code

![Language: Javascript](https://img.shields.io/badge/language-javascript-f48041.svg?style=flat)
[![License: MIT](http://img.shields.io/badge/license-MIT-lightgrey.svg?style=flat)](https://github.com/s4cha/SketchToCode/blob/master/LICENSE)

## Why

Because **integrating views** form Sketch has **no added value**, its just back and forth translating sketch values to swift code. There must be a way to automate this time costly and low added value labor.

## How

By generating platform specific UI code from a Sketch Artboard we can save hours of time \o/

## Platforms

We aim to support:

* Flutter
* Swift UIKit
* Android Kotlin
* Polymer Web components (via `lit-html`)

## What

A **Sketch plugin** with a that can generate basic UI code to kickstart developing your views (UI).

## About

This is a proof of concept that we can generate view code from Sketch Artboards.
Be aware that this is very early in development.

The goal is to kickstart view dev and save 80% of the time normally needed to manually port a Sketch UI prototype to platform specific UI code.

## Usage

* Install (double click) plugin
* Select Artboard
  * Flutter: `cmd` + `alt` + `F`
  * Swift: `cmd` + `alt` + `S`
  * Kotlin: `cmd` + `alt` + `K`
  * Polymer: `cmd` + `alt` + `P`
* Copy/Paste generated code into one or more files in the IDE/editor of your project

## Get the best out of it

Here are some rules you can follow to get the best export possible :

* Name your Artboard properly:
  For instance an Artboard named "Profile" will generate `class ProfileView: UIView`
* Resize Artboard for your iPhone size (ex: we usually use 375Width for iPhone 7)
  By resizing the artboard with the scale tool, you'll make sure the script will generate the good font sizes etc.
* Name your sketch layers right in order to get sexy variable names
* After the scale, you probably have float margins and font size. Making sure these are clean ext 16p instead of 16,01543 will generate cleaner code :)
* The same applies to margins and sizes in general
* Flatten the view hierarchy, extract the items inside groups and bring them to the top level.
* Order the layers (usually from the to to the bottom), the generated code will keep the view hierarchy order.

### Naming conventions

If you stick to the following naming conventions, the generator will be supercharged with respect to generating code that better reflect your Sketch:

Use the form `[name]:[type]#[config]` to indicate the:

* name
* type of element
* extra settings

See below for more details on conventions

### Symbols

Symbols are the Sketch equivalent of reusable view components. A Symbol master (blueprint) will be turned into a class (or web component or similar construct). A Symbol instance or override will be turned into an application (instance) of the Symbol master.

Layers that are not Symbols will be turned into instances of the basic building blocks of the platform, much like using the HTML basic building blocks (or UI platform equivalent).

#### Sketch design conventions

See [Sketch Conventions](./Sketch-Conventions.md) document for a guide to adding meta-data to achieve optimal code generation

## Design

Uses the [Sketch Javascript API](https://github.com/BohemianCoding/SketchAPI)

See [Sketch 49 new api](http://sketchplugins.com/d/591-sketch-49-new-api-and-future-plans)

### Phases

* Extract: layout sketch data via Sketch Javascript API
* Structure: structure the layout data to be more usable
  * determine grid structures (columns, rows) of grouped layers
  * determine padding between layers
* Mapping: Use mapper to map structure to relevant output tree
* Generate source: Generate source code from output tree

Folder structure

* `sketch` extract relevant information from sketch
* `parser` parse sketch information into generic constructs, such as grid, list views etc
* `mapper` map generic constructs to platform specific AST
* `code-writer` write the platform specific AST to formatted source code (string)

## Swift: Improvements

### Fonts

* Find a way to export fonts ?

### Text

* Detect Text in style caps -> apply uppercased
* Detect character spacing in fonts -> AttributedString
* Detech line spacing -> AttributedString
* Detect Multiline (contains \n) -> Append \n and set label to mutiline
* Detect text alignment all cases
* Multicolor -> Generate AttributedString

#### Colors

* UIColors replace by custom ones?
* UIColors oftenThe same refactor in one variable

#### Radius

* Detect UIButton corner Radius

#### Borders

* Button border color
* Button border radius

#### Sketch Groups

* groups -> greate UIViewSubclasses?
* UIButton set title belongs in content section

#### layout

* Detect fillscontainer and do not use width and height but right and bottom laike a human would do
* Implement relative layout, like more visually to the right -> align on right rather tahn left , more natural

#### Export

* Handle single Element Export

#### UITableViewCell

* Artboard name Suffixed by `Cell` -> UITableViewCell subclass

#### Images

* Find a way to detect images and create UIImageView instead

#### Groups

* Think about how to handle them proprely

## Known issues

This plugin only supports Sketch v50 and higher at the moment.

## Author

Kristian Mandrup, kmandrup@gmail.com

## Contributing

Contributions to SketchToFlutter are very welcomed and encouraged! Feel free to try and tackle one of the Improvements above

## License

SketchToCode is available under the MIT license.

See [LICENSE](./LICENSE) for more information.
