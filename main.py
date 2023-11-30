from flask import Flask, render_template, request, redirect, url_for

app  = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/Personas')
# def Personas():
#     return render_template('personas.html')

@app.route('/Conoceme')
def Conoceme():
    return render_template('conoceme.html')

@app.route('/Contactame')
def Contactame():
    return render_template('contactame.html')

if __name__ == '__main__':
    app.run(debug=True)
