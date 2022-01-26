import shelve
import pyrebase
import ShellyPy
from time import sleep

def read_firebase():
    firebase_conf = {
        # Repalce with firebase  api
    }

    firebase = pyrebase.initialize_app(firebase_conf)
    db = firebase.database()

    status = db.child().get().val().get('Status').get("Status")

    return status

def change_status(status):
    print(status)
    if status == "OFF":
        status = False
    else:
        status = True

    device = ShellyPy.Shelly("Shelly_ip")
    device.relay(0, turn=status)

def main():
    status = "OFF"
    while True:
        status_updated = read_firebase()
        if status_updated != status:
            status = status_updated
            change_status(status)


if __name__ == "__main__":
    main()