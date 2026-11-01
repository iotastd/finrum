`PROTOTYPE`
# Finrum
A shelf manager where you can add products and track you stock as well as find where each product is located. 

As of now, it only contains to be used data models for the future build.

### How it works?
Each product is manually stored in the database and sales account is registered.
After this, each purchase of product is tracked with real data.
Each product is also given a `location` to find it on the shelf with a visual `3d-diagram` and sets of instructions.

##### Product object
|Properties|Descriptions|
|-|-|
|Id|Mainly identifies the product internally as well as gives internal information.|
|Name|Contains multiple name/nicknames for guidance as SEO.|
|Price|Entered separated prices for MP, SP & CP.|
|Location|Uses `LocationObject` and the `LocatorEngine` to covert an object of simple instructions into 3D diagram.|

##### Sales object
|Properties|Descriptions|
|-|-|
|SalesId|Identifies the exact sale|
|ProductId|Relates to sold product|
|Discount|Subtracts value to `Price.SP`|
|Quantity|Contains variant object for variants sold|

### Lisence
**Open source and free to use**
