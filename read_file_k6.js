// Open method has to be in init section of js file. i.e. outside the functions
var xml_payload = open("k6-mounted-repo/scratch_javascript/Input.txt")

console.log(xml_payload)

// For the above mentioned path to be detected you need to mount the folder into docker container during running image loadimpact/k6

// command to do it
// docker run -i -v <absolute path to the folder you want to mount>:<any name> loadimpact/k6 run - < <js file path to be run>
// by the above command the mentioned folder gets mounted into docker container with <any name> you mentioned.
// To access any files you need to take the mounted folder as reference
// Example:
// docker run -i -v D:/k6-Repo:/k6-mounted-repo loadimpact/k6 run - < read_file_k6.js

// in teh above command, 'D:\k6-Repo' gets mounted into docker container with name 'k6-mounted-repo'. To access any file under 'k6-Repo' we need to start the path with 'k6-mounted-repo' as that is the folder docker container recognizes

// the docker container in our case is loadimpact/k6