# Context Forms Prototype

## TODOS

- [X] Change another field value.
- [X] Multiple forms.
- [X] Initial values.
- [] Reinitialize values.
- [] Form errors.
- [] Define API.
- [] Define metadata.
- [] Define complex cases.
- [] Build a complex case example.
- [] Multi step form.

> Disclaimer! This is a prototype, for fast development purposses it is
> not typed, and some components still need some work. Now the Proof of
> Concept has passed and a production version is on progress.

Context Forms is a library for handling forms easily in an expressive
way, it uses the most recent React Context API for handling the state of
the form in a central component.

Why not formik? it re renders all the form.

Why not redux forms? too much haha.

## Features

- Performant: It just re-renders the input updated, not the entire
  form.
- Expressive: You can define validators as an input property.
- Easy to use: No need to write validations.
- Flexible: you can use it with any custom component, as far as it is a
  controlled component.
- Localizable: You can output localized errors.
- Lightweight: less than 2Kb.

## Overview

The Context Forms library is composed of 1 component and 2 HOCs:

### Form

This is the main component, you should wrap every form with this
component. It holds the form context and the central state of the entire
form. it has one event handler:

- onSubmit: Triggered when you press a submit button, it returns an
  object with the form values.

### inputForm

With this decorator, you register the input in the form handler and
inject some extra functionality into the component as props:

- setValue: this is for updating the input value, it will validate the
  value according to the validators you provide.
- errors.
- hasErrors.
- isDirt.
- value.

### withFormContext

With this decorator you subscribe to form state updates, it can be to a
single field, or to the entire form, if the component has no name
attribute provided, then it is subscribing to the entire form events. It
also injects the following properties:

- errorList:
- hasErrors:
- isDirty:

Depending on the subscription type, it injects input specific data or
form data.

## Requirements

Context Forms is based on the latest Context API, so you need React 16+

Context Forms only works with controlled components. So all you need is
that your components expose an onChange handler and a value property, if
your component is not controlled, then you will need to wrap it on a
controlled component that expose these 2 props, and you are done.

## How does it work

For working with context forms, you need to:

1. Create a form with the Form component.
2. Connect your input components with the registerInput decorator.
3. Connect your error components to the form with the withFormContext
   decorator.

## What is Missing

- submit form method
- setting form values

## Dev reference links

https://groundberry.github.io/development/2017/06/11/create-react-app-linting-all-the-things.html

https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

https://www.leighhalliday.com/testing-react-jest-enzyme-sinon

https://medium.com/@ryandrewjohnson/unit-testing-components-using-reacts-new-context-api-4a5219f4b3fe
