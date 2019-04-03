from flask import Flask, render_template, url_for
app = Flask(__name__)

posts = [
    {
        'author': 'Corey Schafer',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2018'
    },
    {
        'author': 'Jane Doe',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'April 21, 2018'
    }
]


@app.route("/home")
def home():
    return render_template('home.html', posts=posts)


@app.route("/about")
def about():
    return render_template('about.html', title='About')


@app.route("/stories")
def stories():
    return render_template('Stories.html', title='Stories')


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', title='Index')


@app.route("/arcard")
def arcard():
    return render_template('arcard.html', title='AR Card')


@app.route("/slides")
def slides():
    return render_template('Slides/index.html', title='AR Card')


if __name__ == '__main__':
    app.run(debug=True)
