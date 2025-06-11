# odin-todo
The goal is to create a light, little ToDo app making use of what I've learned so far, which is quite a lot, and then going further to add an utilize things I've not yet interacted with.

## ToDo (Ironically):

- [x] Gather requirements
  - [ ] Double-check assignment page
  - [ ] Create vague architectural plan
- [x] Create generic, git project template
  - Look in "Revisiting Webpack"
  - Vaguely match restaurant project folder structure
- [ ] Create visual template (HTML, CSS)
- [ ] Explore date-fns as per assignment
- [ ] Explore localStorage as per assignment
- [ ] Encorporate new libraries into project
- [ ] Build out basic functionality
- [ ] Test and tweak
- [ ] Verify functionality against other examples
- [ ] Refactor
- [ ] Submit

### Create Template

I created a template repo but I'm not confident I did it right. I suppose "right" is whatever is good for me and saves me time. I set up npm, Webpack and some modules. I don't know how to get the default package.json defaults to change to this repo rather than the template repo other than to manually edit them. I am a little proud to have researched that Git doesn't track folder structure, just files, so I made a script in package.json that creates the folder structure, runs npm install and npm init.

### Gather Requirements

#### Attributes

- Item
  - title
  - description
  - due date
  - priority
  - completed
  - notes
  - associated projects
  - colour
- Note
  - description
  - completed
- Project
  - items
  - description
  - title
  - due date
  - priority
  - colour

#### Functions

- CRUD project
- add item to project
- Projects can be independent of items
- CRUD item
- add note to item
- add project to item
- check completed
- items can be independent of projects
- CRUD note
- notes can only be added to items

#### Screens

- project create
- item create
- note create
- project edit
- item edit
- note edit
- list of items
- list of projects
- individual project view
- individual item view

#### Visual Concept Ideas

- Project can give a % complete based on number of completed items
- Three priority levels "Low, Normal, High"
  - check chili or thermometer on pictogrammers material design icons
- Maybe standard boxes for completion
- color selection from a pre-defined list
- should be popups for the edit and create functions

#### Architectural Concepts

- one module for core todo functions
  - item, note, project defined as classes in there
- second module for displaying todo objects
  - for building the core functions into objects
  - import css for styling?
- third module for page functions
  - this can be where UI functions like adding a new item or project are
  - display the lists of items/projects
  - individual project/item view