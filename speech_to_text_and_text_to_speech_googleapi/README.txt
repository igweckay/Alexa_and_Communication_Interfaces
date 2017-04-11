The first goal is to implement a speech to text program. To accomplish this I use pygsr, a Google speech to text API for python. Below are the installation steps. I used terminal on Mac. These are the steps I took to get it working on Mac. Some of the steps may not be necessary

Reference link for steps 1 and 2: https://people.csail.mit.edu/hubert/pyaudio/

1. brew install portaudio
2. pip install pyaudio
        {
        make sure you have a version of pyaudio that is >= pyaudio 0.2.9
        you can check verion by doing...
        >> pip list
        if you need to upgrade the version do the following...
        >> pip install pyaudio --upgrade
        }
3. pip install pygsr
4. pip install SpeechRecognition
5. brew install libogg flac
6. brew install sox --with-lame --with-flac --with-libvorbis

Reference: https://pythonspot.com/speech-recognition-using-google-speech-api/

7. git clone http://people.csail.mit.edu/hubert/git/pyaudio.git
8. cd pyaudio
9. sudo python setup.py install

10. Run the script from the http://people.csail.mit.edu/hubert/git/pyaudio.git website.
The following code was found on the Python Tutorial Website.

<pre><code>
#!/usr/bin/env python3
# Requires PyAudio and PySpeech.

import speech_recognition as sr

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
    print("You said: " + r.recognize_google(audio))
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))
</pre></code>

Add this code to a file and run it. (Don't add the html tags!) Everything should work.
