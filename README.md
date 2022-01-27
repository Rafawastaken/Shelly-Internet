# Web app to control Shelly Device

### About Project

Even though I'm not the hugest IOT fan in the world. I have some smart gadgets in my house, one of which is a shelly 1 connected to my room's light. 
The main idea of this project was to develop a script to control the light using my computer without necessarily using my phone - to me running a script is quicker than picking up my phone. I found the ShellyPy library which had most of the hard work done. I just created this WebApp to clown around and let people control my light.

Link to ShellyPY Github: https://github.com/Jan200101/ShellyPy


### What's a Shelly?

tldr:
Shelly is low-cost brand of IOT that enables users to connect their devices to their network and control them using shelly's phone app.

Shelly Main Website: https://shelly.cloud

### This Project

In this project I develop a Web app that's connected to the Firebase that stores the button pressed. 

Then we have a python script that reads the firebase status and changes the shelly relay position accordingly.


### How to use:

If you want to use this script:
 1. Install dependencies in requirements.txt: python3 -m pip install -r requirements.txt
 2. Need Firebase Account: https://firebase.google.com
 3. Change the app.js and run.py with the Shelly Network IP and Firebase API.


### License

This project is licensed under the MIT License. 
Feel free to use it however you want.
