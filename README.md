# PlusPlus - Optimization code for Edge Delivery Services

A git subtree add for AEM-boilerplate, this git provides the scripting required to add the extras developed by Tom Cranstoun, Digital Domain Technologies Ltd

PlusPlus is named as it is an increment onto the underlying Project, whether it be Crosswalk, Universal Editor, Franklin, Helix, Edge DeliveryServices or Ecommerce; your choice.

What does it add:

- Configurable Variables
- Json-ld, Dublin Core and Content Ops markup
- Ability to link client configuration separately from site configuration; samples provided for Adobe Launch, Adobe DataLayer, ABTasty, Dante chatbot,
- Ability to have editorial control over mobile images.
- Differentiation between environments, not required but helpful for regulated industries:
  - prod,
  - preprod,
  - stage,
  - final,
  - preview,
  - Live,
  - local,
  - dev environments
- inclusion of helpful code from block-party <https://www.aem.live/developer/block-collection#block-party> : - Modal, ffetch, DOM-helpers, External - Images
- Inclusion of experimentation, expressions through
 git subtree add <https://github.com/adobe/aem-experimentation/wiki/Experiments#authoring>
 git subtree add --squash  --prefix plugins/expressions  <https://github.com/vtsaplin/franklin-expressions/> main

Smart algorithms to:

- add a byline to articles
- tidy up metadata
- remove comment blocks
- dynamically add height to SVG icons
- add scripts on the fly to a page (inject mechanism)
- remove unnecessary title elements from images
- Change Styling if coming-soon is present on the page by adding class hide to the body
- Adds button role to every link with a class button
- Adds 'target blank' to every external link on the page
- Adds 'current class' to any link to the current page
- adds callback chain registration for a callback after 3 seconds and after page load

The final plusplus environment also requires configuration see <https://github.com/Digital-Domain-Technologies-Ltd/plusplusconfiguration>

## Installation

Use GitHub cli to help fork and create your project <https://github.com/cli/cli>  <https://cli.github.com/manual/>

In the below instructions, replace {FORKNAME} with the name of your new Repo.  If I were creating ddttom.com, I would use

gh repo fork --fork-name ddttom <https://github.com/adobe/aem-boilerplate.git>

```sh

gh repo fork --fork-name {FORKNAME} https://github.com/adobe/aem-boilerplate.git
cd {FORKNAME}
git subtree add --squash  --prefix config  https://github.com/Digital-Domain-Technologies-Ltd/plusplusconfig main
git subtree add --squash  --prefix plusplus  https://github.com/Digital-Domain-Technologies-Ltd/plusplus main
git subtree add --squash  --prefix tools  https://github.com/Digital-Domain-Technologies-Ltd/plusplustools main

npm i

```

If you later want to update your subtrees, use one of these

```sh

git subtree pull --squash --prefix config  https://github.com/Digital-Domain-Technologies-Ltd/plusplusconfig main

git subtree pull --squash --prefix plusplus  https://github.com/Digital-Domain-Technologies-Ltd/plusplus main

git subtree pull --squash --prefix tools  https://github.com/Digital-Domain-Technologies-Ltd/plusplustools main




```

## Problem Solving

sometimes you get a false error, *fatal: working tree has modifications.  Cannot add.*

If this happens use the command

```sh

git status

```

if the response is similar to

```sh

Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

```

use this command to fix and try again

```sh

git update-index --refresh


```
