from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        # Here you can add code to handle the form submission
        # For example, send an email or save to database
        return 'Message sent successfully!'

if __name__ == '__main__':
    app.run(debug=True) 