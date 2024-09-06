from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/get_skill')
def get_skill():
    skills = [
        {"name": "Python", "level": random.randint(80, 95)},
        {"name": "JavaScript", "level": random.randint(75, 90)},
        {"name": "UI/UX Design", "level": random.randint(70, 85)},
        {"name": "Flask", "level": random.randint(75, 90)},
        {"name": "Cybersecurity", "level": random.randint(65, 80)}
    ]
    return jsonify(random.choice(skills))

if __name__ == '__main__':
    app.run(debug=True)