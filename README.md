# <img src="https://github.com/lucasbatiiista/react-file-structure/raw/main/public/logo192.png" alt="drawing" width="30"/> React File Structure 
### This repository is a living document for React File Structure. 

##### Files Structure:

~~~
.gitignore
package-lock.json
package.json
README.md

public/
--- favicon.ico
--- index.html
--- logo192.png
--- logo512.png
--- manifest.json
--- robots.txt

src/
--- App.js
--- index.js

--- assets/
------ images/
--------- logo192.png

--- components/
------ DataDisplay/
------ DataEntry/
------ Feedback/
------ Layout/
------ Navigation/
------ Other/
------ General/
--------- index.js
--------- Button/
------------ Button.js
------------ button.scss
------------ index.js
--------- Icon/
------------ Icon.js
------------ icon.scss
------------ index.js
------------ images/
--------------- icon-react.png

--- pages/
------ index.js
------ Home/
--------- Home.js
--------- home.scss
--------- index.js
------ Page404/
--------- Page404.js
--------- page-404.scss
--------- index.js
------ Product/
--------- index.js
--------- Create/
------------ Create.js
------------ create.scss
------------ index.js
--------- Detail/
------------ Detail.js
------------ detail.scss
------------ index.js
--------- Edit/
------------ Edit.js
------------ edit.scss
------------ index.js
--------- List/
------------ List.js
------------ list.scss
------------ index.js

--- providers/
------ index.js

--- routes/
------ routes.js
------ index.js

--- services/
------ api/
--------- index.js
--------- product.js

--- styles/
------ colors.scss
------ fonts.scss
------ main.scss
------ reset.scss

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

3. Install all dependencies

~~~
npm install
~~~

4. Remove all unnecessary files/folders

5. Then start your project


Thanks in advance :)
