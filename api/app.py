from flask import Flask, request
from flask_cors import CORS
from pyjokes import get_joke

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    try:
        joke = get_joke(language='en', category='all')
        return {
            'message': joke
        }
    except Exception as e:
        return {
            'message': str(e)
        }

if __name__ == "__main__":
    app.run(debug=True, port=80)
