 REST based JSON mock server :clipboard:
This is a REST based JSON mock server to easily add, update, delete and access data from a JSON file.

Tools/Technologies: JavaScript, NodeJS, ExpressJS

# Site is LIVE At:  http://13.235.83.227:9090/post

## Steps to Run Locally :scroll:
```sh
1. Clone this repository
2. Open the terminal where this repository is downloaded.
3. Make sure you have javascript compiler and npm installed in your system.
4. Now run this command npm install
5. Open the browser with this link http://localhost:3000/post
```

## Full Problem Statement :speaking_head:
```sh
Build a REST based JSON mock server to easily add, update, delete and access data from a JSON file.

1. Every data set should have a parent identifier (entity type), which will be used in the GET APIs.
2. Every data set should have an ID (Primary key)
3. ID should be immutable, error needs to be thrown if ID is tried to be mutated.
4. If you make POST, PUT, PATCH or DELETE requests, changes have to be automatically saved to store.json.
5. The store.json file should support multiple entity types.
```

## Different API'S (LocalHost + Hosted API):woman_teacher:  
## (Please see the video for more Clarification)

**1. GET REQUEST (Video - https://www.youtube.com/watch?v=_YHkThd-XDI)**
```sh
1. http://localhost:3000/post (GET Request) - This api is used to show the data that is present in JSON file
   http://13.235.83.227:9090/post

2. http://localhost:3000/post/:ID  (GET Request) - This api is used to show the particular json data which has id = ID
   http://13.235.83.227:9090/post/:ID

3. http://localhost:3000?title=title1&author=CIQ (GET Request) -
   http://13.235.83.227:9090/post?title=title1&author=CIQ
                                              This api is used to filter the json data which has title = title1 and author = CIQ

4. http://localhost:3000?_sort=views&_order=asc (GET Request) -
   http://13.235.83.227:9090/post?_sort=views&_order=asc
                                              This api is  to sort the json data according to the _sort parameter ascending

5. http://localhost:3000?_sort=views&_order=des (GET Request) -
   http://13.235.83.227:9090/post?_sort=views&_order=des
                                              This api is used to sort the json data according to the _sort parameter descending
```                  

**2. Post Request (Video - https://www.youtube.com/watch?v=713hDtMIZ5A)**
```sh
1. http://localhost:3000/post (POST Request) - This api is used to insert data in the JSON File. We have to give input in postman as
   http://13.235.83.227:9090/post              BODY -> RAW -> JSON -> DATA
```

**3. Patch Request (Video - https://www.youtube.com/watch?v=bCZ_QGZDC7E)**
```sh
1. http://localhost:3000/post/:ID (PATCH Request) - This api is used to make changes in JSON data. We have to insert ID and change data in
   http://13.235.83.227:9090/post/:ID               BODY -> RAW -> JSON -> DATA
```

**4. Delete Request (Video - https://www.youtube.com/watch?v=bCZ_QGZDC7E)**                  
```sh
1. http://localhost:3000/post/:ID (Delete Request) - This api is used to delete the data from JSON file which has ID = ID
   http://13.235.83.227:9090/post/:ID        

```

## Extra API'S

**1. Enable filtering at entity level :**
```sh
http://localhost:3000/post?title=title1&author=CIQ (GET Request) - This api is used to search in the JSON Database on the basis of title and author
http://13.235.83.227:9090/post?title=title1&author=CIQ
```

**1. Enable sorting at entity level :**
```sh
http://localhost:3000/post?_sort=views&_order=asc (GET Request) - This api is used to sort JSON Database according to the _views ascending or descending
http://13.235.83.227:9090/post?_sort=views&_order=asc
```

## Contact With Me :busts_in_silhouette:

- Phone +91 7302383783
- Email - rishabhgarg25699@gmail.com
- Telegram - https://t.me/Rishabhhello
