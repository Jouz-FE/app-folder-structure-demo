Xquare 어플리케이션의 폴더 구조 데모 버전, 기본적인 풀더 구조.
추후 변경, 삭제 혹은 추가 가능성을 두고 만들어본 데모.

# summary

## `Root` directory

`root` 경로에는 모든 congifuration 파일들을 두려고 하고 그 예들은 아래와 같습니다.

`.gitignore`, `pacakage.json`, `.env.local`, `eslintrc.js` and etc

## `public` Folder

이 폴더에는 `index.html`과 이 파일에 포함될 다른 리소스 파일들을 두려고 합니다. 그 예들은 아래와 같습니다.

`logo.png`, `manifest.json` and so on

## `src` Folder

이 폴더에는 해당하는 어플리케이션의 top-level 컴포넌트인 `App.js`에 사용되는 모든 resource들을 집합하여 관리하는 폴더입니다.

`Routes.js`, `app.js` 그리고 `index.js` 3개의 파일과
`assets`, `components`, `lib`, `pages`, `redux`, `styles` 그리고 `utils` 폴더들로 기본 구성을 했습니다.
추후 customizing으로 완성된 module파일이 존재하면 별도로 `modules`폴더에서 관리할 예정입니다.

---

### Files:

- `Routes.js`: will be a presentational file to show routes of entire project at a glance including how the components are connected with router, provider and arrange of components groups who shares common state seperately such as mixed using of context API, Redux or etc, if neccessary.

- `app.js`: will be also a presentational component to make identification or have symbol that this project is application: nothing more or less than just having symbolic meaning since `Routes.js` has weak meaning for Application.

- `index.js`: same reason as why the most project has this file: composed with a single logic which makes `app.js` to be rendered in html tag who has root id.

Folders:

- `assets`: for all the assets using for the application or components such as images.

- `components`: for all the components which has possibility to be re-used at least once or more.

- `lib`: collection of files composing functions or logics regard with libraries used for application such as logics for social login and etc.

- `pages`: for all the pages files.

- `styles`: all files regards with styles such as collection of commonly used variables, or `reset.css` not for the styles files for each component.

- `utils`: collection of `.js` files which have reusablility, and categorized with folders as its feature, composed with functions for processing the data
