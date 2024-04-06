from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/signup", methods=["POST"])
def signup():

    email = request.json["email"]
    password = request.json["password"]
    # firstName = request.json["firstname"]
    # lastName = request.json["lastname"]
    # birthDay = request.json["birthday"]
    # role = request.json["role"]
    # expectSalary = request.json["expectsalary"]
    # email = request.json["email"]
    # address = request.json["address"]
    # address2 = request.json["address2"]
    # country = request.json["country"]
    # state = request.json["state"]
    # zip = request.json["zip"]
    # gender = request.json["gender"]
    # cv = request.json["cv"]


    return jsonify({
        "id" : "1",
        "email" : email
    #     "firstName" : firstName,
    #     "lastName" : lastName,
    #     "birthday" : birthDay,
    #    "role" : role,
    #    "expectSalary" : expectSalary,
    #    "email" : email,
    #    "address" : address,
    #    "address2" : address2,
    #    "country" : country,
    #    "state" : state,
    #  "zip" : zip,
    #    "gender" : gender,
    #    "cv" : cv    
    })

if __name__ == "__main__":
    app.run(debug=True)



#     {
#     "firstname":"piyawat",
#     "lastname":"chiwakul",
#     "birthday":"07-23-2024",
#     "role":"Full Stack",
#     "expectsalary":"25,000",
#     "email":"piyawat_chiwakul@hotmail.com",
#     "address":"220/6 จ.เชียงใหม่ อ.สันป่าเปา",
#     "address2":"",
#     "country":"Thai",
#     "state":"Bangkok",
#     "zip":"10260",
#     "gender":"male",
#     "cv":"null"
# }