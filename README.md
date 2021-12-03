# Zendesk Code Challenge

This is the app that fulfills the requirement of Zendesk Code Challenge. 

## App Screenshots
![Login Page](https://github.com/QikaiYang/ZendeskCode/blob/main/imgs/login.png)

Login page

![Main Page](https://github.com/QikaiYang/ZendeskCode/blob/main/imgs/main.png)

Main page

![Incorrect Page](https://github.com/QikaiYang/ZendeskCode/blob/main/imgs/incorrect.png)

Incorrect information is entered

![Error Page](https://github.com/QikaiYang/ZendeskCode/blob/main/imgs/program.png)

Unexpected program error (Try type some Chinese characters into the fields - such as 中文)

## Author
Qikai Yang (qikaiy2@illinois.edu)

## References
Part of this App's code is based on this [link](https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia)

## Dependency
The app is built by React and Python. The front-end is implemented by React and the backend is implmented by Python(Flask)
`node v16.13.0`
`python 3.8`
`Flask`
`Pytest`

## How To Run My App
### Step 1. clone the repo
    git clone https://github.com/QikaiYang/ZendeskCode
    cd ZendeskCode

### Step 2. install dependency
    pip install flask
    pip install pytest
    pip install flask_restful
    cd render
    npm install

### Step 3. run my app
Open 2 terminals. 

On the 1st terminal, run the command below to turn on the server (**make sure it is not shut down**)

    cd api
    python api.py

On the 2nd terminal, run the command below

    cd render
    npm start

Then the app should pop up in your browser.

## How To Test My App
I test my front-end with `@testing-library/react` and my back-end with `Pytest`

### Test front-end
On the 1st terminal, run the command below to turn on the server (**make sure it is not shut down**)

    cd api
    python api.py

On the 2nd terminal, run the command below

    cd render
    yarn test

### Test back-end
On the 1st terminal, run the command below to turn on the server (**make sure it is not shut down**)

    cd api
    python api.py

On the 2nd terminal, run the command below

    cd api
    pytest test.py
