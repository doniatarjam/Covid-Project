from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route("/dashboard")
def dashboard ():
    return render_charts("dashboard.html")