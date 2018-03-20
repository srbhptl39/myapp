import speech_recognition as sr
#from pyautogui01 import *
import pyautogui
import time
'''def myrecognizer():
    # Record Audio
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)
 
    # Speech recognition using Google Speech Recognition
    try:
        # for testing purposes, we're just using the default API key
        # to use another API key, use `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`
        # instead of `r.recognize_google(audio)`
        said = r.recognize_google(audio)
        #print "You said: " + said
    except sr.UnknownValueError:
        print "Google Speech Recognition could not understand audio"
    except sr.RequestError as e:
        print "Could not request results from Google Speech Recognition service; {0}".format(e)
        
    return said
'''

def myrecognizer():
   
    r = sr.Recognizer()
    m = sr.Microphone()

    try:
        print("A moment of silence, please...")
        with m as source: r.adjust_for_ambient_noise(source)
        print("Set minimum energy threshold to {}".format(r.energy_threshold))
        while True:
            print("Say something!")
            with m as source: audio = r.listen(source)
            print("Got it! Now to recognize it...")
            try:
                # recognize speech using Google Speech Recognition
                value = r.recognize_google(audio)

                # we need some special handling here to correctly print unicode characters to standard output
                if str is bytes:  # this version of Python uses bytes for strings (Python 2)
                    print(u"You said {}".format(value).encode("utf-8"))
                    return value
                else:  # this version of Python uses unicode for strings (Python 3+)
                    print("You said {}".format(value))
            except sr.UnknownValueError:
                print("Oops! Didn't catch that")
            except sr.RequestError as e:
                print("Uh oh! Couldn't request results from Google Speech Recognition service; {0}".format(e))
    except KeyboardInterrupt:
        pass
    return value




def doopenapp(task):
    pyautogui.PAUSE = 1
    pyautogui.hotkey('win')
    pyautogui.PAUSE = 1
    pyautogui.typewrite(task)
    pyautogui.PAUSE = 1
    pyautogui.typewrite(['enter'])
    pyautogui.PAUSE = 1



def runwebsite(website):
    if website == '':
        return 
    pyautogui.typewrite(website , interval=0.1)
    pyautogui.PAUSE = 0.5
    pyautogui.typewrite(['enter'])
    pyautogui.PAUSE = 1

def scroll(said):
    if said.find('up') != -1:
        pyautogui.scroll(400)
    if said.find('down') != -1:
        pyautogui.scroll(-400)


def minimize():
    pyautogui.hotkey('win','d')

def pressenter():
    pyautogui.typewrite(['enter'])

def typewrite(said):
    print 'Typing: ' + said
    pyautogui.typewrite(said,interval=0.3)


def activity(said):
    print said

    if said.find('type') != -1 or said.find('hi') != -1:
        if said.find('type') != -1:
            typewrite(said[5:])
        if said.find('hi') != -1:
            typewrite(said[3:])
        return

    if said.find('open') != -1:
        #if said.find('google') != -1 or said.find('chrome') != -1:
            #print said.find('google')
        doopenapp(said[5:])
        return

    if said.find('enter') != -1:
        pressenter()
        return

    
    if said.find('minimize') != -1 or said.find('show desktop') != -1 or said.find('minimise') != -1:
        minimize()
        return

    if said.find('scroll') != -1 or said.find('school') != -1:
        scroll(said)
    
            




def runrecognizer():
    x=1
    while x==1:
        print 'running...'
        said = myrecognizer()
        said = said.lower()
        if said.find('stop') != -1 or said.find('break') != -1 or said.find('cancel') != -1:
            x=2
            print 'Stopped Recognition'
        
        activity(said)
        
        

runrecognizer()







