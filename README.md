# <img src="https://github.com/lucasbatiiista/react-file-structure/raw/main/public/logo192.png" alt="drawing" width="30"/> React File Structure 
### This repository is a living document for React File Structure. 

##### Files Structure:

~~~
.gitignore
package-lock.json
package.json
README.md

public/
------ favicon.ico
------ index.html
------ logo192.png
------ logo512.png
------ manifest.json
------ robots.txt

src/
--- app.js
--- index.js

--- assets/

------ images/

------ styles/
--------- colors.scss
--------- fonts.scss
--------- main.scss
--------- reset.scss

--- components/
------ index.js

------ component-example/
--------- component-example.js
--------- component-example.scss
--------- index.js

--------- images/
--------- components/
------------ sub-component-example/
--------------- sub-component-example.js
--------------- sub-component-example.scss
--------------- index.js

--- packages/
------ global-component-example/
------------ global-component-example.js
------------ global-component-example.scss
------------ index.js

~~~

## How to use

1. Clone the repository

~~~
git clone https://github.com/lucasbatiiista/react-file-structure.git
~~~

2. Remove remote origin

~~~
git remote rm origin 
~~~

3. Remove all unnecessary files/folders

4. Then start your project

Inspired by [Optimal File Structure](https://charles-stover.medium.com/optimal-file-structure-for-react-applications-f3e35ad0a145) on Medium
