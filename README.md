# SWAPLINGS CLIENT

## To start in development mode:
    In Terminal, type "expo start". Then select for example web version.
    If iOS Simulator is desired: First start X-code, then start Simulator, then (in Terminal) type "expo start", then (in Terminal) press "i".
    If you want the server functioning, start the server with "npm run dev". An empty test MongoDB is then available.

## To run tests (client only, no connection to server or database):
    jest

## E2E testing (with server and MongoDB)):
    In the first Terminal, start the server with
        npm run e2e
    In the second Terminal, build the client with
        expo build:ios
    (Choose simulator option; building may take like 15 min).
    Download the build folder from expo.io account.
    Rename the downloaded folder to "Exponent.app" and save to /bin folder.
    Then start X-code and Simulator.
    Then in the second Terminal
        expo start
    Press "i" to choose iOS Simulator.
    Then in a third terminal
        detox test
    NOTE: YOU NEED TO RESTART THE SERVER AFTER EACH TEST RUN TO CLEAR THE DATABASE!