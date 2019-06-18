---
---
TracKing Agile Project Management Application
Configuration Instructions
June 17, 2019
---

---

    Run live hosted on HerokuApp
    	https://git.heroku.com/tracking-agile.git

---

    Setup & Run Instructions:

    	1.	Install Node Modules:
    			a.  npm install (client)
    			b.  npm install (server)

    	2.  Local Run Options:
    	    a.	npm run dev
    			    runs client & server simultaneously using concurrently

    	    b.	npm run client
    			    http://localhost:3000

    	    c.	npm run server
    			    http://localhost:5000

---

    Database:

    	MongoDB Atlas

    		Username: doncharest
    		Password: don123

    		"mongoURI": "mongodb+srv://doncharest:don123@cluster0-o35im.mongodb.net/test?retryWrites=true&w=majority"

---

    Deployment:

    	HEROKU
    		https://git.heroku.com/tracking-agile.git

---

    JSON Web Token:

      "jwtSecret": "sta_topSecret"

---
