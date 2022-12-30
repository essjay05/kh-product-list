# Koala Front-End Take-Home

Hello, friend!

If you're reading this, you're a front-end candidate for Koala Health. This take-home exercise is a way for you to show us your ability to write front-end code in React.

The objective of this exercise is to build single, product-selection page. In this scenario, a potential customer browses our site and - through a search page - identifies the 'product family' they would like to purchase. A product family defines a particular drug, like Apoquel - an anti-itch medication. However, drugs come in a variety of strengths (eg. for Apoquel 3.6, 5.4, and 16mg) and a variety of formulations (chewable tablets, caplets, etc). These variations affect the clinical properties of the drug and the price. Unlike a traditional e-commerce website, the strength and formulation are defined by the vet's prescription, so the customer isn't free to pick whatever they want; they should already know what they need to pick. However, we need the customer to indicate the correct strength and formulation of the drug so that they see the correct price. We also need that information so that we can present accurate information to the vet when we request the prescription from them.

So what do we actually need from you?

The skeleton of a product-selection page can be found in `App.js`. You'll find some dummy data available via a `getProducts` method, which simulates the delay attendant in querying a server for data to hydrate the page. Your task is to present the data received from `getProducts` to the customer so that they can indicate which version of the product they intend to purchase. Each product has a unique combination of strength and formulation and is identified by an ID. Once the customer has selected a product, they must also indicate a desired quantity through a mechanism of your choosing. If we suppose the pills will be shipped monthly, likely quantities are 15, 30, or 60 pills. With both the product and quantity selection you should show the user a price (in full dollars, rather than cents) for the total of their product price \* the quantity. Finally, once the customer has indicated a product and a quantity, they should click an add-to-cart button which invokes the provided `addToCart` method with the product ID of the selected product and quantity.

Styling the page or making use of the provided image URLs is optional.

## Assessment

The largest criteria for assessment is whether you followed the instructions and completed the assignment successfully!

_To recap that means you:_

- Fetched data from the provided (unaltered) `getProducts` method
- Showed it to the user in a way that they could select their preferred strength and formulation
- Allowed the user to select a quantity for the product
- Shown the user a price in dollars (not cents) for product and quantity
- Allowed the user to add the product to cart via a button that invokes the provided (unaltered) `addToCart` method

If you succeed at meeting these criteria we will consider the details of your implementation and - if you include it - styling. Keep in mind that this is a customer-facing front-end. In real life, we'd expect it to be accessible, easy-to-use, and presentable; those factors will be in consideration.

## Using this starter code

To get started, you do need node installed. If you don't, you can just write your code into App.js without ever running it. If you do this, please let us know! We'll be a bit more forgiving of small syntax or visual errors.

To get set up with the provided code, open the directory in your terminal and run `npm install`. Once set up, run `npm start` to run the code. Once running, the code will be visible in your web browser at `localhost:3000`. You can also run `npm test` to run the test-suite, but we _do not_ expect you to write tests for this.

For what it's worth, this code was constructed and runs on Node's version 16 LTS release. We haven't tested it on newer or older versions.

## Rules

- You may use the same tools you use whenever you write code. That includes your favorite text-editor and any extensions.
- You may consult references, including on the internet, for syntax, etc as though you were solving any programming problem you'd come across at work. But please DON'T search for ready-made solutions to the whole problem.
- You may NOT ask for assistance from anyone outside Koala. While we don't mind folks asking for help in general, we're trying to get an assessment of your personal ability.
- Please don't share this with folks outside Koala via any means. It took us a while to put together a question we're happy with. It would be extremely rude to compel us to redo it because it's become available to the public.
- In general, keep in mind that if you break one of the rules above and we - unaware - still end up hiring you, we're going to work together for quite some time. We're trying to assess your ability. If we hire you because you've misrepresented it on this take-home, we're obviously going to notice when you show up for the job.

## PS

If you don't understand a part of the assignment, please don't hesitate to ask us. We'll make every effort to respond promptly (but _mostly_ within business hours because we don't condone working late).

## Joy S. Additional Features

-Created clear cart functionality
-Checked responsive screenwidths
-Checked accessibility
